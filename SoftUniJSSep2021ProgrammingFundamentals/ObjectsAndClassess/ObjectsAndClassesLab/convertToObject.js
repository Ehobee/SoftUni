function objectConverter(json) {

    let object = JSON.parse(json);

    for (let entires of Object.entries(object)) {
        console.log(entires.join(': '));
    }
}
objectConverter('{"name": "George", "age": 40, "town": "Sofia"}')