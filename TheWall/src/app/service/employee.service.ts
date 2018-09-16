import { Employee } from "../model/employee.model";
import { Injectable } from "../../../node_modules/@angular/core";
import { Subject } from "../../../node_modules/rxjs";

@Injectable()
export class EmployeeService {
    private employees: Employee[];
    employeeListUpdated = new Subject();

    constructor() {
        this.employees = this.generateEmployees();
    }

    public getEmployees() {
        return this.employees;
    }

    public setEmployees(employees: Employee[]) {
        this.employees = employees;
    }

    public enterWave(employee: Employee) {
        this.employees[this.employees.indexOf(employee, 0)].wave = true;
        this.employeeListUpdated.next(this.employees);
    }

    public exitWave(employee: Employee) {
        this.employees[this.employees.indexOf(employee, 0)].wave = false;
        this.employeeListUpdated.next(this.employees);
    }

    private generateEmployees() {
        var employees: Employee[] = [
                new Employee("Albrigt","Lyngsnes",
                    "Albrigt_472x472.jpg","Albrigt_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new Employee("Arve","Moen",
                    "arve_472x472.jpg","arve_472x472.jpg","",
                    new Date('1972-08-24T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new Employee("Frank","Jørgensen",
                    "frank_472x472.jpg","frank_472x472.jpg","",
                    new Date('1972-08-24T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new Employee("Johan Arnt","Markussen",
                    "johanarnt_472x472.jpg","johanarnt_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new Employee("Jan Inge","Husby",
                    "janinge_472x472.jpg","JanInge_2.jpg","",
                    new Date('1972-08-26T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, "Glad i musikk og spiller gitar i band. Fotointeressert med øye for detaljer. Trener regelmessig. Liker å lære nye og spennende ting og er glad i TEDTalks."),
                new Employee("Lone","Madsen",
                    "lone_472x472.jpg","lone_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new Employee("Robert","Heggdal",
                    "robert_472x472.jpg","robert_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new Employee("Tore","Olsen",
                    "Tore_472x472.jpg","Tore_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new Employee("Bjørn","Karlsen",
                    "Bjørn_472x472.jpg","Bjørn_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new Employee("Torkild","Resheim",
                    "Torkild_472x472.jpg","Torkild_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new Employee("Morten","Moen",
                    "Morten_472x472.jpg","Morten_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new Employee("Bengt","Bendixsen",
                    "Bengt_472x472.jpg","Bengt_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new Employee("Anita","Skylstad",
                    "Anita_472x472.jpg","Anita_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new Employee("Eirik","Wahl",
                    "Eirik_472x472.jpg","Eirik_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new Employee("Torstein","Bjørgan",
                    "Torstein_472x472.jpg","Torstein_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new Employee("Arnstein","Johansen",
                    "Arnstein_472x472.jpg","Arnstein_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new Employee("Eivind","Wahl",
                    "Eivind_472x472.jpg","Eivind_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new Employee("Sonja","Askim",
                    "Sonja_472x472.jpg","Sonja_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new Employee("Lars","Eidnes",
                    "Lars_472x472.jpg","Lars_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new Employee("Gøran","Henriksen",
                    "Gøran_472x472.jpg","Gøran_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new Employee("Trond Inge","Halten",
                    "TrondInge_472x472.jpg","TrondInge_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new Employee("Vegard","",
                    "Vegard_472x472.jpg","Vegard_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new Employee("Øystein","Steimler",
                    "Øystein_472x472.jpg","Øystein_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new Employee("Trond","Bordewich",
                    "Trond_472x472.jpg","Trond_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new Employee("John","Fossum",
                    "John_472x472.jpg","John_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new Employee("Torleif","Sandnes",
                    "Torleif_472x472.jpg","Torleif_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new Employee("Erik","",
                    "Erik_472x472.jpg","Erik_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new Employee("Andreas","Langberg",
                    "Andreas_472x472.jpg","Andreas_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
            ];

        return employees;
    }
}