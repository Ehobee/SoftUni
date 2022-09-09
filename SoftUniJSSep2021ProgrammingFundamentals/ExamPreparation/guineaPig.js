function guineaPig(arr) {

    arr.map(x => Number(x));
    let foodForAMonth = arr.shift();
    let hayForAMonth = arr.shift();
    let coverForAMonth = arr.shift();
    let pigWeigth = arr.shift();

    let foodGrams = foodForAMonth * 1000;
    let hayGrams = hayForAMonth * 1000;
    let coverGrams = coverForAMonth * 1000;
    let pigGrams = pigWeigth * 1000;

    let isMissing = false;
    for (let i = 1; i <= 30; i++) {
        let currentDay = i
        foodGrams -= 300;

        if (currentDay % 2 === 0) {
            hayGrams -= foodGrams * 0.05;
        } else if (currentDay % 3 === 0) {
            coverGrams -= (pigGrams - (pigGrams / 3));
        }
    }
    let excessFood = foodGrams / 1000;
    let excessHay = hayGrams / 1000;
    let excessCover = coverGrams / 1000;

    if (excessFood <= 0 || excessHay <= 0 || excessCover <= 0) {
        isMissing = true;
    }

    if (!isMissing) {
        console.log(`Everything is fine! Puppy is happy! Food: ${excessFood.toFixed(2)}, Hay: ${excessHay.toFixed(2)}, Cover: ${excessCover.toFixed(2)}.`)
    } else {
        console.log('Merry must go to the pet store!');
    }
}
guineaPig(["10", 
"5", 
"5.2", 
"1"])


