function aquarium (input) {

    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let hight = Number(input[2]);
    let percent = Number(input[3] / 100);

    //1l = 1dm*3

    // how many liters if some % is taken by sand, plants, pomp and warmer

    //? how many liters we need to full the auarium
    let volume = lenght * width * hight;
    let totalLiters = volume * 0.001

    let actualLitersNeeded = totalLiters * (1 - percent);

    console.log(actualLitersNeeded);

}
aquarium(["85",
"75",
"47",
"17"])
