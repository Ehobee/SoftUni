window.addEventListener('load', solution);

function solution() {

  document.getElementById('submitBTN').addEventListener('click', addPersonalInfo);

  function addPersonalInfo() {

    let fullNameInputElement = document.getElementById('fname');
    let emailInputElement = document.getElementById('email');
    let phoneNumberInputElement = document.getElementById('phone');
    let addressInputElement = document.getElementById('address');
    let postalCodeInputElement = document.getElementById('code');

    if (!fullNameInputElement.value || !emailInputElement.value) {
      return;
    }

    let name = fullNameInputElement.value;
    let email = emailInputElement.value;
    let phone = phoneNumberInputElement.value;
    let address = addressInputElement.value;
    let code = postalCodeInputElement.value;

    let info = [{ 'Full Name': name }, { 'Email': email }, { 'Phone Number': phone }, { 'Address': address }, { 'Postal Code': code }];
    let previewElement = document.getElementById('infoPreview')
    info.forEach(e => {
      let listItem = document.createElement('li');
      Object.keys(e).forEach((key) => {
        let content = `${key}: ${e[key]}`;
        listItem.textContent = content;
      });
      previewElement.appendChild(listItem)
    });

    fullNameInputElement.value = '';
    emailInputElement.value = '';
    phoneNumberInputElement.value = '';
    addressInputElement.value = '';
    postalCodeInputElement.value = '';

    document.getElementById('submitBTN').disabled = true;
    document.getElementById('editBTN').disabled = false;
    document.getElementById('continueBTN').disabled = false;
  }

  document.getElementById('editBTN').addEventListener('click', edit);
  function edit(e) {
    document.getElementById('submitBTN').disabled = false;
    document.getElementById('editBTN').disabled = true;
    document.getElementById('continueBTN').disabled = true;

    let liElements = document.querySelectorAll('ul li');
    let info = Array.from(liElements);

    info.forEach(e => {
      let content = e.textContent
      if (content.includes('Full Name')) {
        substring = 'Full Name: ';
        content = content.replace(substring, '');
        document.getElementById('fname').value = content;
      }
      if (content.includes('Email')) {
        substring = 'Email: ';
        content = content.replace(substring, '');
        document.getElementById('email').value = content;
      }
      if (content.includes('Phone Number')) {
        substring = 'Phone Number: ';
        content = content.replace(substring, '');
        document.getElementById('phone').value = content;
      }
      if (content.includes('Address')) {
        substring = 'Address: ';
        content = content.replace(substring, '');
        document.getElementById('address').value = content;
      }
      if (content.includes('Postal Code')) {
        substring = 'Postal Code: ';
        content = content.replace(substring, '');
        document.getElementById('code').value = content;
      }
    });
    let listItems = e.target.parentElement.parentElement.querySelectorAll('li');
    for (li of listItems) {
      li.remove()
    }
    //for each element check if includes Full name, address etc and build an if-else if or switch case to bring back the info into the input fields
  }
  document.getElementById('continueBTN').addEventListener('click', continues);

  function continues(e) {
    let blockElement = document.getElementById('block');
    while (blockElement.firstChild) {
      blockElement.removeChild(blockElement.lastChild)
    };
    let hElement = document.createElement('h3');
    hElement.textContent = 'Thank you for your reservation!';
    blockElement.appendChild(hElement);
  }
}
