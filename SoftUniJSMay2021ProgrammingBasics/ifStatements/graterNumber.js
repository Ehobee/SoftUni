function greaterNumber(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);

    if (firstNumber > secondNumber) {
        console.log(firstNumber)
    }

    else if (secondNumber > firstNumber) {
        console.log(secondNumber)
    }

    else if (firstNumber = secondNumber) {
        console.log("The numbers are equal")

    }


}
greaterNumber(["5", "5"])