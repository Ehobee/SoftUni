function solve() {
  let inputText = document.getElementById('input');
  let textArr = inputText.value.split('.').filter(sentence => sentence !== '');

  let divResult = document.getElementById('output');

  while (textArr.length > 0) {
    let text = textArr.splice(0, 3).join('. ') + '.';
    let p = document.createElement('p');
    p.textContent = text;
    divResult.appendChild(p)
  }
}