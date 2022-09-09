function solve(obj) {

    let engines = {
        small: { power: 90, volume: 1800 },
        normal: { power: 120, volume: 2400 },
        monster: { power: 200, volume: 3500 }
    };

    let carriages = {
        hatchback: { type: 'hatchback', color: obj.color },
        coupe: { type: 'coupe', color: obj.color }
    };

    let wheels = 2 * Math.round(obj.wheelsize / 2) - 1;
    console.log(wheels)
    console.log(carriage.coupe.color)

    let car = {
        model = obj.model,
    };

    if (obj.power >= 200) {
        car.engine = engines[monster]
    } else if (obj.power >= 120) {
        car.engine = engines[normal]
    } else {
        car.engine = engines[small]
    }
    console.log(car.engine)
}
solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
)