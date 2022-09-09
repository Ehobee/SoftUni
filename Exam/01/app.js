function solve() {

    let hireWorkerButtonElement = document.getElementById('add-worker');
    hireWorkerButtonElement.addEventListener('click', addWorker);

    function addWorker(e) {
        e.preventDefault();

        let firstNameEl = document.getElementById('fname');
        let lastNameEl = document.getElementById('lname');
        let emailEl = document.getElementById('email');
        let birthDateEl = document.getElementById('birth');
        let positionEl = document.getElementById('position');
        let salaryEl = document.getElementById('salary');

        if (!firstNameEl.value || !lastNameEl.value || !emailEl.value || !birthDateEl.value || !positionEl.value || !salaryEl.value) {
            return;
        };

        let name = firstNameEl.value;
        let lname = lastNameEl.value;
        let email = emailEl.value;
        let birth = birthDateEl.value;
        let position = positionEl.value;
        let salary = salaryEl.value;

        let collection = [name, lname, email, birth, position, salary];
        let sum = Number(document.getElementById('sum').textContent);
        sum += Number(salary);
        document.getElementById('sum').textContent = sum.toFixed(2);

        let tableContentElement = document.getElementById('tbody');
        let tableRow = document.createElement('tr');
        let buttons = document.createElement('td');

        let firedButton = document.createElement('button');
        firedButton.className = 'fired';
        firedButton.textContent = 'Fired';
        firedButton.addEventListener('click', (e) => {
            tableRow.remove();
            let salaryNumber = Number(e.currentTarget.parentNode.parentNode.querySelector(':nth-child(6)').textContent);
            sum -= salaryNumber;
            document.getElementById('sum').textContent = sum.toFixed(2);
        });

        let editButton = document.createElement('button');
        editButton.className = 'edit';
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', (e) => {
            tableRow.remove();
            let salaryNumber = Number(e.currentTarget.parentNode.parentNode.querySelector(':nth-child(6)').textContent);
            sum -= salaryNumber;
            document.getElementById('sum').textContent = sum.toFixed(2);

            let nameString = e.currentTarget.parentNode.parentNode.querySelector(':nth-child(1)').textContent;
            let lnameString = e.currentTarget.parentNode.parentNode.querySelector(':nth-child(2)').textContent;
            let emailString = e.currentTarget.parentNode.parentNode.querySelector(':nth-child(3)').textContent;
            let birthString = e.currentTarget.parentNode.parentNode.querySelector(':nth-child(4)').textContent;
            let positionString = e.currentTarget.parentNode.parentNode.querySelector(':nth-child(5)').textContent;

            document.getElementById('fname').value = nameString;
            document.getElementById('lname').value = lnameString;
            document.getElementById('email').value = emailString;
            document.getElementById('birth').value = birthString;
            document.getElementById('position').value = positionString;
            document.getElementById('salary').value = salaryNumber;
        })


        buttons.appendChild(firedButton);
        buttons.appendChild(editButton);

        collection.forEach((el) => {
            let td = document.createElement('td');
            td.textContent = el;
            tableRow.appendChild(td)
        });

        tableRow.appendChild(buttons);
        tableContentElement.appendChild(tableRow);

        firstNameEl = document.getElementById('fname').value = '';
        lastNameEl = document.getElementById('lname').value = '';
        emailEl = document.getElementById('email').value = '';
        birthDateEl = document.getElementById('birth').value = '';
        positionEl = document.getElementById('position').value = '';
        salaryEl = document.getElementById('salary').value = '';

    }
}
solve()