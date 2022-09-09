function powersofTwo(input) {

    let finalPower = Number(input[0]);

    for (let power = 0; power <= finalPower; power += 2) {
        //a++ = 1,2,3,4,5
        console.log(Math.pow(2, power));
    }

}
powersofTwo(["4"])

function power(input) {

    let number = Number(input[0]);
    let num = 1;

    for (let i = 0; i <= number; i += 2) {

        console.log(num);
        num = num * 2 * 2;
    }
}
power(["4"])