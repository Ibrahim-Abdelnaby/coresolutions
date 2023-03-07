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
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
