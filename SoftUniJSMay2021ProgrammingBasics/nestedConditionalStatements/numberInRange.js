function numberInRange(input) {
    let number = Number(input[0]);

    if (number >= -100 && number !== 0) {
        if (number <= 100) {
            console.log("Yes");
        } else if (number > 100) {
            console.log("No");
        }
    } else {
        console.log("No");
    }
}
numberInRange(["1011"])