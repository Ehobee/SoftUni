window.addEventListener('load', solve);

function solve() {

    let addButtonElement = document.getElementById('add');
    addButtonElement.addEventListener('click', addProduct);

    function addProduct(e) {
        e.preventDefault();

        let furnitureListElement = document.getElementById('furniture-list');
        console.log(furnitureListElement)
        let model = document.querySelector('input[name="model"]').value;
        let year = document.querySelector('input[name="year"]').value;
        let description = document.querySelector('textarea[id="description"]').value;
        let price = Number(document.querySelector('input[name="price"]').value);

        if (!model || !year || !description || !price || Number(price) < 0 || Number(year) < 0) {
            return;
        }
        //Create and addElements into Info
        let trInfoElement = document.createElement('tr');
        trInfoElement.className = 'info';

        let tdModelElement = document.createElement('td');
        let tdPriceElement = document.createElement('td');

        tdModelElement.textContent = model;
        tdPriceElement.textContent = price.toFixed(2);

        let tdButtonsElement = document.createElement('td');
        let buyButton = document.createElement('button');
        let moreInfoButton = document.createElement('button');

        buyButton.textContent = 'Buy it';
        moreInfoButton.textContent = 'More Info';

        moreInfoButton.addEventListener('click', (e) => {
            if (e.currentTarget.textContent == 'More Info') {
                e.currentTarget.textContent = 'Less Info';
                hiddenTr.style.display = 'contents'
            } else {
                e.currentTarget.textContent = 'More Info';
                hiddenTr.style.display = 'none'
            }

        });

        buyButton.addEventListener('click', () => {
            let totalPrice = Number(document.querySelector('.total-price').textContent);
            totalPrice += price;
            document.querySelector('.total-price').textContent = totalPrice.toFixed(2);
            hiddenTr.remove();
            trInfoElement.remove();
           
        })

        buyButton.className = 'buyBtn';
        moreInfoButton.className = 'moreBtn';

        let hiddenTr = document.createElement('tr');
        hiddenTr.className = 'hide';

        let tdYear = document.createElement('td');
        let tdDescription = document.createElement('td');
        tdDescription.setAttribute('colspan', 3);
        tdYear.textContent = `Year: ${year}`;
        tdDescription.textContent = `Description: ${description}`;

        hiddenTr.appendChild(tdYear);
        hiddenTr.appendChild(tdDescription);


        tdButtonsElement.appendChild(moreInfoButton);
        tdButtonsElement.appendChild(buyButton);

        trInfoElement.appendChild(tdModelElement);
        trInfoElement.appendChild(tdPriceElement);
        trInfoElement.appendChild(tdButtonsElement);
        trInfoElement.appendChild(hiddenTr)

        furnitureListElement.appendChild(trInfoElement);

        document.querySelector('input[name="model"]').value = '';
        document.querySelector('input[name="year"]').value = '';
        document.querySelector('textarea[id="description"]').value = '';
        document.querySelector('input[name="price"]').value = '';
    }
}

//88/100
//https://pastebin.com/LyrsCazG

