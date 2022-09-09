function multiplicationTable(input) {

    let number = Number(input[0]);
    let sum = 0

    for (num = 1; num <= 10; num++) {
        sum = number * num
        console.log(`${num} * ${number} = ${sum}`)
    }

}
multiplicationTable(["5"])