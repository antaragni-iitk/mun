import {Component, Injectable, NgZone} from '@angular/core';
import {Router} from '@angular/router';

import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import {AngularFireAuth} from 'angularfire2/auth';
import {Funcs} from '../utility/function';
import {catchError, switchMap} from 'rxjs/operators';
import {distinctUntilChanged, map} from 'rxjs/internal/operators';
import {ILocalUser, LocalUser} from '../models/localuser';
import {UiService} from '@services/ui.service';
import {MatDialog} from '@angular/material';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class FbloginService {
  currentUser: BehaviorSubject<LocalUser>;
  $logged: Observable<LocalUser>;
  isAuthenticated$: Observable<boolean>;
  dataFetched = new Subject<boolean>();
  public userRef = (id: string): AngularFirestoreDocument<any> => this.afs.doc(`fbusers/${id}`);
  init = (): void => {
    this.currentUser = new BehaviorSubject<LocalUser>(null);
    this.isAuthenticated$ = this.afAuth.authState.pipe(
      map((res) => !!res)
    );
    this.$logged = this.afAuth.authState.pipe(
      switchMap((user: any) => {
        if (user) {
          return this.userRef(user.uid).valueChanges();
        }
        return of(null);
      }),
      catchError(err => {
        this.functions.handleError(err.message);
        return of(null);
      })
    );
    this.$logged.subscribe((users) => {
      console.log('hi');
      this.currentUser.next(users);
      this.dataFetched.next(!!users);
    });
  };

  signin = () => {
    this.dataFetched.pipe(distinctUntilChanged()).subscribe(
      (val) => val ? this.zone.run(() => this.router.navigate(['/dashboard'])) : false
    );
    const provider = new firebase.auth.FacebookAuthProvider();
    // provider.addScope('user_posts,user_link,user_birthday');
    return this.afAuth.auth.signInWithPopup(provider)
      .then((res: any) => {
        this.setUser(res, res);
        return res;
      })
      .catch(err => {
        this.functions.handleError(err.message);
        if (err.message === 'FB is not defined') {
          this.dialogRef.open(DialogMessageComponent);
        }
      });
  };

  setUser = (res, user) =>
    res.additionalUserInfo.isNewUser ?
      this.userRef(res.user.uid).set({
        uid: res.user.uid,
        name: res.additionalUserInfo.profile.name,
        email: {
          value: res.additionalUserInfo.profile.email,
          verified: res.user.emailVerified,
        },
        facebook: {
          Token: res.credential.accessToken,
          facebookID: res.additionalUserInfo.profile.id,
          facebookLink: user.link ? user.link : '',
        },
        personal: {
          gender: res.additionalUserInfo.profile.gender ? res.additionalUserInfo.profile.gender : '',
          phoneNumber: res.user.phoneNumber,
          picture: res.additionalUserInfo.profile.picture.data.url,
          birthday: res.additionalUserInfo.profile.birthday ? res.additionalUserInfo.profile.birthday : ''
        },
        registration: {
          post: ''
        },
      }as ILocalUser) : 200;


  updateUser = (user: LocalUser) => this.userRef(user.uid).set({...user} as ILocalUser)
    .then(() => this.currentUser.next(user));

  constructor(private router: Router,
              private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private functions: Funcs,
              public zone: NgZone,
              private ui: UiService,
              private dialogRef: MatDialog) {
    this.init();
    setTimeout(() => this.afs.collection('/ping').valueChanges().subscribe(() => console.log('hi hackers!')), 6000);
  }

  updateRegistration(user: LocalUser) {
    this.updateUser(user)
      .then(() => this.zone.run(() => this.router.navigate(['/'])))
      .catch((err) => this.functions.handleError(err));
  }

  signOut() {
    this.afAuth.auth.signOut()
      .then(() => this.zone.run(() => this.router.navigate(['/'])))
      .catch(err => this.functions.handleError(err.message));
    this.ui.scrollPos.next(false);
  }
}

@Component({
  selector: 'app-message',
  template: '<p>Some functions are not supported in firefox with tracking protection.<br>Please try other browser or switch off tracking</p>',
})
export class DialogMessageComponent {
}
