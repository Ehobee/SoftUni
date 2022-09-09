function square(input) {

    let sidea = Number(input[0]);
    let sideb = Number(input[1]);
    let sideh = Number(input[2]);

    let area = (sidea + sideb) * sideh / 2;

    console.log(area.toFixed(2));
}
square(["8", 
    "13",
    "7"])