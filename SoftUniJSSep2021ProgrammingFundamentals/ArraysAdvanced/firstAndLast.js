function firstAndLast(arr) {

    let k = arr.shift();
    let arrayL = arr.length;
    let newArr = [];

    for (let i = 0; i < arrayL; i++) {
        newArr = arr.slice(0, k)
    }

    console.log(newArr.join(' '));
    console.log(arr.slice(arrayL - k).join(' '))
}
firstAndLast([2,
    7, 8, 9])