function triangleArea(input) {
    let side = Number(input[0]);
    let hight = Number(input[1]);

    let area = side * hight / 2;

    console.log(area.toFixed(2));
}
triangleArea(["1.23456", "4.56789"])