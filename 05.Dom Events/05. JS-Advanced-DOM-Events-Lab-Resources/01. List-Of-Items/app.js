function addItem() {
    let input = document.getElementById('newItemText').value;
    let newLiItem = document.createElement('li');
    let ulElement = document.getElementById('items')
    newLiItem.textContent = input;
    ulElement.appendChild(newLiItem);
}