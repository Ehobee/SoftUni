function equalSums(arr) {

    let array = arr;
    let arrayLength = array.length;
    let sumTotal = 0;
    let sumSides = 0;

    for (let i = 0; i < arrayLength; i++) {
        let currentNumber = Number(array[i]);
        sumTotal += currentNumber;

    }
    for (let i = 0; i < arrayLength; i++) {
        let currentNumber = Number(array[i]);
        if (sumSides * 2 === sumTotal - currentNumber) {
            console.log(i)
            return;
        } else {
            sumSides += currentNumber
        }
    }
    console.log('no');
}
equalSums([1, 2, 3, 3])

function equalSums(arr) {

    let arrL = arr.length;
    let leftSum = 0;
    let rightSum = 0;
    let isThere = false;

    for (let i = 0; i < arrL; i++) {
        let currentNum = arr[i];
        leftSum = 0;
        rightSum = 0;
        for (let l = 0; l < i; l++) {
            leftSum += arr[l];
        }
        for (let r = i + 1; r < arrL; r++) {
            rightSum += arr[r]
        }
        if (leftSum === rightSum) {
            console.log(i);
            isThere = true;
        }
    }
    if (isThere === false) {
        console.log('no')
    }

}