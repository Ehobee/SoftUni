function pianist(input) {

    let piecesNumber = input.shift();
    let pieces = {};

    for (let i = 0; i < piecesNumber; i++) {
        let line = input.shift();
        let [name, composer, key] = line.split('|');

        pieces[name] = { composer, key }
    }

    let line = input.shift();
    while (line !== 'Stop') {
        let [command, ...tokens] = line.split('|')

        if (command === 'Add') {
            let name = tokens[0];
            let composer = tokens[1];
            let key = tokens[2];
            if (!pieces.hasOwnProperty(name)) {
                pieces[name] = { composer, key };
                console.log(`${name} by ${composer} in ${key} added to the collection!`)
            } else {
                console.log(`${name} is already in the collection!`)
            }
        } else if (command === 'Remove') {
            let name = tokens[0];
            if (pieces.hasOwnProperty(name)) {
                delete pieces[name];
                console.log(`Successfully removed ${name}!`)
            } else {
                console.log(`Invalid operation! ${name} does not exist in the collection.`)
            }
        } else if (command === 'ChangeKey') {
            let name = tokens[0];
            let key = tokens[1];
            if (pieces.hasOwnProperty(name)) {
                pieces[name].key = key;
                console.log(`Changed the key of ${name} to ${key}!`)
            } else {
                console.log(`Invalid operation! ${name} does not exist in the collection.`)
            }
        }
        line = input.shift();
    }
    let arr = Object.entries(pieces)
    let sorted = arr.sort((a, b) => a[0].localeCompare(b[0]))

    for (const kvp of sorted) {
        console.log(`${kvp[0]} -> Composer: ${kvp[1].composer}, Key: ${kvp[1].key}`)
    }
}
pianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]
  
)