function generateReport() {

    const checkboxElements = document.querySelectorAll('input[type=checkbox]');

    for (box of checkboxElements) {
        box.addEventListener('click', (e) => {
            console.log(e.currentTarget)
        });
    }

}