function sumSeconds(input) {

    let racerOneSecs = Number(input[0]);
    let racerTwoSecs = Number(input[1]);
    let racerThreeSecs = Number(input[2]);

    let sumSecs = racerOneSecs + racerTwoSecs + racerThreeSecs;

    let minutes = Math.trunc(sumSecs / 60);
    let seconds = sumSecs % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}
sumSeconds(["35",
    "45",
    "44"])
