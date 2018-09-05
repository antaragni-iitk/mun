import { LetterComponent } from './homepage/components/about/letter/letter.component';
import { HomeComponent } from './homepage/components/home/home.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatComponentsModule} from './mat-components/mat-components.module';
import { ParticlesModule } from 'angular-particle';

import {AppComponent} from './app-component/app.component';
import {BannerComponent} from './homepage/components/banner/banner.component';
import {ContactComponent} from './homepage/components/contact/contact.component';
import {AboutComponent} from './homepage/components/about/about.component';
import {NavbarComponent} from './navbar/navbar.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {LandingComponent} from './homepage/components/landing/landing.component';
import {UiService} from './services/ui.service';
import {ContentService} from './services/content.service';
import {RegisterComponent} from './dashboard/components/register/register.component';
import {FormsModule} from '@angular/forms';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireModule} from 'angularfire2';
import {Funcs} from './utility/function';
import {NgsRevealModule} from 'ng2-scrollreveal';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {AnalyticsDirective} from './directives/analytics.directive';
import {AntaragniFeedComponent} from './antaragni-feed';
import {FaqComponent} from './homepage/components/faq/faq.component';
import { FooterComponent } from './homepage/components/footer/footer.component';
import { SponsorsComponent } from './homepage/components/sponsors/sponsors.component';
import {DialogMessageComponent} from '@services/fblogin.service';
import { SidenavComponent } from './homepage/components/sidenav/sidenav.component';
import { ResourcesComponent } from './homepage/components/resources/resources.component';
import { RegisterationComponent } from './homepage/components/registeration/registeration.component';
import { MouseDownComponent } from './homepage/components/footer/mouse-down/mouse-down.component';
import { CommitteesComponent } from './homepage/components/committees/committees.component';
import { TestComponent } from './test/test.component';
import { CommitteeComponent } from './homepage/components/committees/committee/committee.component';
import { AntaragniComponent } from './homepage/components/about/antaragni/antaragni.component';
import { RegisterDialogComponent } from './homepage/components/registeration/register-dialog/register-dialog.component';
import { CollabComponent } from './homepage/components/collab/collab.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    AboutComponent,
    NavbarComponent,
    DashboardComponent,
    HomeComponent,
    LandingComponent,
    RegisterComponent,
    AnalyticsDirective,
    AntaragniFeedComponent,
    FaqComponent,
    FooterComponent,
    SponsorsComponent,
    DialogMessageComponent,
    SidenavComponent,
    ResourcesComponent,
    RegisterationComponent,
    MouseDownComponent,
    CommitteesComponent,
    TestComponent,
    CommitteeComponent,
    AntaragniComponent,
    LetterComponent,
    ContactComponent,
    RegisterDialogComponent,
    CollabComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    HttpClientModule,
    AngularFirestoreModule.enablePersistence(),
    AppRoutingModule,
    FlexLayoutModule,
    NgsRevealModule.forRoot(),
    MatComponentsModule,
    ParticlesModule,
  ],
  providers: [UiService, Funcs, ContentService],
  bootstrap: [AppComponent],
  entryComponents: [DialogMessageComponent, CommitteeComponent, AntaragniComponent, LetterComponent, RegisterDialogComponent]
})
export class AppModule {
}
