function farToCel (input) {
    let far = Number(input[0])
    let cel = (far - 32) / 1.8
    console.log(cel.toFixed(1))
}
farToCel(["3"])