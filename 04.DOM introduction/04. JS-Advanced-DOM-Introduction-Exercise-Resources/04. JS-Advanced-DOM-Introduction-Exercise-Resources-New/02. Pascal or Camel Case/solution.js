/* function solve() {
  let input = document.getElementById('text').value;
  let currentCase = document.getElementById('naming-convention').value;

  let array = input.split(' ');

  let result = document.getElementById('result');

  let resultString = '';

  let length = array.length;
  if (currentCase === 'Camel Case') {
    resultString += array[0][0].toLowerCase() + array[0].slice(1, array[0].length);
    for (let i = 0; i < length; i++) {
      resultString += array[i][0].toUpperCase() + array[i].slice(1, length).toLowerCase()
    }

  } else if (currentCase === 'Pascal Case') {

    for (let i = 0; i < length; i++) {
      resultString += array[i][0].toUpperCase() + array[i].slice(1, length).toLowerCase();
    }

  } else {
    result.textContent = 'Error!';
  }
  result.textContent = resultString;
} */

function solve(textInput, transformerInput) {

  textInput = document.getElementById("text").value.toLowerCase();
  transformerInput = document.getElementById("naming-convention").value;
  let resultElement = document.getElementById("result");
  let output = "";

  textInput = textInput.split(" ");
  if (transformerInput === "Camel Case") {

    output += textInput[0][0].toLowerCase() +
      textInput[0].slice(1, textInput[0].length).toLowerCase();

    for (let i = 1; i < textInput.length; i++) {
      output += textInput[i][0].toUpperCase() + textInput[i].slice(1, textInput[i].length).toLowerCase();
    }
    resultElement.innerHTML = output;
  } else if (transformerInput === "Pascal Case") {

    for (let i = 0; i < textInput.length; i++) {
      output += textInput[i][0].toUpperCase() +
        textInput[i].slice(1, textInput[i].length).toLowerCase();
    }
    resultElement.innerHTML = output;
  } else {
    resultElement.textContent = "Error!"
  }

}
