function phoneBook(arr) {
    
    let phoneBook = {};

    for (let line of arr) {
        let [name, phoneNumber] = line.split(' ');
        //console.log(name, phoneNumber);

        phoneBook[name] = phoneNumber;
        //console.log(phoneBook)
    }
    for (let element in phoneBook) {
        console.log(`${element} -> ${phoneBook[element]}`)
    }
}
phoneBook(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344']
)