function cinema(input) {

    let type = (input[0]);
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let ticket = 0;

    /* switch (type) {
        case "Premiere":
            ticket = 12; break;
        case "Normal":
            ticket = 7.50; break; 
        case "Discount":
            ticket = 5; break;
    } */
    if (type === "Premiere") {
        ticket = 12
    } else if (type === "Normal") {
        ticket = 7.50
    } else if (type === "Discount") {
        ticket = 5
    }
    let total = ticket * (rows * columns);
    console.log(total.toFixed(2))
}
cinema(["Normal",
"21",
"13"])

