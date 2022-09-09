function smallestNumber(input) {

    let index = 0;
    let numbersCount = Number(input[index]);
    index++;
    let smallest = Number.MAX_SAFE_INTEGER;

    for (let i = index; i <= numbersCount; i++) {
        let number = Number(input[index]);
        index++;
        if (smallest > number) {
            smallest = number;
        }
    }
    console.log(smallest);
}
smallestNumber(["3",
    "-10",
    "20",
    "-30"])


