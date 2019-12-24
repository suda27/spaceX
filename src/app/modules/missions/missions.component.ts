import { Component, OnInit } from '@angular/core';
import { Mission } from 'src/app/models/mission';
import { MissionsService } from './missions.service';


@Component({
  selector: 'spacex-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent implements OnInit {

  missionInfo: Mission[] = undefined;
  singleMissionInfo: Mission = undefined;
  missionId: string;
  responsiveOptions;

  constructor(private missionSvc: MissionsService) {

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit() {

    this.missionSvc.getAllMisionsInfo().subscribe(
      {
        next: missionInfo => {
          this.missionInfo = missionInfo;
          console.log(this.missionInfo);
          console.log(this.missionInfo.length)
        },
        error: err => console.log(err)
      }
    );
    console.log(this.missionInfo);
  }

  findMission() {
    this.missionSvc.getSingleMisionsInfo(this.missionId).subscribe({
      next: data => {
        this.singleMissionInfo = data;
        console.log(this.singleMissionInfo);
      },
      error: err => console.error(err)
    })
  }

  selectMission(mission: Mission) {
    this.singleMissionInfo = mission;
  }

}
