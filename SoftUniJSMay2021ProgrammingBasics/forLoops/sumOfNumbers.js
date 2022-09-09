function sumOfNumbers(input) {

    let n = input[0];
    let count = n.length

    let sum = 0;

    for (let i = 0; i < count; i++) {
        sum += Number(n[i])
    }
    console.log(`The sum of the digits is:${sum}`)
}
sumOfNumbers(["564891"])