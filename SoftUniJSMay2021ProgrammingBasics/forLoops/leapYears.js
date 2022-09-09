function leapYears(input) {

    let leap = Number(input[0]);
    let year = Number(input[1]);

    for (let leapYear = leap; leapYear <= year; leapYear+=4) {

        console.log(leapYear)
    }
}
leapYears(["1908",
"1919"])
