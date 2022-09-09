function solve(input) {

    let string = input.shift();
    let regex = /(?<valid>[@#]+(?<color>[a-z]{3,})[@#]+)[^a-zA-Z0-9]*\/+(?<amount>\d+)\/+/g
    let eggs = [];
    let matches = string.match(regex);

    while ((matches = regex.exec(string)) !== null) {
        // console.log(matches.groups)
        eggs.push(matches.groups)
    }
    for (let egg of eggs) {
        console.log(`You found ${egg.amount} ${egg.color} eggs!`)
    }
}
solve(['#@##@red@#/8/@rEd@/2/#@purple@////10/'])