function maxSequence(arr) {

    let array = arr;
    let arrayLength = array.length;
    let biggestSequence = 0;
    let indexOfBiggestSeq = 0;

    for (index = 0; index < arrayLength; index++) {
        let currentNumber = Number(array[index]);
        let currentSeqLength = 1;
        for (let j = index + 1; j < arrayLength; j++) {
            let nextNumber = Number(array[j]);
            if (currentNumber === nextNumber) {
                currentSeqLength++;
            } else {
                break;
            }
        }
        if (currentSeqLength > biggestSequence) {
            biggestSequence = currentSeqLength;
            indexOfBiggestSeq = index;
        }
    }
    let element = array[indexOfBiggestSeq];
    console.log(`${element} `.repeat(biggestSequence));
}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])





