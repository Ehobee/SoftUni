function devide(input) {

    let index = 0;
    let n = Number(input[index]);
    index++;
    let p1counter = 0;
    let p2counter = 0;
    let p3counter = 0;

    let p1percent = 0;
    let p2percent = 0;
    let p3percent = 0;


    for (let i = index; i <= n; i++) {
        let number = Number(input[index]);
        index++

        if (number % 2 === 0) {
            p1counter++;
        }
        if (number % 3 === 0) {
            p2counter++;
        }
        if (number % 4 === 0) {
            p3counter++;
        }
    }
    p1percent = p1counter / n * 100;
    p2percent = p2counter / n * 100;
    p3percent = p3counter / n * 100;

    console.log(p1percent.toFixed(2) + "%");
    console.log(p2percent.toFixed(2) + "%");
    console.log(p3percent.toFixed(2) + "%");
}
devide(["10",
    "680",
    "2",
    "600",
    "200",
    "800",
    "799",
    "199",
    "46",
    "128",
    "65"])
