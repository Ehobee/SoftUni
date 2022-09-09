class Cat {
    isHungry = true;
    constructor(name) {
        this.name = name;
        //this.isHUngry = true; //not the best way of setting default properties
    }

    makeSound() {
        //console.log('Meow');
        console.log(`${this.name}: 'Meow'-meow! :3`)
    }
}

let firstCat = new Cat('Vanjie');
console.log(firstCat);
firstCat.makeSound();
let secondCat = new Cat('Navcho');
console.log(secondCat);

secondCat.name = 'Mishy';
console.log(secondCat);

let catNames = ['Garry', 'Puchi', 'Lucky', 'Sisa', 'Mici'];
let cats = catNames.map(x => new Cat(x));
console.log(cats);

cats.forEach(x => x.makeSound());