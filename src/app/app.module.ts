import { HomeComponent } from './homepage/components/home/home.component';
import { SocialLinksComponent } from './homepage/components/social-links/social-links.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatComponentsModule} from './mat-components/mat-components.module';
import { ParticlesModule } from 'angular-particle';

import {AppComponent} from './app-component/app.component';
import {BannerComponent} from './homepage/components/banner/banner.component';
import {HeaderComponent} from './homepage/components/header/header.component';
import {ContactComponent} from './homepage/components/contact/contact.component';
import {AboutComponent} from './homepage/components/about/about.component';
import {NavbarComponent} from './navbar/navbar.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LeaderboardComponent} from './dashboard/components/leaderboard/leaderboard.component';
import {IdeasComponent} from './dashboard/components/ideas/ideas.component';
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
import {AntaragniFeedService} from './services/feed';
import {AntaragniFeedComponent} from './antaragni-feed';
import {FacebookModule} from 'ngx-facebook';
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
import { LetterComponent } from './homepage/components/about/letter/letter.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    ContactComponent,
    AboutComponent,
    NavbarComponent,
    DashboardComponent,
    HomeComponent,
    LeaderboardComponent,
    IdeasComponent,
    LandingComponent,
    RegisterComponent,
    AnalyticsDirective,
    AntaragniFeedComponent,
    FaqComponent,
    FooterComponent,
    SocialLinksComponent,
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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    HttpClientModule,
    AngularFirestoreModule,
    AppRoutingModule,
    FlexLayoutModule,
    NgsRevealModule.forRoot(),
    MatComponentsModule,
    FacebookModule.forRoot(),
    ParticlesModule,
  ],
  providers: [UiService, Funcs, AntaragniFeedService, ContentService],
  bootstrap: [AppComponent],
  entryComponents: [DialogMessageComponent, CommitteeComponent, AntaragniComponent, LetterComponent ]
})
export class AppModule {
}
