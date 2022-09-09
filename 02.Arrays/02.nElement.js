function solve(arr, number) {

    let n = number;
    let length = arr.length;
    let newArr = [];

    for (let i = 0; i < length; i += n) {
        newArr.push(arr[i]);
    }
    return newArr;
}
solve(['5',
    '20',
    '31',
    '4',
    '20'],
    2
);