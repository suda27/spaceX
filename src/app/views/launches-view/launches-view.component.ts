import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaunchesService } from 'src/app/modules/launches/launches.service';
import { Launch } from 'src/app/models/launch';

@Component({
  selector: 'spacex-launches-view',
  templateUrl: './launches-view.component.html',
  styleUrls: ['./launches-view.component.css']
})
export class LaunchesViewComponent implements OnInit {

  nextLaunchView: boolean;
  pastLaunchView: boolean;
  upcomingLaunchView: boolean;
  singleLaunchView: boolean;
  allLaunchView: boolean;
  latestLaunchView: boolean;
  viewOnDisplay: string;

  launchInfo: Launch = undefined;

  constructor(private router: Router, private launchSvc: LaunchesService) { }

  ngOnInit() {
    this.viewOnDisplay = this.router.url.slice(10);
    if (this.viewOnDisplay == 'next') {
      this.nextLaunchView = true;
      this.launchSvc.getNextLaunchInfo().subscribe({
        next: launchInfo => {
          this.launchInfo = launchInfo;
          console.log(this.launchInfo);
        }
      });
    }



  }

}
