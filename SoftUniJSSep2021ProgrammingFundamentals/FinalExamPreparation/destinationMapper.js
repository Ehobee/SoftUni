function mapper(input) {

    let regex = /(\/|=)[A-Z][A-Za-z]{2,}\1/g;
    let travelPoints = 0;
    let workArr = [];

    let matches = input.match(regex);
    if (matches !== null) {
        for (let town of matches) {
            //console.log(town);
            let cut = town.slice(1, -1);
            workArr.push(cut);

            let length = cut.length;

            travelPoints += length
        }
        console.log(`Destinations: ${workArr.join(', ')}`);
        console.log(`Travel Points: ${travelPoints}`);
    } else {
        console.log(`Destinations:`);
        console.log(`Travel Points: 0`);
    }
}
mapper("=Invalid/invalid==i5valid=/I5valid/=i=")