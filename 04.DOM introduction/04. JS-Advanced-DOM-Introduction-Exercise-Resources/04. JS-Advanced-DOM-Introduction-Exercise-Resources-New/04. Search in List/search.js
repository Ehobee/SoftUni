function search() {
   let list = document.querySelectorAll('#towns li');
   //console.log(list)
   let search = document.getElementById('searchText').value;
   let result = document.getElementById('result');
   let counter = 0;

   for (let town of list) {
      let currentTown = town.textContent;
      if (currentTown.includes(search) && search!== '') {
         counter++;
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline'
      }
   }
   result.textContent = `${counter} matches`;

}
