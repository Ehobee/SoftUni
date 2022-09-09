function odd(string) {

    let words = string.toLowerCase().split(' ');

    let occur = {};

    for (word of words) {
        if (!occur.hasOwnProperty(word)) {
            occur[word] = 0;
        }
        occur[word]++
    }
    let entries = Object.entries(occur)

    let keys = [];

    for (let entry of entries) {
        if (entry[1] % 2 !== 0) {
            keys.push(entry[0])
        }
    }
    console.log(keys.join(' '))
}
odd('Cake IS SWEET is Soft CAKE sweet Food')