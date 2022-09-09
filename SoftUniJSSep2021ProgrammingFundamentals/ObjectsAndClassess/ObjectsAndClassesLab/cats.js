function cats(arr) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.sound = () => {
                console.log(`${this.name}, age ${this.age} says Meow`)
            }
        }
    }
    let cats = [];

    let arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
        let [name, age] = arr[i].split(' ');

        let newCat = new Cat(name, age);
        cats.push(newCat);
    }
    cats.forEach(cat => cat.sound())
}
cats(['Mellow 2', 'Tom 5'])