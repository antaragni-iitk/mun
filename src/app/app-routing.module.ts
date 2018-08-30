import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {LandingComponent} from './homepage/components/landing/landing.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RegisterComponent} from './dashboard/components/register/register.component';
import {AuthGuard, guards, LocalUserGuard, LoggedInGuard, RegisteredGuard, RegisteredUserGuard} from './guards';
import {AntaragniFeedComponent} from './antaragni-feed';

const routes: Routes = [
  {path: 'landing', component: LandingComponent},
  {path: 'dash', component: DashboardComponent},
  {path: '', redirectTo: 'landing', pathMatch: 'full'},
  {
    path: 'dashboard', component: DashboardComponent,
    canActivate: [LocalUserGuard],
    canActivateChild: [AuthGuard],
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'prefix', },
      {path: 'home', component: AntaragniFeedComponent, canActivate: [RegisteredUserGuard]},
      {
        path: 'register', component: RegisterComponent,
        canActivate: [RegisteredGuard]
      },
    ]
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [guards],
  declarations: []
})
export class AppRoutingModule {
}
