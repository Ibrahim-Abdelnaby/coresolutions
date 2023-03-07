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
import { TableComponent } from './table/table.component';
import { LoginUserOneComponent } from './login-user-one/login-user-one.component';
import { LoginUserTowComponent } from './login-user-tow/login-user-tow.component';
import { SystemsOneComponent } from './systems-one/systems-one.component';
import { HomeOneComponent } from './home-one/home-one.component';
import { HomeTowComponent } from './home-tow/home-tow.component';
import { SystemTowComponent } from './system-tow/system-tow.component';

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
    LoginComponent,
    TableComponent,
    LoginUserOneComponent,
    LoginUserTowComponent,
    SystemsOneComponent,
    HomeOneComponent,
    HomeTowComponent,
    SystemTowComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
