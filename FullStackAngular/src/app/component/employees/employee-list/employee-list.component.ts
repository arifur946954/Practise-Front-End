import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees:Employee[]=[];


  constructor(private employeeService: EmployeesService) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployee()
   .subscribe({
    next:(employees)=>{
      console.log(employees)
      this.employees=employees
    },
    error:(response)=>{console.log(response)}
   })
  }

}
