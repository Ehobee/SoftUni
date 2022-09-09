function solve(arr) {

    let newArr = [];
    let firstEl = 0;
    let length = arr.length;

    for (let i = 0; i < length; i++) {
        let command = arr[i];
        firstEl++;
        if (command === 'add') {
            newArr.push(firstEl)
        } else {
            newArr.pop();
        }
    }
    let newLength = newArr.length;
    if (newLength > 0) {
        console.log(newArr.join('\n'));
    } else {
        console.log('Empty');
    }
}
solve(['add',
    'add',
    'add',
    'add']

);