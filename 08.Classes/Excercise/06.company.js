class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        salary = Number(salary);
        if (!name || !salary || !position || !department || salary < 0) {
            throw new Error('Invalid input!');
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
        }

        this.departments[department].push({ name, position, salary })

        return `New employee is hired. Name: ${name}. Position: ${position}`
    }

    bestDepartment() {

        let currentBest = {
            name: "",
            salary: 0
        };

        for (let departmentKey in this.departments) {
            let averageSalary = 0;

            for (let employeeKey in this.departments[departmentKey]) {
                averageSalary += this.departments[departmentKey][employeeKey].salary;
            }

            averageSalary = averageSalary / this.departments[departmentKey].length;
            if (currentBest.salary < averageSalary) {
                currentBest.name = departmentKey;
                currentBest.salary = averageSalary;
            }
        }
        this.departments[currentBest.name].sort((a, b) => {
            return b.salary - a.salary || a.name.localeCompare(b.name)
            // if (a.salary - b.salary < 0) {
            //     return b;
            // } else if (a.salary - b.salary > 0) {
            //    return a;
            //} else {
            // //    return a.name.localeCompare(b.name)
            //}
        });

        let bestDepString = '';
        bestDepString += `Best Department is: ${currentBest.name}\n`;
        bestDepString += `Average salary: ${currentBest.salary.toFixed(2)}\n`;
        this.departments[currentBest.name].forEach((el) => {
            if (this.departments[currentBest.name].indexOf(el) == this.departments[currentBest.name].length - 1) {
                bestDepString += `${el.name} ${el.salary} ${el.position}`
            } else {
                bestDepString += `${el.name} ${el.salary} ${el.position}\n`
            }

        })

        return bestDepString;
    }
}
1822560

5245385786

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
