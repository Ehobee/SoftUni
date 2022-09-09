function create(words) {
   let inputElements = words;
   let mainElement = document.getElementById('content');

   function onClickDisplayListener(e) {
      e.currentTarget.firstChild.style.display = 'block';
   };

   inputElements.forEach((element) => {
      let divToCreate = document.createElement('div');
      let paragraphToCreate = document.createElement('p');
      paragraphToCreate.style.display = 'none';

      paragraphToCreate.textContent = element;

      divToCreate.addEventListener('click', onClickDisplayListener);
      divToCreate.appendChild(paragraphToCreate);
      mainElement.appendChild(divToCreate);
   });
}