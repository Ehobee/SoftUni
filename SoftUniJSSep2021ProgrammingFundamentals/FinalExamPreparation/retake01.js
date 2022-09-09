function solve(input) {

    let string = input.shift();
    //console.log(string)

    const arr = input;
    for (line of arr) {
        let [command, ...tokens] = line.split(' ');
        //console.log(command)

        if (command === 'Easter') {
            break;
        } else if (command === 'Replace') {
            const currentChar = tokens[0];
            const newChar = tokens[1];
            //console.log(currentChar)

            while (string.includes(currentChar)) {
                string = string.replace(currentChar, newChar);
            }
            console.log(string);
        } else if (command === 'Remove') {
            const substring = tokens[0];

            if (string.includes(substring)) {
                string = string.replace(substring, '');
            }
            console.log(string);
        } else if (command === 'Includes') {
            const stingToIncludes = tokens[0];
            if (string.includes(stingToIncludes)) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (command === 'Change') {
            const toLowerOrUpper = tokens[0];

            if (toLowerOrUpper === 'Lower') {
                string = string.toLowerCase()
            } else {
                string = string.toUpperCase();
            }
            console.log(string);
        } else if (command === 'Reverse') {
            const startIndex = Number(tokens[0]);
            const endIndex = Number(tokens[1]);

            if (startIndex >= 0 && startIndex < string.length && endIndex >= 0 && endIndex < string.length) {
                let substring = string.substring(startIndex, endIndex + 1);
                substring = substring.split('').reverse().join('');
                console.log(substring)
            }
        }
    }
}
solve(['Easterbscomming',
    'Replace b I',
    'Remove commIng',
    'Change Upper',
    'Reverse 0 5',
    'Includes egg',
    'Easter'])

