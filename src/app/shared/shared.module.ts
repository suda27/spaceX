import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { CarouselModule } from 'primeng/carousel';
import { MissionSvgComponent } from './mission-svg/mission-svg.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoaderComponent, MissionSvgComponent],
  imports: [
    CommonModule, CarouselModule, InputTextModule, ButtonModule, FormsModule
  ],
  exports: [
    LoaderComponent, CarouselModule, MissionSvgComponent, InputTextModule, ButtonModule, FormsModule
  ]
})
export class SharedModule { }
