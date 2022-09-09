function solve(input) {

    let stopsList = input.shift();

    let commandParser = {

        'Add Stop': (stopsList, index, currentStop) => {

        },

        'Remove Stop': () => {

        },

        'Switch': () => {

        }
    }
    input.forEach(line => {
        if (line !== 'Travel') {
            let [command, ...tokens] = line.split(':');

            stopsList = commandParser[command](stopsList, ...tokens);

            console.log(stopsList);
        }
    })
    console.log(`Ready for world tour! Planned stops: ${stopsList}`)
}
solve(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
