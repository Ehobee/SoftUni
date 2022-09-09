function solve(input) {

    let string = input.shift();
    const pattern = /([#|\|])(?<item>[A-Za-z ]+)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>\d{1,5})\1/g;

    let matches;
    let totalCalories = 0;
    let food = [];

    while ((matches = pattern.exec(string)) !== null) {
        // console.log(matches.groups)
        food.push(matches.groups)
    }
    //console.log(food);

    for (let currentProduct of food) {
        totalCalories += Number(currentProduct.calories);
    }

    let days = totalCalories / 2000

    console.log(`You have food to last you for: ${Math.floor(days)} days!`)
    for (let currentProduct of food) {
        console.log(`Item: ${currentProduct.item}, Best before: ${currentProduct.date}, Nutrition: ${currentProduct.calories}`)
    }
}
solve([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]
)