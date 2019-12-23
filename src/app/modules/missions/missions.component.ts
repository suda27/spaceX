import { Component, OnInit } from '@angular/core';
import { Mission } from 'src/app/models/mission';
import { MissionsService } from './missions.service';

@Component({
  selector: 'spacex-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent implements OnInit {

  missionInfo: Mission[]

  constructor(private missionSvc: MissionsService) { }

  ngOnInit() {

    this.missionSvc.getAllMisionsInfo().subscribe(
      {
        next: missionInfo => {
        this.missionInfo = missionInfo;
          console.log(this.missionInfo);
        },
        error: err => console.log(err)
      }
    );
    console.log(this.missionInfo);
  }

}
