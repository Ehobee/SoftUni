function addressBook(arr) {

    let addressBook = {};

    for (let line of arr) {
        let [name, address] = line.split(':');
        addressBook[name] = address;
    }

    let entries = Object.entries(addressBook);
    let sorted = entries.sort((a, b) => a[0].localeCompare(b[0]));

    for (element of sorted) {
        console.log(`${element[0]} -> ${element[1]}`)
    }
}
addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
)