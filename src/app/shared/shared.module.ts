import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { CarouselModule } from 'primeng/carousel';
import { MissionSvgComponent } from './mission-svg/mission-svg.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [LoaderComponent, MissionSvgComponent],
  imports: [
    CommonModule, CarouselModule, InputTextModule, ButtonModule, RouterModule
  ],
  exports: [
    LoaderComponent, CarouselModule, MissionSvgComponent, InputTextModule, ButtonModule, RouterModule
  ]
})
export class SharedModule { }
