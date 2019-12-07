import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LaunchesComponent} from './launches.component'
import { SharedModule } from '../../shared/shared.module';




@NgModule({
  declarations: [LaunchesComponent],
  imports: [
    CommonModule,SharedModule
  ]
})
export class LaunchesModule { }
