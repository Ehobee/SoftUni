function maxNumber(arr) {

    let array = arr.reverse();
    let arrayLength = array.length;
    currentMaxNumber = Number.MIN_SAFE_INTEGER;
    let topIntArr = [];
    for (let index = 0; index < arrayLength; index++) {

        let number = Number(array[index]);
        if (number > currentMaxNumber) {
            currentMaxNumber = number;
            topIntArr.push(currentMaxNumber);
        }
    }
    topIntArr.reverse();
    console.log(topIntArr.join(' '));
}
maxNumber([41, 41, 34, 20])



function findMaxNumbers(arr) {
    let array = arr;
    let arrayLength = array.length;
    let topIntegers = [];

    for (let i = 0; i < arrayLength; i++) {
        let currentNumber = Number(array[i]);
        let isTop = true;

        for (let j = i + 1; j < arrayLength; j++) {
            let nextNumber = Number(array[j]);

            if (currentNumber <= nextNumber) {
                isTop = false;
                break;
            }
        }
        if (isTop) {
            topIntegers.push(currentNumber);
        }
    }
    console.log(topIntegers.join(' '));
}
findMaxNumbers([41, 41, 34, 20])