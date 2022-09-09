function pipes(input) {

    let volume = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let h = Number(input[3]);

    //do kolko se e zapylnil baseina = nova promenliva  
    // obshtoto vreme v koeto go e nqmalo = h
    //litri voda na chas - p1 i p2
    let pipe1Total = p1 * h
    let pipe2Total = p2 * h

    let volumeTotal = pipe1Total + pipe2Total


    if (volumeTotal <= volume) {
        let volumeTotalPercent = volumeTotal / volume * 100
        let pipe1TotalPercent = pipe1Total / volumeTotal * 100
        let pipe2TotalPercent = pipe2Total / volumeTotal * 100
        console.log(`The pool is ${volumeTotalPercent.toFixed(2)}% full. Pipe 1: ${pipe1TotalPercent.toFixed(2)}%. Pipe 2: ${pipe2TotalPercent.toFixed(2)}%.`)
        
    } else {
        let volumeTotalLiters = pipe1Total + pipe2Total
        let overflow = Math.abs(volume - volumeTotalLiters)
        console.log(`For ${h} hours the pool overflows with ${overflow.toFixed(2)} liters.`)
    }
}
pipes(["100",
    "100",
    "100",
    "2.5",
])