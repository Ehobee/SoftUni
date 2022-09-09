function finalCompetition(input) {

    let dancers = Number(input[0]);
    let scores = Number(input[1]);
    let season = input[2];
    let place = input[3];

    let prize = 0
    let abroadPrize = 0

    let spends = 0

    let finalPrize = 0

    let charity = 0
    let prizeLeft = 0
    let prizePerDancer = 0

    switch (place) {
        case "Bulgaria":
            prize = scores * dancers
            if (season === "summer") {
                spends = prize * 0.05
            } else {
                spends = prize * 0.08
            }
            break;

        case "Abroad":
            abroadPrize = dancers * scores
            prize = abroadPrize + abroadPrize * 0.50
            if (season === "summer") {
                spends = prize * 0.10
            } else {
                spends = prize * 0.15
            }
            break;
    }
    finalPrize = prize - spends

    charity = finalPrize * 0.75
    prizeLeft = finalPrize - charity
    prizePerDancer = prizeLeft / dancers

    console.log(`Charity - ${charity.toFixed(2)}`)
    console.log(`Money per dancer - ${prizePerDancer.toFixed(2)}`)
}
finalCompetition(["1", "89.5", "summer", "Abroad"])