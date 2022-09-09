function plantDiscovery(input) {

    const n = input.shift();
    let plants = {};

    for (let i = 0; i < n; i++) {
        let line = input.shift();
        let [plant, rarity] = line.split('<->');

        if (!plants.hasOwnProperty(plant)) {// if there is not such plant in the list, add it
            plants[plant] = { rarity, rating: 0, count: 0, avg: 0 };
        } else {// if there is, update the rarity
            plants[plant].rarity += +rarity;
        }
    }
    //console.log(plants)
    let line = input.shift();

    while (line !== 'Exhibition') {
        let [command, ...tokens] = line.split(': ');

        tokens = tokens[0].split(' - ');
        if (command === 'Rate') {

            let plant = tokens[0];
            let rating = +tokens[1];
            plants[plant].rating += rating;
            plants[plant].count += 1;
            plants[plant].avg = plants[plant].rating / plants[plant].count;


        } else if (command === 'Update') {

            let plant = tokens[0];
            let rarity = tokens[1];
            plants[plant].rarity = rarity;

        } else if (command === 'Reset') {

            let plant = tokens[0];
            delete plants[plant].avg;

        }
        line = input.shift();
    }
    //console.log(plants)
    let arr = Object.entries(plants);
    //console.log(arr)
    let sorted = arr.sort((a, b) => {
        if (a[1].rarity !== b[1].rarity) {
            return b[1].rarity - a[1].rarity;
        }
        else {
            return b[1].avg - a[1].avg;
        }
    });
    console.log('Plants for the exhibition:');
    for (const kvp of sorted) {
        if (kvp[1].avg === undefined) {
            kvp[1].avg = 0;
        }
        console.log(`- ${kvp[0]}; Rarity: ${kvp[1].rarity}; Rating: ${kvp[1].avg.toFixed(2)}`)
    }
}
plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
