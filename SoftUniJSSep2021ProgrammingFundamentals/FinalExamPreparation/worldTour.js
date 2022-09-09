function worldTour(input) {
    let stops = input.shift();

    for (let line of input) {
        let [command, ...tokens] = line.split(':');
        let length = stops.length;
        if (command === 'Travel') {
            break;
        } else if (command === 'Add Stop') {
            let index = Number(tokens[0]);
            let string = tokens[1];
            if (index >= 0 && index <= length) {
                //let partOne = stops.substring(0, index);
                //let partTwo = stops.substring(index);

                //stops = partOne + string + partTwo;
                stops = [stops.slice(0, index), string, stops.slice(index)].join('');
            }

        } else if (command === 'Remove Stop') {
            let startIndex = +tokens[0];
            let endIndex = +tokens[1];
            if (startIndex >= 0 && endIndex >= 0) {
                if (startIndex <= length && endIndex <= length) {
                    let string = stops.substring(startIndex, endIndex + 1);
                    stops = stops.replace(string, '');
                }
            }
        } else if (command === 'Switch') {
            let oldString = tokens[0];
            let newString = tokens[1];

            let rgx = new RegExp(oldString, 'g');
            if (stops.includes(rgx)) {
                stops = stops.replace(rgx, newString);
            }
        }
        console.log(stops);
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
}
worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
