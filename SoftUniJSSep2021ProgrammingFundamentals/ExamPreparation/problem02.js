function solve(arr) {

    let friendList = arr.shift().split(', ');
    let arrLength = arr.length;
    let blacklisted = 0;
    let lost = 0;

    for (let i = 0; i < arrLength; i++) {

        let [command, name, newName] = arr[i].split(' ');
        let index = friendList.indexOf(name);
        if (friendList.length > 0) {
            if (command === 'Report') {
                console.log(`Blacklisted names: ${blacklisted}`);
                console.log(`Lost names: ${lost}`)
                console.log(friendList.join(' '))
                break;
            }
        }
            if (command === 'Blacklist') {
                if (friendList.includes(name) && index >= 0 && name !== 'Blacklisted' && name !== 'Lost') {
                    friendList.splice(index, 1, 'Blacklisted');
                    console.log(`${name} was blacklisted.`)
                    blacklisted++
                } else if (!friendList.includes(name)) {
                    console.log(`${name} was not found.`)

                }
            } else if (command === 'Error') {
                let currentIndex = Number(name);
                let currentName = friendList[currentIndex];
                if (currentIndex >= 0 && currentName !== 'Lost' && currentName !== 'Blacklisted') {
                    if (friendList.includes(currentName)) {
                        friendList.splice(currentIndex, 1, 'Lost');
                        console.log(`${currentName} was lost due to an error.`);
                        lost++
                    }
                }
            } else if (command === 'Change') {
                let currentIndex = Number(name);
                let currentName = friendList[currentIndex];
                if (currentIndex >= 0 && friendList.includes(currentName)) {
                    friendList.splice(currentIndex, 1, newName);
                    console.log(`${currentName} changed his username to ${newName}.`);

                }
            }

        }
    }
    solve(["",
        "Error 3",
        "Error 3",
        "Change 0 Mike123",
        "Report"])





