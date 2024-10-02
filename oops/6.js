// Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.

class Employee {

    name = null;
    salary = null;

    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    calculateAnnualSalary() {
        return (this.salary * 12);
    }

}

class Manager extends Employee {

    department = null;
    bonus = 0.1;

    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    calculateAnnualSalary() {
        let baseAnnualSalary = super.calculateAnnualSalary();
        let bonusAmount = baseAnnualSalary * this.bonus;
        let annualSalary = baseAnnualSalary + bonusAmount;
        return (annualSalary);
    }

}

let employee1 = new Employee("John Doe", 50000);

let manager1 = new Manager("Jane Smith", 80000, "Sales");

let annualSalary = employee1.calculateAnnualSalary();
console.log(annualSalary);

annualSalary = manager1.calculateAnnualSalary();
console.log(annualSalary);