function printElement(arr) {

    let array = arr;
    let arrayLength = array.length;
    let step = Number(array[arrayLength - 1]);
    let collections = [];

    for (let i = 0; i < arrayLength - 1; i++) {
        let element = array[i];
        if (i % step === 0) {
            collections.push(element);
        }
    }
    console.log(collections.join(' '));
}
printElement(['1', '2', '3', '4', '5', '6'])