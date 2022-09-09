function nonDecreasingSeq(arr) {

    let array = arr;
    let arrayLength = array.length;
    let currentMaxNumber = Number.MIN_SAFE_INTEGER;
    let newArray = [];

    for (let i = 0; i < arrayLength; i++) {
        let currentNumber = Number(array[i]);
        if (currentNumber >= currentMaxNumber) {
            currentMaxNumber = currentNumber;
            newArray = array.filter(currentNumber > currentMaxNumber);
        }
    }
console.log(newArray)
}
nonDecreasingSeq([20, 3, 2, 15, 6, 1])