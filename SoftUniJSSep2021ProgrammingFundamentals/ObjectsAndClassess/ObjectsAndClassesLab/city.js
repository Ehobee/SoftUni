function city(obj) {

    let object = obj;

    for (let entires of Object.entries(object)) {
        console.log(entires.join(' -> '))
    }

}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)