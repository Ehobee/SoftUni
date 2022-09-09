function computerRoom(input) {

    let month = input[0];
    let totalHours = Number(input[1]);
    let totalPeople = Number(input[2]);
    let time = input[3];

    let pricePerHour = 0

    switch (month) {
        case "march":
        case "april":
        case "may":
            if (time === "day") {
                pricePerHour = 10.50
            } else {
                pricePerHour = 8.40
            }
            break;

        case "june":
        case "july":
        case "august":
            if (time === "day") {
                pricePerHour = 12.60
            } else {
                pricePerHour = 10.20
            }
            break;
    }



    if (totalPeople > 4) {
        pricePerHour = pricePerHour - (pricePerHour * 0.10)
    }

    if (totalHours >= 5) {
        pricePerHour = pricePerHour - (pricePerHour * 0.50)
    }
    let totalPricePerHour = pricePerHour * totalPeople
    let totalPrice = totalPricePerHour * totalHours
    console.log(`Price per person for one hour: ${pricePerHour.toFixed(2)}`)
    console.log(`Total cost of the visit: ${totalPrice.toFixed(2)}`)

}
computerRoom(["march",
"3",
"3",
"day"])


