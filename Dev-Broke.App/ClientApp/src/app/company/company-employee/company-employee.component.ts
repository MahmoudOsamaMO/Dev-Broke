import { Component, OnInit , Input} from '@angular/core';
import { Employee } from '../../Models/employee.model';
import {EmployeeService} from '../../services/employee.service'


@Component({
  selector: 'app-company-employee',
  templateUrl: './company-employee.component.html',
  styleUrls: ['./company-employee.component.css']
})
export class CompanyEmployeeComponent implements OnInit {

  employees:Employee[] =[];

  constructor(private employeeService: EmployeeService) { }

  @Input() companyId : number;
  ngOnInit() {
    this.employeeService.getEmployees(this.companyId).subscribe(emps=>this.employees =emps);
    console.log(this.employees);
  }

}