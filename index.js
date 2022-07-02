// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var categoryItems = document.querySelectorAll('[data-category-group]');
var categoryItemsArray = Array.from(categoryItems);

let sorted = categoryItemsArray.sort(sorter);

function sorter(a, b) {
  return a.dataset.categoryGroup.localeCompare(b.dataset.categoryGroup); // sorts based on alphabetical order
}

document.querySelector('button').onclick = () =>
  sorted.forEach((e) => document.querySelector('#demo').appendChild(e));

let j = 30;
let IsRefAvail = document.querySelectorAll(`a.xref[rid*="${j}"]`).length != 0;
console.log(IsRefAvail);
