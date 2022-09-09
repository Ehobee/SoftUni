function demo(input) {

    let sumDeposited = Number(input[0]);
    let totalSum = 0;
    let interestPercent = 0.05;

    let interest = sumDeposited * interestPercent;

    totalSum = sumDeposited + interest;


    sumSecondYear = totalSum;
    interest = sumSecondYear * interestPercent;
    sumSecondYearTotal = sumSecondYear + interest;

    interest = sumSecondYearTotal * interestPercent;

    sumThirdYearTotal = sumSecondYearTotal + interest;




    console.log(totalSum.toFixed(2));
    console.log(sumSecondYearTotal.toFixed(2));
    console.log(sumThirdYearTotal.toFixed(2));

} demo(["2000"])

/* task7 JS Telerik
let n = +gets();
for(let i =0;i<3;i++) print(      (Math.round((n+=n*0.05)*100 )/100).toFixed(2)   ) */



index++;
let moneySaved = 0;
let daysSpendCounter = 0;
let days = 0;

while (moneySaved < moneyNeeded) {
    let action = command;
    
    index++;
    moneySaved += money;
    days++;
    if (action === "spend") {
        daysSpendCounter++;
    }
    if (daysSpendCounter >= 5) {
        console.log("You can't save the money.");
        console.log(days)
        break;
    }
    if (money > moneyNeeded) {
        console.log(`You saved the money for ${days} days.`)
    }
}
}

