import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map, delay } from 'rxjs/operators'
import { DelayService } from './util/delay.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'spacex-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title = 'spacex';
  rocketSvg: boolean = false;
  loaderSvg: boolean = true;
  navBarLoad: boolean = false;

   ngOnInit() {
    this.loadInitalAnimations();
  }

  constructor(private http: HttpClient, private delaySvc: DelayService, private location: Location) {

  }

  getData(): Observable<any> {
    return this.http.get('https://api.spacexdata.com/v3/rockets')
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async loadInitalAnimations(){
    if (this.location.path() == '') {
      await this.delaySvc.delay(3500);
      this.loaderSvg = false;
      this.rocketSvg = true;
      await this.delaySvc.delay(2500);
      this.rocketSvg = false;
      this.navBarLoad = true;
    } else if (this.location.path().charAt(1)) {
      this.loaderSvg = false;
      this.navBarLoad = true;
    }
  }


}
