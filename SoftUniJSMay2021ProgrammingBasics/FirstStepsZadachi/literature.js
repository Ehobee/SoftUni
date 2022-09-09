function literature(input) {
    numberOfPages = Number(input[0]);
    pagesPerHour = Number(input[1]);
    totalDays = Number(input[2]);

    totalTime = numberOfPages / pagesPerHour;
    totalHours = totalTime / totalDays;

    console.log(totalHours);
}

literature(["432",
"15",
"4"])

