import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../model/employee.model';
import { Assignment } from '../model/assignment.model';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  @Input() employee: Employee;
  @Input() selectedAssignment: Assignment;
  
  constructor() { 
  }

  ngOnInit() {
  }

}
