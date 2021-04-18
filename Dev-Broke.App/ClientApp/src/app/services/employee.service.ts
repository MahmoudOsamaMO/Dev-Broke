import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from '../Models/employee.model';
import { Employees } from './mock-employees';
@Injectable({
    providedIn: 'root',
  })

  export class EmployeeService {

    constructor() { }
  
    getEmployees(companyId : number): Observable<Employee[]> {
      const employees = of(Employees.filter(e=>e.CompanyId==companyId));
     debugger;
      return employees;
    }
  }