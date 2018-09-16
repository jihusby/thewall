import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employeesUpdated;

  title = 'WallOfFame';

  employees: Employee[];

  selectedEmployee: Employee;

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
  margin: number = 15;
  cols: number = 8;
  rows: number;
  detailArea: number = 0.2;

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

  constructor(private employeeService: EmployeeService) {
    this.employees = this.employeeService.getEmployees();
  }
  
  ngOnInit() {
    this.employeesUpdated = this.employeeService.employeeListUpdated.subscribe((employees: Employee[]) => {
      this.employees = this.employeeService.getEmployees();
      console.log('updated');
    });

    

    this.containerWidthRight = Math.round((this.width) * (this.detailArea)) + 'px';
    this.width = this.width * (1-this.detailArea);
    console.log('right:' + this.containerWidthRight);
    
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
    console.log('left:' + this.containerWidthLeft);

    this.marginTxt = this.margin + 'px';

    this.selectedEmployee = this.employees[0];
    this.startTimer();
  }

  startTimer() {
    this.intervalCounter = setInterval(() => {
      setTimeout(() => {

        this.employeeIndex = Math.floor(Math.random() * 27) + 0;

        this.employeeService.enterWave(this.employees[this.employeeIndex]);
        this.selectedEmployee = this.employees[this.employeeIndex];
        this.employeeIndex++;
        //if(this.employeeIndex == this.noOfEmployees) {
        //  this.employeeIndex = 0;
        //}
      }, 8000)
      
      this.employeeService.exitWave(this.employees[this.employeeIndex]);

    }, 2000);
  }

  ngOnDestroy() {
    this.employeesUpdated.unsubscribe();
  }
}
