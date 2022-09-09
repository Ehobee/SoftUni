function inventory(arr) {

    let heroRegister = [];

    for (let line of arr) {
        let [name, level, items] = line.split(' / ');

        let sortedItems = items.split(', ');
        sortedItems.sort((a, b) => a.localeCompare(b))
        sortedItems = sortedItems.join(', ');

        let hero = {
            name: name,
            level: +level,
            items: sortedItems
        }
        heroRegister.push(hero)
    }
    let sortedHeroes = heroRegister.sort((a, b) => a.level - b.level)

    for (let el of sortedHeroes) {
        let entires = Object.values(el);
        console.log(`Hero: ${entires[0]}`);
        console.log(`level => ${entires[1]}`);
        console.log(`items => ${entires[2]}`)
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
)