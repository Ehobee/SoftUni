function convertor(input) {

    let celsius = Number(input[0]);
    //°F = °C × 1,8 + 32
    let fehrenheit = celsius * 1.8 + 32;
//c = (f - 32) / 1.8
    console.log(fehrenheit.toFixed(2));
}
convertor(["32.3"])