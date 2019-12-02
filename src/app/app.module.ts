import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './shared/loader/loader.component';
import {HttpClientModule} from '@angular/common/http';
import { RocketSvgComponent } from './shared/rocket-svg/rocket-svg.component';
import { CountdownSvgComponent } from './shared/countdown-svg/countdown-svg.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CompanyModule } from './modules/company/company.module';
import { LaunchesModule } from './modules/launches/launches.module';
import { MissionsModule } from './modules/missions/missions.module';
import { TimerComponent } from './shared/timer/timer.component';



@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    RocketSvgComponent,
    CountdownSvgComponent,
    NavbarComponent,
    TimerComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CompanyModule,
    LaunchesModule,
    MissionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
