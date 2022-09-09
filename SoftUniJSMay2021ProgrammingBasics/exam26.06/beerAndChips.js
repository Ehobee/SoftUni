function beerAndChips(input) {

    let footballFan = input[0];
    let budget = Number(input[1]);
    let beers = Number(input[2]);

    let chipsBags = Number(input[3]);

    let beersPrice = beers * 1.20;
    let singleChipsPrice = beersPrice * 0.45
    let totalChipsPrice = Math.ceil(chipsBags * singleChipsPrice)

    let totalPrice = beersPrice + totalChipsPrice
    let diff = Math.abs(totalPrice - budget)
    if (budget >= totalPrice) {

        console.log(`${footballFan} bought a snack and has ${diff.toFixed(2)} leva left.`)
    } else {
        console.log(`${footballFan} needs ${diff.toFixed(2)} more leva!`);
    }




}
beerAndChips(["George",
    "10",
    "2",
    "3"])
