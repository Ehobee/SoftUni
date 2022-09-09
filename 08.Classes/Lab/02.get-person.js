class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    };
};

function getPerson() {
    let personalInfo = ['Anna Simpson 22 anna@yahoo.com', 'Softuni', 'Stephen Johnson 25', 'Gabriel Peterson 24 g.p@gmail.com'];
    let people = [];

    personalInfo.forEach(el => {
        let [firstName, lastName, age, email] = el.split(' ');
let person = new Person(firstName, lastName)
    });
}
getPerson()