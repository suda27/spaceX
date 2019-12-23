import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchesComponent } from './launches.component'
import { SharedModule } from '../../shared/shared.module';
import { AppRoutingModule } from '../../app-routing.module';


@NgModule({
  declarations: [LaunchesComponent],
  imports: [
    CommonModule, SharedModule, AppRoutingModule
  ]
  
})
export class LaunchesModule { }
