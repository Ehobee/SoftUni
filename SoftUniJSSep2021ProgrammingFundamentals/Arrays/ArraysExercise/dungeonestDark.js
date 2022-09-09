function dungeons(arr) {
    //separete the initial array to 2 arrays containing the rooms and numbers
    //this should be a separate function TODO later on
    let rooms = arr[0].split('|');
    let roomsNumber = rooms.length;
    let roomsArr = [];
    let numbersArr = [];
    let isDead = false;

    for (let i = 0; i < roomsNumber; i++) {
        let currentRoom = rooms[i];
        let numbers = currentRoom.split(' ');
        let numbersLength = numbers.length;

        for (j = 0; j < numbersLength; j++); {
            let room = numbers.shift(numbers[j]);
            let number = numbers.shift(numbers[j + 1]);
            roomsArr.push(room)
            numbersArr.push(number);

        }
    }
    let initialHP = 100;
    let initialCoins = 0;
    let length = roomsArr.length;

    for (k = 0; k < length; k++) {
        let bestRoom = k + 1;
        let roomImIn = roomsArr[k];
        let numberToReflect = Number(numbersArr[k]);

        if (roomImIn === 'potion') {
            initialHP += numberToReflect;
            if (initialHP >= 100) {
                numberToReflect = numberToReflect - (initialHP - 100);
                //healedFor -= (health + healedFor - 100)
                initialHP = 100;
            }
            console.log(`You healed for ${numberToReflect} hp.`);
            console.log(`Current health: ${initialHP} hp.`)
        }

        if (roomImIn === 'chest') {
            initialCoins += numberToReflect;
            console.log(`You found ${numberToReflect} coins.`)
        }

        if (roomImIn !== 'potion' && roomImIn !== 'chest') {
            let monster = roomImIn;
            initialHP -= numberToReflect;
            if (initialHP <= 0) {
                isDead = true;
                console.log(`You died! Killed by ${monster}.`)
                console.log(`Best room: ${bestRoom}`)
                break;
            }
            console.log(`You slayed ${monster}.`)
        }
    }
    if (!isDead) {
        console.log("You've made it!");
        console.log(`Coins: ${initialCoins}`);
        console.log(`Health: ${initialHP}`);
    }
}
dungeons(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);


/*function dungeonestDark(arr) {
    let health = 100;
    let coins = 0;
    let newArr = arr[0].split("|");
    for (let i = 0; i < newArr.length; i++) {
        let [item, points] = newArr[i].split(" ");*/
