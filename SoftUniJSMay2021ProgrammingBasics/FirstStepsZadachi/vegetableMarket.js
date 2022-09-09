function vegetableMarket(input) {

    prcieForKiloVegetables = Number(input[0]);
    priceForKiloFruits = Number(input[1]);
    totalKiloVegetables = Number(input[2]);
    totalKiloFruits = Number(input[3]);


    let vegetablesPrice = prcieForKiloVegetables * totalKiloVegetables;
    let fruitsPrice = priceForKiloFruits * totalKiloFruits;
/*console.log(vegetablesPrice);
console.log(fruitsPrice); */

    let TotalInBgn = vegetablesPrice + fruitsPrice;
    let priceInEur = TotalInBgn / 1.94



    console.log(priceInEur.toFixed(2));

}
vegetableMarket(["1.5", "2.5", "10", "10"])