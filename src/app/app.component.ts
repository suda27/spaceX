import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map, delay } from 'rxjs/operators'
import { DelayService } from './util/delay.service';

@Component({
  selector: 'spacex-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title = 'spacex';
  rocketSvg: boolean = false;
  loaderSvg :boolean = true;
  async ngOnInit() {
    await this.delaySvc.delay(3500);
    this.loaderSvg = false;
    this.rocketSvg = true;
    await this.delaySvc.delay(3000);
    this.rocketSvg = false;
  }

  constructor(private http: HttpClient, private delaySvc: DelayService) {

  }

  getData(): Observable<any> {
    return this.http.get('https://api.spacexdata.com/v3/rockets')
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


}
