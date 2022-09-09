function catDiet(input) {

    let percentFat = Number(input[0]);
    let percentProtein = Number(input[1]);
    let percentCarbohydrate = Number(input[2]);
    let totalCalories = Number(input[3]);
    let percentWater = Number(input[4]);


    let gramsFat = (totalCalories * percentFat / 100) / 9;
    let gramsProtein = (totalCalories * percentProtein / 100) / 4;
    let gramsCarbohydrate = (totalCalories * percentCarbohydrate / 100) / 4;

    let totalWeight = gramsFat + gramsProtein + gramsCarbohydrate;

    let caloriesPerGram = totalCalories / totalWeight;


    let caloriesPercent = (percentWater / 100) * caloriesPerGram;


    let calories = caloriesPerGram - caloriesPercent;
    console.log(calories.toFixed(4));
}
catDiet(["60", "25", "15", "2500", "60"])