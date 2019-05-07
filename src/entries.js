//import our utility object for getting data
import orderEntryApi from './entry-api.js';

//reference all the DOM elements we need to update
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const size = document.getElementById('size');
const color = document.getElementById('color');
const softness = document.getElementById('softness');
const features = document.getElementById('features');

// get the applicant name
const searchParams = new URLSearchParams(window.location.search);
const orderName = searchParams.get('first-name');

//get our applicant from the api
const orderEntry = orderEntryApi.get(orderName);

// no applicant? head back to home page...
if(!orderEntry) {
    window.location = './';
}

// mediate data into the element
firstName.textContent = orderEntry.firstName;
lastName.textContent = orderEntry.lastName;
size.textContent = orderEntry.size;
color.textContent = orderEntry.color;
softness.textContent = orderEntry.softnessNumber;
if(orderEntry.features) {
    features.textContent = orderEntry.features.join(', ');
}