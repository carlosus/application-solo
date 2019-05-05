import orderEntryApi from './entry-api.js';

const tbody = document.getElementById('order-entries');

const orderEntries = orderEntryApi.getAll();

for(let i = 0; i < orderEntries.length; i++) {
    const orderEntry = orderEntries[i];

    const tr = document.createElement('tr');

    // create the table cell
    const firstNameCell = document.createElement('td');
    // create the anchor link <a>
    const link = document.createElement('a');

    //create a seach params object
    const searchParams = new URLSearchParams();
    // set the name key with the orderEntry's name as the value
    searchParams.set('firstName', orderEntry.firstName);
    // use the formatted search string as the end of the link href
    // that goes to the detail page
    link.href = 'entries.html?' + searchParams.toString();

    // also use the orderEntry's name as the display text for the link
    link.textContent = orderEntry.firstName;
    // add the link to the firstName cell
    firstNameCell.appendChild(link);
    // add the firstName cell to the table row
    tr.appendChild(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = orderEntry.firstName;
    tr.appendChild(lastNameCell);

    const sizeCell = document.createElement('td');
    sizeCell.textContent = orderEntry.size;
    tr.appendChild(sizeCell);

    const colorCell = document.createElement('td');
    colorCell.textContent = orderEntry.color;
    tr.appendChild(colorCell);

    const softnessCell = document.createElement('td');
    softnessCell.textContent = orderEntry.softnessNumber;
    tr.appendChild(softnessCell);

    const featuresCell = document.createElement('td');
    let featuresList = '';
    if(orderEntry.features) {
        featuresList = orderEntry.features.join(', ');
    }
    featuresCell.textContent = featuresList;
    tr.appendChild(featuresCell);

    tbody.appendChild(tr);
}