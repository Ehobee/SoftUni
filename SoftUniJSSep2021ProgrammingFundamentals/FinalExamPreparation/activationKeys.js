function solve(arr) {

    let rawKey = arr.shift();

    for (let line of arr) {

        line = line.split('>>>');

        let command = line[0];

        if (command === 'Generate') {
            break;
        } else if (command === 'Contains') {
            let substring = line[1];

            let startIndex = rawKey.indexOf(substring);
            if (startIndex >= 0) {
                console.log(`${rawKey} contains ${substring}`);
            } else {
                console.log('Substring not found!');
            }
        } else if (command === 'Flip') {
            let direction = line[1];
            let startIndex = line[2];
            let endIndex = line[3];

            let substring = rawKey.substring(startIndex, endIndex);

            if (direction === 'Upper') {
                let toUpper = substring.toUpperCase();
                rawKey = rawKey.replace(substring, toUpper);
            } else {
                let toLower = substring.toLowerCase();
                rawKey = rawKey.replace(substring, toLower);
            }
            console.log(rawKey);
        } else if (command === 'Slice') {
            let startIndex = line[1];
            let endIndex = line[2];

            let substring = rawKey.substring(startIndex, endIndex);
            rawKey = rawKey.replace(substring, '');
            console.log(rawKey);
        }
    }
    console.log(`Your activation key is: ${rawKey}`);
}
solve(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])

