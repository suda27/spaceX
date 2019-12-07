import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { LoaderComponent } from '../../shared/loader/loader.component'
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [CompanyComponent, LoaderComponent],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class CompanyModule { }
