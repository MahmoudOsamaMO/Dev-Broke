import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Company } from '../Models/company.model';
@Injectable({
    providedIn: 'root',
  })

  export class CompanyService {
    company : Company;
    constructor() { }
  
    getCompany(): Observable<Company> {
      this.company = new Company();
      this.company.Id = 1;
      this.company.Name = "Integrant";
      this.company.Address = "Maadi";
      return of(this.company);
    }
  }