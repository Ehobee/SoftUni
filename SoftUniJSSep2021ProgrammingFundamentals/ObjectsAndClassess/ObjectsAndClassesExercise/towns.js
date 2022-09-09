function towns(arr) {

    let arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
        let [town, latitude, longtitute] = arr[i].split(' | ');

        let object = {
            town: town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longtitute).toFixed(2),
        }

        console.log(object)
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)