function volleyball (input) {
    let year = input[0];
    let p = Number(input[1]);
    let h = Number(input[2]);

    let sofia = 48 - h;
    let gamesSofia = sofia * (3.0/4);
    //gamesHome = h
    
    let pSofia = p * (2.0/3);
    
    let result = gamesSofia + pSofia + h
    
    if (year === "leap") {
        result = result * 1.15
    }
console.log(Math.floor(result.toFixed(2)))

}
volleyball(["normal",
"6",
"13"])




