export class Employee {
    
    constructor(
        public employeeID: number,
        public firstName: string,
        public lastName: string,
        public birthday: Date,
        public startDate: Date,
        public description: string,
        public wave: boolean,
        public id: string) {}
}