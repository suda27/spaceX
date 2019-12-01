import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './shared/loader/loader.component';
import {HttpClientModule} from '@angular/common/http';
import { RocketSvgComponent } from './shared/rocket-svg/rocket-svg.component';
import { CountdownSvgComponent } from './shared/countdown-svg/countdown-svg.component';
import { NavbarComponent } from './component/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    RocketSvgComponent,
    CountdownSvgComponent,
    NavbarComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
