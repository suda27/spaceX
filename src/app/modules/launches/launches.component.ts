import { Component, OnInit } from '@angular/core';
import { Launch } from 'src/app/models/launch';
import { LaunchesService } from './launches.service';

@Component({
  selector: 'spacex-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {

  constructor(private launchSvc: LaunchesService) { }

  launchInfo: Launch = undefined;

  ngOnInit() {

   

  }

}
