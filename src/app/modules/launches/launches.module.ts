import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LaunchesComponent } from './launches.component'
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [LaunchesComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
  
})
export class LaunchesModule { }
