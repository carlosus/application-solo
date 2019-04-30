import getOrderEntry from './order-entry.js';

// reference needed dom nodes
const form = document.getElementById('order-entry');

//main event listener
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    console.log(getOrderEntry(formData));
});