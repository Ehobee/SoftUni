function employees(arr) {

    for (let names of arr) {
        let employee = {}
        employee.name = names;
        employee.personalNumber = names.length;
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`)
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)