function rotatedArray(arr) {

    let array = arr;
    let rotations = Number(array.pop());
    let newArray = array;

    for (let i = 0; i < rotations; i++) {
        let elementToPop = newArray.pop()
        newArray.unshift(elementToPop);
    }
    console.log(newArray.join(' '));
}
rotatedArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])