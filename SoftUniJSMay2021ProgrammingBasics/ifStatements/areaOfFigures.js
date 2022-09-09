function figuresAria(input) {

    let figure = (input[0]);

    if (figure === ("square")) {
        let side = Number(input[1])
        let area = (side * side)
        console.log(area.toFixed(3))
    } else if (figure === "rectangle") {
        let sidea = Number(input[1]);
        let sideb = Number(input[2]);
        let area = sidea * sideb
        console.log(area.toFixed(3))
    } else if (figure === "circle") {
        let radius = (input[1])
        let area = Math.PI * (radius * radius)

        console.log(area.toFixed(3))
    } else if (figure === "triangle") {
        let side = Number(input[1]);
        let h = Number(input[2]);
        let area = side * h / 2
        console.log(area.toFixed(3))
    }


}
figuresAria(["triangle",
"4.5",
"20"])





