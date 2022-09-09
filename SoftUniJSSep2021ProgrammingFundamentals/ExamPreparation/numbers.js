function numbers(arr) {

    let arrOfNums = arr.split(' ').map(Number);
    let arrLength = arrOfNums.length;
    let sum = 0

    for (let i = 0; i < arrLength; i++) {
        let currentElement = arrOfNums[i];
        sum += currentElement;
    }
    let averagae = sum / arrLength;
    let newArr = arrOfNums.filter(x => x > averagae);
    newArr = newArr.sort((a, b) => b - a);
    newArr = newArr.slice(0, 5);

    if (newArr.length === 0) {
        console.log('No');
    } else {
        console.log(newArr.join(' '));
    }
}
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')