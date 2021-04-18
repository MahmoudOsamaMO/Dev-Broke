import { Component, OnInit } from '@angular/core';
import { Company } from '../Models/company.model';
import {CompanyService} from '../services/company.service'
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private companyService : CompanyService) { }
  company : Company;
  ngOnInit() {
    this.companyService.getCompany().subscribe(company => this.company = company);
  }

}


