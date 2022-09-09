function wordsTracker(arr) {

    let lookFor = arr.shift().split(' ');
    let lookIn = arr;
    let toLookFor = {};

    for (let word of lookFor) {
        toLookFor[word] = 0;
    }

    for (let wordToSearch of lookIn) {

        if (toLookFor.hasOwnProperty(wordToSearch)) {
            toLookFor[wordToSearch]++;
        }
    }

    let entires = Object.entries(toLookFor);
    let sorted = entires.sort((a, b) => b[1] - a[1]);
    
    for (el of sorted) {
        console.log(`${el[0]} - ${el[1]}`);
    }
}
wordsTracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)