import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { OldEmployeeService } from './service/old-employee.service';
import { EmployeeService } from './service/employee.service';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeesComponent } from './employees/employees.component';

import { StorageServiceModule} from 'angular-webstorage-service';

import { HttpClientModule } from '@angular/common/http';
import { API } from './io/api.model';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeDetailComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    StorageServiceModule,
    HttpClientModule,    
    BrowserModule
  ],
  providers: [EmployeeService, OldEmployeeService, API],
  bootstrap: [AppComponent]
})
export class AppModule { }
