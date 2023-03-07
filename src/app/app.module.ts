import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainSystemsComponent } from './main-systems/main-systems.component';
import { Mash3arComponent } from './mash3ar/mash3ar.component';
import { ArafatPlansComponent } from './arafat-plans/arafat-plans.component';
import { MenaPlansComponent } from './mena-plans/mena-plans.component';
import { QualityComponent } from './quality/quality.component';
import { SatisfactionComponent } from './satisfaction/satisfaction.component';
import { AirTransportationComponent } from './air-transportation/air-transportation.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainSystemsComponent,
    Mash3arComponent,
    ArafatPlansComponent,
    MenaPlansComponent,
    QualityComponent,
    SatisfactionComponent,
    AirTransportationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
