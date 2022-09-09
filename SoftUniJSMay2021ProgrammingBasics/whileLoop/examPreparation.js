function examPreparation(input) {

    let index = 0;
    let badScore = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let badScoreCounter = 0;
    let taskCounter = 0;
    let sumScore = 0;
    let averageScore = 0;
    let lastTask = "";

    while (command !== "Enough") {
        let taskName = command;
        let score = Number(input[index]);
        index++;
        sumScore += score;
        taskCounter++;
        lastTask = taskName;
        averageScore = sumScore / taskCounter

        if (score <= 4) {
            badScoreCounter++;
        }

        if (badScoreCounter >= badScore) {
            console.log(`You need a break, ${badScoreCounter} poor grades.`)
            break;
        }
        command = input[index];
        index++;

    }
    if (command === "Enough") {
        console.log(`Average score: ${averageScore.toFixed(2)}`);
        console.log(`Number of problems: ${taskCounter}`);
        console.log(`Last problem: ${lastTask}`);
    }
} examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])


