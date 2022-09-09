function roomPainting(input) {

    paintBoxes = Number(input[0]);
    walltapeRoll = Number(input[1]);
    glovesPrice = Number(input[2]);
    brushPrice = Number(input[3]);



    let glovesNeeded = Math.ceil(walltapeRoll * 0.35)
    let brushesNeeded = Math.floor(paintBoxes * 0.48)

    paintPrice = 21.50 * paintBoxes
    walltapePrice = 5.2 * walltapeRoll

    glovesTotal = glovesNeeded * glovesPrice
    brushesTotal = brushesNeeded * brushPrice

    let total = paintPrice + walltapePrice + glovesTotal + brushesTotal

    let delivery = total / 15

    console.log(`This delivery will cost ${delivery.toFixed(2)} lv.`)
}
roomPainting(["10", 
    "8",
    "2.2",
    "5"
    ])