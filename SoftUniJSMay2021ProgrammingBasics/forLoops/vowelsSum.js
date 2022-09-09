function vowelsSum(input) {

    let string = (input[0]);
    let finalSymbol = string.length;
    let sum = 0
    /* буква	a	e	i	o	u
     стойност	1	2	3	4	5
*/
    for (let index = 0; index < finalSymbol; index++) {
        switch (string.charAt(index)) {
            case "a": sum += 1; break;
            case "e": sum += 2; break;
            case "i": sum += 3; break;
            case "o": sum += 4; break;
            case "u": sum += 5; break;
        }
    }
    console.log(sum)

}
vowelsSum(["hello"])