function toggle() {

    let text = document.getElementById('extra');
    //console.log(text);
    let button = document.querySelector('.button');
    //console.log(button);

    if (button.textContent === 'More') {
        text.style.display = 'block';
        button.textContent = 'Less';
    } else {
        text.style.display = 'none';
        button.textContent = 'More';
    }
}