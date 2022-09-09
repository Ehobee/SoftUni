function shoppingList(arr) {

    let list = arr.shift().split('!');
    let end = arr.pop()
    let arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
        let [command, grocery, secondGrocery] = arr[i].split(' ');
        let index = list.indexOf(grocery);

        if (command === 'Urgent' && !list.includes(grocery)) {
            list.unshift(grocery)
        } else if (command === 'Unnecessary' && list.includes(grocery)) {
            list.splice(index, 1);
        } else if (command === 'Correct' && list.includes(grocery)) {
            list.splice(index, 1, secondGrocery)
        } else if (command === 'Rearrange' && list.includes(grocery)) {
            list.splice(index, 1);
            list.push(grocery);
        }
    }
    console.log(list.join(', '))
}
shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])

