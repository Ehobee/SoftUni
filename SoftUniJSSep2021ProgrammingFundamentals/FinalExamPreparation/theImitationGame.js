function game(input) {

    let encrypted = input.shift();

    for (let line of input) {
        line = line.split('|');

        let command = line[0];

        if (command === 'Move') {
            let count = line[1];
            encrypted = encrypted.substr(count) + encrypted.substr(0, count)
        } else if (command === 'Insert') {
            let index = line[1];
            let value = line[2];

            let partOne = encrypted.substring(0, index);
            let partTwo = encrypted.substring(index);

            encrypted = partOne + value + partTwo;
        } else if (command === 'ChangeAll') {
            let substring = line[1];
            let substitute = line[2];

            encrypted = encrypted.split(substring);
            encrypted = encrypted.join(substitute);
        }
    }
    console.log(`The decrypted message is: ${encrypted}`)
}
game([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
  ]
  )