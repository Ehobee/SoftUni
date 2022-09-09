function cleverLily(input) {


    let lilysAge = Number(input[0]);
    let wmPrice = Number(input[1]);
    let toysSinglePrice = Number(input[2]);

    let money = 0
    let toys = 0
    let brother = 0
    let p = 0
    let total = 0

    for (let bday = 1; bday <= lilysAge; bday++) {
        if (bday % 2 === 0) {
            let gift = 10
            money += gift
            p += money
            brother++
        } else {
            toys++
            sold = toys * toysSinglePrice
        }
    }
    total = (p + sold) - brother

    if (total >= wmPrice) {
        let n = Math.abs(total - wmPrice)
        console.log(`Yes! ${n.toFixed(2)}`)
    } else {
        let n = Math.abs(wmPrice - total)
        console.log(`No! ${n.toFixed(2)}`)
    }
}
cleverLily(["21", "1570.98", "3"])