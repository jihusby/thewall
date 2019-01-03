import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() employee: Employee;
  @Input() width: string;
  @Input() height: string; 
  @Input() wave: boolean;

  imageSrc = 'url:("../assets/images/';
  birthday: boolean = false;
  intervalCounter;

  constructor() { 
  }

  ngOnInit() {
    this.checkBirthday();
  }

  checkBirthday() {
    this.intervalCounter = setInterval(() => {
      var birthday = new Date(this.employee.birthday);
      var today = new Date();
      if(birthday.getMonth() == today.getMonth() && birthday.getDate() == today.getDate()) {
        this.birthday = true;
      }
  
    }, 10000);
    this.birthday = false;

  }

  getImagePath() {
    //console.log(this.imageSrc + this.employee.image1 + '")');
    console.log('image: ' + this.imageSrc + this.employee.firstName + ".jpg");
    return this.imageSrc + this.employee.firstName + ".jpg";
  }

}
