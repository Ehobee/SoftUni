function solve(input) {

    let followers = {

    };

    for (let line of input) {

        line = input.shift();
        while (line !== 'Log out') {
            let [command, ...tokens] = line.split(': ');

            if (command === 'New follower') {
                let name = tokens[0];
                if (!followers.hasOwnProperty(name)) {
                    followers[name] = { likes:0, comments:0 };
                }

            } else if (command === 'Like') {

                let name = tokens[0];
                let likes = tokens[1];

                if (!followers.hasOwnProperty(name)) {
                    followers[name] = { likes: likes, comments: 0 };
                } else {
                    followers[name].likes += +likes;
                }

            } else if (command === 'Comment') {

                let name = tokens[0];
                let comments = 1;

                if (!followers.hasOwnProperty(name)) {
                    followers[name] = { likes: 0, comments: 0 };
                } else {
                    followers[name].comments += +comments;
                }

            } else if (command === 'Blocked') {

                let name = tokens[0];

                if (!followers.hasOwnProperty(name)) {
                    console.log(`${name} doesn't exist.`)
                } else {
                    delete followers[name];
                }
            }
            line = input.shift()
            //console.log(command)
        }
    }
    //console.log(followers)
    let entries = Object.entries(followers);
    let length = 0;
    for (let entry of entries) {
        //console.log(entry)

        length = entries.length

    }
    console.log(`${length} followers`);
    
    let sorted = Object.entries(followers).sort(accountsToSort);
 
    for (let word of sorted) {
        console.log(`${word[0]}: ${word[1].comments + word[1].likes}`);
    }
 
    function accountsToSort(a, b) {
        let [aName, aCount] = a;
        let [bName, bCount] = b;
 
        let result = (bCount.comments + bCount.likes) - (aCount.comments + aCount.likes);
        if (result === 0) {
            return aName.localeCompare(bName);
        }
        return result;
    }
    
}
solve(["Like: Katy: 3",
"Comment: Katy",
"New follower: Bob",
"Blocked: Bob",
"New follower: Amy",
"Like: Amy: 4",
"Log out"])