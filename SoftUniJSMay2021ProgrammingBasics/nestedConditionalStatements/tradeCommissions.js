function tradeCommissions(input) {

    let city = input[0];
    let sales = Number(input[1]);

    let commissions = 0;

    if (city === "Sofia" && sales >= 0) {
        if (sales <= 500) {
            commissions = sales * 0.05
        } else if (sales > 500 && sales <= 1000) {
            commissions = sales * 0.07
        } else if (sales > 1000 && sales <= 10000) {
            commissions = sales * 0.08
        } else if (sales > 10000) {
            commissions = sales * 0.12
        }
        console.log(commissions.toFixed(2));

    } else if (city === "Varna" && sales >= 0) {
        if (sales <= 500) {
            commissions = sales * 4.5 / 100
        } else if (sales > 500 && sales <= 1000) {
            commissions = sales * 7.5 / 100
        } else if (sales > 1000 && sales <= 10000) {
            commissions = sales * 0.10
        } else if (sales > 10000) {
            commissions = sales * 0.13
        } console.log(commissions.toFixed(2));

    } else if (city === "Plovdiv" && sales >= 0) {
        if (sales <= 500) {
            commissions = sales * 5.5 / 100
        } else if (sales > 500 && sales <= 1000) {
            commissions = sales * 0.08
        } else if (sales > 1000 && sales <= 10000) {
            commissions = sales * 0.12
        } else if (sales > 10000) {
            commissions = sales * 14.5 / 100
        } console.log(commissions.toFixed(2));
    } else {
        console.log("error")
    }
}
tradeCommissions(["Sofia",
    "-3"])
