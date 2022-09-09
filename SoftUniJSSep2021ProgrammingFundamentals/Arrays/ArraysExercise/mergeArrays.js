function mergeArrays(arr, arrTwo) {

    let array = arr;
    let secondArray = arrTwo;
    let arrLength = array.length;
    let thirdArray = [];


    for (let i = 0; i < arrLength; i++) {
        let result;
        if (i % 2 === 0) {
            result = Number(array[i]) + Number(secondArray[i]);
        } else {
            result = array[i] + secondArray[i];
        }
        thirdArray.push(result);
    }
    console.log(thirdArray.join(' - '));
}
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'
])