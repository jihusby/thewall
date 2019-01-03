import { OldEmployee } from "../model/old-employee.model";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class OldEmployeeService {
    private employees: OldEmployee[];
    employeeListUpdated = new Subject();

    constructor() {
        this.employees = this.generateEmployees();
    }

    public getEmployees() {
        return this.employees;
    }

    public setEmployees(employees: OldEmployee[]) {
        this.employees = employees;
    }

    public enterWave(employee: OldEmployee) {
        this.employees[this.employees.indexOf(employee, 0)].wave = true;
        this.employeeListUpdated.next(this.employees);
    }

    public exitWave(employee: OldEmployee) {
        this.employees[this.employees.indexOf(employee, 0)].wave = false;
        this.employeeListUpdated.next(this.employees);
    }

    private generateEmployees() {
        var OldEmployees: OldEmployee[] = [
                new OldEmployee("Albrigt","Lyngsnes",
                    "Albrigt_472x472.jpg","Albrigt_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new OldEmployee("Arve","Moen",
                    "arve_472x472.jpg","arve_472x472.jpg","",
                    new Date('1972-08-24T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new OldEmployee("Frank","Jørgensen",
                    "frank_472x472.jpg","frank_472x472.jpg","",
                    new Date('1972-08-24T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new OldEmployee("Johan Arnt","Markussen",
                    "johanarnt_472x472.jpg","johanarnt_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new OldEmployee("Jan Inge","Husby",
                    "janinge_472x472.jpg","JanInge_2.jpg","",
                    new Date('1972-08-26T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, "Glad i musikk og spiller gitar i band. Fotointeressert med øye for detaljer. Trener regelmessig. Liker å lære nye og spennende ting og er glad i TEDTalks."),
                new OldEmployee("Lone","Madsen",
                    "lone_472x472.jpg","lone_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new OldEmployee("Robert","Heggdal",
                    "robert_472x472.jpg","robert_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new OldEmployee("Tore","Olsen",
                    "Tore_472x472.jpg","Tore_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new OldEmployee("Bjørn","Karlsen",
                    "Bjørn_472x472.jpg","Bjørn_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new OldEmployee("Torkild","Resheim",
                    "Torkild_472x472.jpg","Torkild_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new OldEmployee("Morten","Moen",
                    "Morten_472x472.jpg","Morten_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new OldEmployee("Bengt","Bendixsen",
                    "Bengt_472x472.jpg","Bengt_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new OldEmployee("Anita","Skylstad",
                    "Anita_472x472.jpg","Anita_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new OldEmployee("Eirik","Wahl",
                    "Eirik_472x472.jpg","Eirik_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new OldEmployee("Torstein","Bjørgan",
                    "Torstein_472x472.jpg","Torstein_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new OldEmployee("Arnstein","Johansen",
                    "Arnstein_472x472.jpg","Arnstein_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new OldEmployee("Eivind","Wahl",
                    "Eivind_472x472.jpg","Eivind_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new OldEmployee("Sonja","Askim",
                    "Sonja_472x472.jpg","Sonja_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new OldEmployee("Lars","Eidnes",
                    "Lars_472x472.jpg","Lars_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new OldEmployee("Gøran","Henriksen",
                    "Gøran_472x472.jpg","Gøran_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new OldEmployee("Trond Inge","Halten",
                    "TrondInge_472x472.jpg","TrondInge_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new OldEmployee("Vegard","",
                    "Vegard_472x472.jpg","Vegard_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new OldEmployee("Øystein","Steimler",
                    "Øystein_472x472.jpg","Øystein_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new OldEmployee("Trond","Bordewich",
                    "Trond_472x472.jpg","Trond_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new OldEmployee("John","Fossum",
                    "John_472x472.jpg","John_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new OldEmployee("Torleif","Sandnes",
                    "Torleif_472x472.jpg","Torleif_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new OldEmployee("Erik","",
                    "Erik_472x472.jpg","Erik_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
                new OldEmployee("Andreas","Langberg",
                    "Andreas_472x472.jpg","Andreas_472x472.jpg","",
                    new Date('1972-07-27T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'),new Date('2007-01-02T00:00:00'), 
                    false, ""),
            ];

        return OldEmployees;
    }
}