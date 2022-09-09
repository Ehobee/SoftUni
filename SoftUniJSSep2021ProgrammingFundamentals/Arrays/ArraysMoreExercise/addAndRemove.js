function addAndRemove(arr) {

    let array = arr;
    let arrayLength = array.length;
    let newArray = [];
    let number = 0;
    let isEmpty = true
//80/100 judge
    for (let i = 0; i < arrayLength; i++) {
        let command = array[i];
        number++;
        if (command === "add") {
            newArray.push(number);
            isEmpty = false
        } else if (command === "remove") {
            newArray.pop();
        }
    }
    if (!isEmpty) {
        console.log(newArray.join(' '));
    } else {
        console.log('Empty');
    }
}
addAndRemove(['add', 'remove', 'remove'])

