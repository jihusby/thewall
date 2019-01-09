import { Employee} from '../model/employee.model';
import { Assignment} from '../model/assignment.model';
import { Inject, Injectable, Component, EventEmitter, Output, OnInit } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { getDefaultService } from 'selenium-webdriver/edge';
import { assertPreviousIsParent } from '@angular/core/src/render3/instructions';
import { HttpClient } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import { API } from '../io/api.model';

import 'rxjs/Rx';
import { Subject } from "../../../node_modules/rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employees: Employee[];
  private assignments: Assignment[];
  employeeListUpdated = new Subject();
  assignmentListUpdated = new Subject();
  
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private client: HttpClient, private api: API) {
    this.api = api;
    this.employees = [];
    this.assignments = [];
    this.populateEmployeeListFromAPI(this.api);
    this.populateAssignmentListFromAPI(this.api);
  }

  public enterWave(employee: Employee) {
    this.employees[this.employees.indexOf(employee, 0)].wave = true;
    this.employeeListUpdated.next(this.employees);
  }

  public exitWave(employee: Employee) {
      this.employees[this.employees.indexOf(employee, 0)].wave = false;
      this.employeeListUpdated.next(this.employees);
  }
  
  public updateAssignments() {
    this.populateAssignmentListFromAPI(this.api);
  }

  public getEmployees() {
    return this.employees;
  }

  public getAllAssignments() {
    return this.assignments;
  }

  public getAssignments(id: number) {
    return this.assignments.filter(
      assignment => assignment.employeeID === id)
    .sort(function(a,b){
      return a.assignmentID - b.assignmentID;
    });   
  }

  private async populateEmployeeListFromAPI(api: API) {
    this.client.get(api.url('Employees')).subscribe(data => {
        (<Employee[]>data).forEach((employee, index) => {
            this.employees.push(employee);
        });
        this.buildLocalEmployeeList();
    },
    error => {
        //console.log('Error getting Employees: ' + JSON.stringify(error));
    });
  }

  private async populateAssignmentListFromAPI(api: API) {
    this.client.get(api.url('Assignments')).subscribe(data => {
        (<Assignment[]>data).forEach((assignment, index) => {
            this.assignments.push(assignment);
        });
        this.buildLocalAssignmentList();
    },
    error => {
        //console.log('Error getting Assignments: ' + JSON.stringify(error));
    });
  }

    private buildLocalEmployeeList() {
      this.employeeListUpdated.next(this.employees);
    }
    private buildLocalAssignmentList() {
      //console.log('commentListUpdated 1: ' + JSON.stringify(this.comments));
      this.assignmentListUpdated.next(this.assignments);
    }

}
