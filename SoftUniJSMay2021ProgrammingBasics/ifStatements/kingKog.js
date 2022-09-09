function kingKong(input) {
    let budget = Number(input[0]);
    let crowdCount = Number(input[1]);
    let oneCostumePrice = Number(input[2]);

 let decorPrice = budget * 0.10;
 let totalCostumePrice = oneCostumePrice * crowdCount;
 
 
 if (crowdCount >= 150) {
     totalCostumePrice = totalCostumePrice - totalCostumePrice * 0.10
 } else {
     totalCostumePrice = totalCostumePrice
 }

 let totalMoviePrice = totalCostumePrice + decorPrice;
 let priceDiff = Math.abs(budget - totalMoviePrice);

 if (totalMoviePrice <= budget) {
     console.log("Action!");
     console.log(`Wingard starts filming with ${priceDiff.toFixed(2)} leva left.`);
 } else if (totalMoviePrice > budget) {
     console.log ("Not enough money!")
     console.log(`Wingard needs ${priceDiff.toFixed(2)} leva more.`);
 }
}
kingKong(["9587.88",
"222",
"55.68"])



