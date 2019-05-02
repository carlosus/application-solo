import getOrderEntry from './order-entry.js';
import orderEntryApi from './entry-api.js';

// reference needed dom nodes
const form = document.getElementById('order-entry');

//main event listener
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const orderEntry = getOrderEntry(formData);
    orderEntryApi.save(orderEntry);
});