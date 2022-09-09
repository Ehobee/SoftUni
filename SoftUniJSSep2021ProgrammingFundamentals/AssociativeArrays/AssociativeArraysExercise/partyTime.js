function partyTime(arr) {

    let string = arr.toString();

    let [guestList, comingGuests] = string.split(',PARTY,');

    guestList = guestList.split(',');
    comingGuests = comingGuests.split(',');
    let guestsCounter = guestList.length;

    for (let currentGuest of comingGuests) {

        if (guestList.includes(currentGuest)) {
            let index = guestList.indexOf(currentGuest);
            guestList.splice(index, 1);
            guestsCounter--;
        }
    }

    let sortedList = guestList.sort((a, b) => a.localeCompare(b));
    console.log(guestsCounter);
    console.log(sortedList.join("\n"));
}
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]

)


function solve(input) {

    let guestList = {
        vip: [],
        regular: []
    }

    let guest = input.shift();

    while (guest !== 'PARTY') {

        let firstChar = guest[0];
        if (isNaN(firstChar)) {
            guestList.regular.push(guest);
        } else {
            guestList.vip.push(guest);
        }
        guest = input.shift();
    }

    for (let guest of input) {
        if (guestList.vip.includes(guest)) {
            let index = guestList.vip.indexOf(guest);
            guestList.vip.splice(index, 1);
        } else if (guestList.regular.includes(guest)) {
            let index = guestList.regular.indexOf(guest);
            guestList.regular.splice(index, 1);
        }
    }

    let vipCount = guestList.vip.length;
    let regularCount = guestList.regular.length;

    console.log(vipCount + regularCount);
    console.log(guestList.vip.join('\n'));
    console.log(guestList.regular.join('\n'));
}
solve()