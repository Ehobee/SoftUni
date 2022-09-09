function depositCalculator(input) {

    let initialDeposit = Number(input[0]);
    let depostitPeriod = Number(input[1]);
    let interestPercent = Number(input[2] / 100);
    //suma v kraq na lihven period = suma za tri meseca ako lihvata e 0,95
    //

    let interest = initialDeposit * interestPercent;
    let monthInterest = interest / 12;
    
    
    


    let sum = initialDeposit + (depostitPeriod * monthInterest);

    console.log(sum);

}
depositCalculator (["2350",
"6",
"7"])





