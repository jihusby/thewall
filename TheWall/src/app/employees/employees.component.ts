import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../model/employee.model';
import { Assignment } from '../model/assignment.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employeesUpdated;
  index: number = 0;
  title = 'WallOfFame';

  employees: Employee[];

  selected: boolean;
  selectedEmployee: Employee;
  selectedAssignments: Assignment[];
  commentsQueue: Assignment[];
  selectedAssignment: Assignment;

  marginTxt: string = '0px';

  imgWidth: string = '0px';
  imgHeight: string = '0px';
  divHeight: string = '0px';
  containerWidth: string = '0px';
  containerWidthLeft: string = '0px';
  containerWidthRight: string = '0px';

   // Macbook
  width: number = 1680;
  height: number = 1050;
  noOfEmployees: number;
  margin: number = 10;
  cols: number = 7;
  rows: number;
  detailArea: number = 0.3;

  // Big screen
/*   width: number = 1920;
  height: number = 1080;
  noOfEmployees: number;
  margin: number = 15;
  cols: number = 10;
  rows: number;
  detailArea: number = 0.3;
 */
  
  intervalCounter; 
  employeeIndex: number = 0;
  commentIndex: number = 0;

  constructor(private employeeService: EmployeeService) {
    
    
  }
  
  ngOnInit() {

    this.employeesUpdated = this.employeeService.employeeListUpdated.subscribe((employees: Employee[]) => {

      this.employees = this.employeeService.getEmployees();
      this.commentsQueue = this.employeeService.getAllAssignments();

      this.containerWidthRight = Math.round((this.width) * (this.detailArea)) + 'px';
      this.width = this.width * (1-this.detailArea);
      
      this.noOfEmployees = this.employees.length;
      this.rows = Math.round(this.noOfEmployees / this.cols);
  
      var totalMarginWidth = 
          (this.margin * (2*this.cols)) + // Two margins per image
          (2 * this.margin);  // One margin extra on each side
  
      var imgWidth = (this.width-totalMarginWidth) / this.cols;
  
      this.imgWidth = (imgWidth) + 'px';
      this.divHeight = (imgWidth + 18) + 'px';
      var width = (
        (imgWidth*(this.cols)-20) + 
        (this.cols*this.margin));
      this.containerWidth = Math.round(width) + 'px';
      
      this.containerWidthLeft = this.containerWidth;
  
      this.marginTxt = this.margin + 'px';
  
      this.selectedEmployee = this.employees[0];
      this.changeEmployee();
  
    });
    
  }

  changeEmployee() {
    this.intervalCounter = setInterval(() => {
      this.employeeIndex++;
      if(this.employeeIndex == this.employees.length) this.employeeIndex = 0;
      this.selectedEmployee = this.employees[this.employeeIndex];
      var sel = this.employeeService.getAssignments(this.selectedEmployee.employeeID);
      if(sel.length > 0) {
        this.selectedAssignment = sel[0];
      }else {
        this.selectedAssignment = null;
      }
      
      this.resetAnimation('dot');
      this.resetAnimation('employee-big-image');

      //this.employeeService.enterWave(this.employees[this.employeeIndex]);
      //this.employeeService.exitWave(this.employees[this.employeeIndex]);
    
      }, 10000);
      
      

      this.index = this.index + 1;
  }

  resetAnimation(animation) {
    console.log("Reset animation");
    var el = document.getElementById(animation);
    el.style.animation = 'none';
    el.offsetHeight; /* trigger reflow */
    el.style.animation = null; 
  } 

  ngOnDestroy() {
    this.employeesUpdated.unsubscribe();
  }
}
