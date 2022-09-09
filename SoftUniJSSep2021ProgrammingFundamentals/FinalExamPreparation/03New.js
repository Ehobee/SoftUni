function solve(input) {
 
    input.pop();
    let followers = {};
    let countFollowers = 0;
 
    for (let line of input) {
        line = line.split(': ');
        let command = line[0];
 
        if (command === 'New follower') {
            let name = line[1];
            if (!followers.hasOwnProperty(name)) {
                followers[name] = {
                    numOfComments: 0,
                    numOfLikes: 0,
                }
                countFollowers++;
            }
        } else if (command === 'Like') {
            let name = line[1];
            let likes = Number(line[2]);
 
            if (!followers.hasOwnProperty(name)) {
                followers[name] = {
                    numOfComments: 0,
                    numOfLikes: 0,
                }
                followers[name].numOfLikes += likes
                countFollowers++
 
            } else {
                let accounfInfo = followers[name];
                accounfInfo.numOfLikes += likes;
            }
        } else if (command === 'Comment') {
            let name = line[1];
            if (!followers.hasOwnProperty(name)) {
                followers[name] = {
                    numOfComments: 0,
                    numOfLikes: 0,
                }
                countFollowers++;
                followers[name].numOfComments += 1;
            } else {
                let accounfInfo = followers[name];
                accounfInfo.numOfComments += 1;
 
            }
        } else if (command === 'Blocked') {
            let name = line[1];
            if (!followers.hasOwnProperty(name)) {
                console.log(`${name} doesn't exist.`);
            } else {
                delete followers[name];
                countFollowers--;
            }
        }
    }
    console.log(`${countFollowers} followers`);
    let sorted = Object.entries(followers).sort(accountsToSort);
 
    for (let word of sorted) {
        console.log(`${word[0]}: ${word[1].numOfComments + word[1].numOfLikes}`);
    }
 
    function accountsToSort(a, b) {
        let [aName, aCount] = a;
        let [bName, bCount] = b;
 
        let result = (bCount.numOfComments + bCount.numOfLikes) - (aCount.numOfComments + aCount.numOfLikes);
        if (result === 0) {
            return aName.localeCompare(bName);
        }
        return result;
    }
}
solve(["New follower: George",
"Like: George: 5",
"New follower: George",
"Log out"])