function commonElements(arr, arrTwo) {

    let initialArray = arr;
    let secondArray = arrTwo;
    let length = initialArray.length


    for (let i = 0; i < length; i++) {
        let element = initialArray[i];
        if (secondArray.includes(element)) {
            console.log(element);
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)
