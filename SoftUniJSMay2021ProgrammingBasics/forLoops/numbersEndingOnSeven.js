function numbersEndingOnSeven(input) {

    for (let numbers = 1; numbers <=1000; numbers++) {
        if (numbers % 10 === 7) {
            console.log(numbers++)
        }
    }
}
numbersEndingOnSeven()