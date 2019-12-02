import { Component, OnInit } from '@angular/core';
import { CompanyService } from './company.service';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'spacex-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private companySvc: CompanyService) { }

  companyInfo: Company;
  
  ngOnInit() {

    this.companySvc.getCompanyInfo().subscribe({
      next: companyInfo => {
        this.companyInfo = companyInfo;
        console.log(this.companyInfo.headquarters.address)
      }
    })
  }

}
