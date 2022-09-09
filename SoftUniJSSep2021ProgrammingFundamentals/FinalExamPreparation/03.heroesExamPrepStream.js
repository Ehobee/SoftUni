function heroes(input) {

    let heroesCount = +input.shift();

    let heroes = {};

    while (heroesCount > 0) {
        let line = input.shift().split(' ');
        let heroName = line[0];
        let hp = Number(line[1]);
        let mp = Number(line[2]);
        if (hp > 100) {
            hp = 100;
        }
        if (mp > 100) {
            mp = 100;
        }
        heroes[heroName] = [hp, mp];
        heroesCount--
    }
    let [command, hero, amount, name] = input.shift().split(' - ');

    console.log(heroes);

    while (command !== 'End') {
        switch (command) {
            case 'CastSpell':
                if (heroes.hasOwnProperty(hero)) {
                    let currentHeroArr = heroes[hero];
                    let currentMP = currentHeroArr[1];
                    amount = Number(amount);
                    if (currentMP >= amount) {
                        currentMP -= amount;
                        currentHeroArr[1] = currentMP;
                        heroes[hero] = currentHeroArr;
                        console.log(`${hero} has successfully cast ${name} and now has ${currentMP} MP!`);
                    } else {
                        console.log(``)
                    }
                    break;
                }
            case 'TakeDamage':
                if (heroes.hasOwnProperty(hero)) {
                    let currentHeroArr = heroes[hero];
                    let currentHP = currentHeroArr[0];
                    amount = Number(amount);
                    currentHP -= amount;
                    if (currentHP > 0) {
                        currentHeroArr[0] = currentHP;
                        heroes[hero] = currentHeroArr;
                        console.log(`${hero} was hit for ${amount} HP by ${name} and now has ${currentHP} HP left.`)
                    } else {
                        delete heroes[hero];
                        console.log(`${hero} was killed by ${name}!`)
                    }
                    break;
                }
            case 'Recharge':
                if(heroes.hasOwnProperty(hero)) {
                    let currentHeroArr = heroes[hero];
                    let currentMP = currentArr[1];
                    let needMP = 200 - currentMP;
                    amount = Number(amount);
                    currentMP+= amount;

                    if(currentMP >200) {
                        currentMP = 200;
                        amount = needMP;
                    }
                    currentHeroArr[1] = currentMP;
                    console.log(``)

                }
            case '':
        }
        [command, hero, amount, name] = input.shift().split(' - ');
    }

}
heroes(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'])