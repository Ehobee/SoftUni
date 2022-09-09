function factorial(input) {

    let number = Number(input[0]);
    let factorial = 1;

    for (i = 1; i <= number; i++) {
        factorial = factorial * i

    }
    console.log(factorial);

}
factorial(["4"])