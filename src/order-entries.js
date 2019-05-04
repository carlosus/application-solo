import orderEntryApi from './entry-api.js';

const tbody = document.getElementById('order-entries');

const orderEntries = orderEntryApi.getAll();
console.log(orderEntries, 'TEST');
for(let i = 0; i < orderEntries.length; i++) {
    const orderEntry = orderEntries[i];

    const tr = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = orderEntry.firstName;
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