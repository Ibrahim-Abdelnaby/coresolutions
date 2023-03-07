import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirTransportationComponent } from './air-transportation/air-transportation.component';
import { ArafatPlansComponent } from './arafat-plans/arafat-plans.component';
import { HomeComponent } from './home/home.component';
import { MainSystemsComponent } from './main-systems/main-systems.component';
import { Mash3arComponent } from './mash3ar/mash3ar.component';
import { MenaPlansComponent } from './mena-plans/mena-plans.component';
import { QualityComponent } from './quality/quality.component';
import { SatisfactionComponent } from './satisfaction/satisfaction.component';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
import { LoginUserOneComponent } from './login-user-one/login-user-one.component';
import { LoginUserTowComponent } from './login-user-tow/login-user-tow.component';
import { SystemsOneComponent } from './systems-one/systems-one.component';
import { HomeOneComponent } from './home-one/home-one.component';
import { HomeTowComponent } from './home-tow/home-tow.component';
import { SystemTowComponent } from './system-tow/system-tow.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'main-systems', component: MainSystemsComponent },
  { path: 'mashaaer', component: Mash3arComponent },
  { path: 'quality', component: QualityComponent },
  {
    path: 'satisfaction',
    component: SatisfactionComponent,
  },
  { path: 'arafat-plans', component: ArafatPlansComponent },
  { path: 'menaa-plans', component: MenaPlansComponent },
  { path: 'airports', component: AirTransportationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login-user1', component: LoginUserOneComponent },
  { path: 'login-user2', component: LoginUserTowComponent },
  { path: 'systems-1', component: SystemsOneComponent },
  { path: 'home-1', component: HomeOneComponent },
  { path: 'home-2', component: HomeTowComponent },
  { path: 'systems-2', component: SystemTowComponent },
  { path: '', component: TableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
