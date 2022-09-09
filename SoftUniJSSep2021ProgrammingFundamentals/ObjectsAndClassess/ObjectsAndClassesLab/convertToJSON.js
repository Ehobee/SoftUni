function JSONConverter(name, surname, hairColor) {

    let person = {}
    person.name = name;
    person.lastName = surname;
    person.hairColor = hairColor;

    let personJSON = JSON.stringify(person);
    console.log(personJSON)

}
JSONConverter('George', 'Jones', 'Brown')