function sumTable() {

    let elements = document.querySelectorAll('td');
    let sum = 0;
    let length = elements.length;
    for (let i = 1; i < length - 2; i++) {

        if (i % 2 !== 0) {
            let cost = Number(elements[i].textContent);
            sum += cost;
        }
    }
    document.getElementById('sum').textContent = sum;;
}