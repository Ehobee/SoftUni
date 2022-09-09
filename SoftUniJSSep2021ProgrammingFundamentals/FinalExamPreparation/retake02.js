function solve(input) {

    const inputsNumber = input.shift();
    const inputs = input;
    let regex = /(?<name>[A-Z][a-z]{2,})\s(?<position>[A-Z][a-z]{2,})\#+(?<company>\b[A-Z[a-z]+)(\d{2})[A-Z[a-z]+/gm
    let employees = [];
    for (let line of inputs) {
        //console.log(line)
        let matches = line.match(regex);
        while ((matches = regex.exec(line)) !== null) {
            // console.log(matches.groups)
            employees.push(matches.groups)
        }
    }

    for (let emp of employees) {
        console.log(`${emp.name} is ${emp.position} at ${emp.company}`)
    }
}
solve(["4",
    "Tanya Petrova##Dental&Assistants25Health Ltd.",
    "Kalina Mihova#Occupational&Therapy&Aides00Health Ltd.",
    "George Fill####Orderlies99Health JSC",
    "Lily petrova#Speech&Pathology&Assistants60Health Ltd."])
