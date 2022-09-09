function solve(input) {

    let people = {};

    for (let line of input) {

        line = input.shift();
        //console.log(line)
        while (line !== 'Results') {
            let [command, ...tokens] = line.split(':');
            if (command === 'Add') {
                let name = tokens[0];
                let health = Number(tokens[1]);
                let energy = Number(tokens[2]);

                if (!people.hasOwnProperty(name)) {
                    people[name] = { health: health, energy: energy };
                } else if (people.hasOwnProperty(name)) {
                    people[name].health += health;
                }
            } else if (command === 'Attack') {
                let attackerName = tokens[0];
                let defenderName = tokens[1];
                let damage = tokens[2];

                if (people.hasOwnProperty(attackerName) && people.hasOwnProperty(defenderName)) {
                    people[defenderName].health -= +damage;
                    people[attackerName].energy -= 1;

                    let entries = Object.entries(people)
                    for (let person of entries) {
                        //console.log(person.health)
                        if (person[1].health <= 0 || person[1].energy <= 0) {
                            console.log(`${person[0]} was disqualified!`)
                            delete people[person[0]]
                        }
                    }
                }
            } else if (command === 'Delete') {
                let user = tokens[0];
                if (user === 'All') {
                    for (const key in people) {
                        delete people[key];
                    }
                } else {
                    delete people[user];
                }
            }
            line = input.shift()
        }
    }
    let entires = Object.entries(people)
    let count = entires.length;
    console.log(`People count: ${count}`)
    for (let person of entires) {
        //console.log(person[1])
        console.log(`${person[0]} - ${person[1].health} - ${person[1].energy}`)

    }
}
solve(["Add:Bonnie:3000:5",
    "Add:Kent:10000:10",
    "Add:Johny:4000:10",
    "Attack:Johny:Bonnie:400",
    "Add:Johny:3000:5",
    "Add:Peter:7000:1",
    "Delete:Kent",
    "Results"])




