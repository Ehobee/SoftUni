function demo(input) {

    let liliysAge = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toySinglePrice = Number(input[2]);
    let money = 0;
    let savedMoney = 0
    let toys = 0;
    let brother = 0;

    for (let i = 1; i <= liliysAge; i++) {

        if (i % 2 === 0) {
            money += 10;
            savedMoney += money
            brother++
        } else {
            toys++;
        }
    }
    let toysTotal = toySinglePrice * toys;
    let totalMoney = (savedMoney + toysTotal) - brother

    if (totalMoney >= washingMachinePrice) {
        let N = totalMoney - washingMachinePrice
        console.log(`Yes! ${N.toFixed(2)}`)
    } else {
        let M = washingMachinePrice - totalMoney
        console.log(`No! ${M.toFixed(2)}`)
    }
}
demo(["10", "170", "6"])

