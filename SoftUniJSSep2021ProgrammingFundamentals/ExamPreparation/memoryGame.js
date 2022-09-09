function memoryGame(arr) {

    let end = arr.pop();
    let sequence = arr.shift();
    sequence[0].split(' ')
    console.log(sequence);
    let arrLength = arr.length;
    let sequenceLength = sequence.length;

    for (let i = 0; i < arrLength; i++) {
        let [index1, index2] = arr[i].split(' ').map(Number);

        for (let j = 0; j < sequenceLength; j++) {
            let elOne = sequence[index1];
            let elTwo = sequence[index2];

            if (elOne === elTwo) {
                sequence.splice(index1, 1);
                sequence.splice(index2, 1)
            }
        }
    }
console.log(sequence);
}
memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
]
)