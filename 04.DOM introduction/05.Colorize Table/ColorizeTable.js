/*function colorize() {
    let rowElements = document.querySelectorAll('tr');
    let length = rowElements.length;
    for (let i = 0; i < length; i++) {
        if (i % 2 !== 0) {
            rowElements[i].style.backgroundColor = 'teal'
        }
    }
}*/

function colorize() {
    let rowElements = document.querySelectorAll('tr');

    rowElements.forEach((x, i) => {
        if (i % 2 !== 0) {
            rowElements[i].style.backgroundColor = 'teal'
    
        }
    })
}

