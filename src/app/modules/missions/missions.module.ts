import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionsComponent } from './missions.component';
import { SharedModule } from '../../shared/shared.module';
@NgModule({
  declarations: [MissionsComponent],
  imports: [
    CommonModule, SharedModule
  ]
})
export class MissionsModule { }
