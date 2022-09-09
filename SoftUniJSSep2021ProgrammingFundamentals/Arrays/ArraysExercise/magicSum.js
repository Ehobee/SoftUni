function magicSum(arr, num) {

    let array = arr;
    let sumRequired = num;
    let arrayLength = array.length;
    
    for (let i = 0; i < arrayLength; i++) {
        let currentNumber = Number(array[i]);

        for (let j = i + 1; j < arrayLength; j++) {
            let nextNumber = Number(array[j]);

            if (currentNumber + nextNumber === sumRequired) {
                console.log(currentNumber, nextNumber)
            }
        }
    }
}
magicSum([14, 20, 60, 13, 7, 19, 8],
    27
)