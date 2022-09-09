function fruitMarket(input) {

    let strawberriesPrice = Number(input[0]);
    let bananas = Number(input[1]);
    let oranges = Number(input[2]);
    let rasperries = Number(input[3]);
    let strawberries = Number(input[4]);

    let raspberriesPrice = strawberriesPrice / 2;
    let orangesPrice = raspberriesPrice - (raspberriesPrice * 40 / 100);
    let bananasPrice = raspberriesPrice - (raspberriesPrice * 80 / 100);

    let strawberriesTotalPrice = strawberries * strawberriesPrice
    let raspberriesTotalPrice = rasperries * raspberriesPrice
    let orangesTotalPrice = oranges * orangesPrice
    let bananasTotalPrice = bananas * bananasPrice
   

    let totalPrice = strawberriesTotalPrice + raspberriesTotalPrice + orangesTotalPrice + bananasTotalPrice

    console.log(totalPrice);
}
fruitMarket(["63.5",
"3.57",
"6.35",
"8.15",
"2.5"])

