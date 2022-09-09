function solve(input) {

    let spell = input.shift();
    //console.log(spell)
    let length = spell.length;

    for (let line of input) {

        let [command, ...tokens] = line.split(' ');

        if (command === 'Abracadabra') {
            break;
        }
        else if (command === 'Abjuration') {

            spell = spell.toUpperCase();
            console.log(spell)
        } else if (command === 'Necromancy') {

            spell = spell.toLowerCase();
            console.log(spell)
        } else if (command === 'Illusion') {

            let index = +tokens[0];
            let letter = spell.charAt(index);
            let replacement = tokens[1];

            if (index >= 0 && index < length) {

                spell = spell.replace(letter, replacement);
                console.log('Done!')
            } else {
                console.log('The spell was too weak.')
            }
        } else if (command === 'Divination') {

            let substring = tokens[0];
            let substitute = tokens[1];

            while (spell.includes(substring)) {
                spell = spell.replace(substring, substitute);
            }
            console.log(spell)
        } else if (command === 'Alteration') {

            let substring = tokens[0];
            if (spell.includes(substring)) {
                spell = spell.replace(substring, '');
                console.log(spell)
            }
        } else {
            console.log('The spell did not work!')
        }

    }
}
solve(["A7ci0",
    "Illusion 1 c",
    "Illusion 4 o",
    "Abjuration",
    "Abracadabra"])


