window.addEventListener('load', solve);

function solve() {

    let divContainerElement = document.querySelector('.all-hits-container');

    let addButtonElement = document.getElementById('add-btn');
    addButtonElement.addEventListener('click', (e) => {
        e.preventDefault();

        let inputGenreElement = document.querySelector('input[name="genre"]');
        let inputNameElement = document.querySelector('input[name="name"]');
        let inputAuthorElement = document.querySelector('input[name="author"]');
        let inputDateElement = document.querySelector('input[name="date"]');

        if (!inputGenreElement.value || !inputNameElement.value || !inputAuthorElement.value || !inputDateElement.value) {
            return;
        };


        let songCollectionDivElement = document.createElement('div');
        songCollectionDivElement.classList.add('hits-info');

        //create Collection Div
        let imgElement = document.createElement('img');
        imgElement.src = './static/img/img.png';
        songCollectionDivElement.appendChild(imgElement);

        let genre = inputGenreElement.value;
        let name = inputNameElement.value;
        let author = inputAuthorElement.value;
        let date = inputDateElement.value;

        let collection = [{ 'Genre': genre }, { 'Name': name }, { 'Author': author }];

        collection.forEach(e => {
            let headerTwoElement = document.createElement('h2');
            songCollectionDivElement.appendChild(headerTwoElement);
            Object.keys(e).forEach((key) => {
                let content = `${key}: ${e[key]}`;
                headerTwoElement.textContent = content;
            });
        });

        let headerThree = document.createElement('h3');
        songCollectionDivElement.appendChild(headerThree);
        headerThree.textContent = `Date: ${date}`;

        let saveButtonElement = document.createElement('button');
        saveButtonElement.classList.add('save-btn');
        saveButtonElement.textContent = 'Save song';
        songCollectionDivElement.appendChild(saveButtonElement);
        let likeButtonElement = document.createElement('button');
        likeButtonElement.classList.add('like-btn');
        likeButtonElement.textContent = 'Like song';
        songCollectionDivElement.appendChild(likeButtonElement);
        let deleteButtonElement = document.createElement('button');
        deleteButtonElement.classList.add('delete-btn');
        deleteButtonElement.textContent = 'Delete';
        songCollectionDivElement.appendChild(deleteButtonElement);


        divContainerElement.appendChild(songCollectionDivElement);


        inputGenreElement.value = '';
        inputNameElement.value = '';
        inputAuthorElement.value = '';
        inputDateElement.value = '';

    });
    let counter = 0;
    //Like and save songs
    let allHitsElement = document.getElementById('wrapper');
    allHitsElement.addEventListener('click', actionOnSong);


    function actionOnSong(e) {
        e.preventDefault();

        let currTarget = e.target;
        let currTargetTextContent = e.target.textContent;



        if (currTargetTextContent == 'Like song') {
            counter++;
            let totalLikesElement = document.querySelector('#total-likes .likes p');
            totalLikesElement.textContent = `Total Likes: ${counter}`;
            currTarget.disabled = true;
        } else if (currTargetTextContent == 'Save song') {
            let savedContainerElement = document.querySelector('.saved-container');
            let songInfo = document.querySelector('.hits-info');
            let likeButton = document.querySelector('.like-btn')
            let saveButton = document.querySelector('.save-btn')
            likeButton.parentNode.removeChild(likeButton);
            saveButton.parentNode.removeChild(saveButton);
            savedContainerElement.appendChild(songInfo);
        } else if (currTargetTextContent == 'Delete') {
            currTarget.parentNode.remove();
        }
    }
}

