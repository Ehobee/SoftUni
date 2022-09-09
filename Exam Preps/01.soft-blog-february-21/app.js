function solve() {

   let createButtonElement = document.querySelector('form button');

   createButtonElement.addEventListener('click', createArticle);

   function createArticle(e) {
      e.preventDefault();

      let creatorElement = document.getElementById('creator');
      let titleElement = document.getElementById('title');
      let categoreyElement = document.getElementById('category');
      let contentElement = document.getElementById('content');

      // if (!creatorElement.value || !titleElement.value || !categoreyElement.value || !contentElement.value) {
      //   return;
      //  }

      let articlesSectionElement = document.querySelector('main section'); //articles to be append here

      //create elements

      let articleElement = document.createElement('article');
      let h1Element = document.createElement('h1');
      let p1Element = document.createElement('p');
      let p2Element = document.createElement('p');
      let p3Element = document.createElement('p');

      h1Element.textContent = titleElement.value;
      p1Element.innerHTML = `Category: <strong>${categoreyElement.value}</strong`;
      p2Element.innerHTML = `Creator: <strong>${creatorElement.value}</strong`;
      p3Element.textContent = contentElement.value;

      articleElement.appendChild(h1Element);
      articleElement.appendChild(p1Element);
      articleElement.appendChild(p2Element);
      articleElement.appendChild(p3Element);

      articlesSectionElement.appendChild(articleElement);

      let buttonsDivElement = document.createElement('div');
      buttonsDivElement.className = 'buttons';

      let deleteButton = document.createElement('button');
      let archiveButton = document.createElement('button');

      let archiveSectionElement = document.querySelector('.archive-section ol');
      archiveButton.addEventListener('click', (e) => {
         let liElement = document.createElement('li');
         liElement.textContent = e.currentTarget.parentNode.parentNode.querySelector('h1').textContent
         archiveSectionElement.appendChild(liElement)

         Array.from(archiveSectionElement.getElementsByTagName("li"))
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(li => archiveSectionElement.appendChild(li));

         articleElement.remove();
      })

      deleteButton.addEventListener('click', () => {
         articleElement.remove();
      })

      deleteButton.className = 'btn delete';
      deleteButton.textContent = 'Delete';
      archiveButton.className = 'btn archive';
      archiveButton.textContent = 'Archive';

      buttonsDivElement.appendChild(deleteButton);
      buttonsDivElement.appendChild(archiveButton);
      articleElement.appendChild(buttonsDivElement);
   }
}
