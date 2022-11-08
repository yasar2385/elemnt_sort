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

var ARRAY_DEMO = [
  {
    Original_lab: 'Figure 5',
    Original_Id: 'F5',
    Seq_No: '5',
  },
  {
    Original_lab: 'Figure 1:',
    Original_Id: 'F1',
    Seq_No: '1:',
  },
  {
    Original_lab: 'Figure 2:',
    Original_Id: 'F2',
    Seq_No: '2:',
  },
  {
    Original_lab: 'Figure 3:',
    Original_Id: 'F3',
    Seq_No: '3:',
  },
  {
    Original_lab: 'Figure 4:',
    Original_Id: 'F4',
    Seq_No: '4:',
  },
];

var ARRAY_DEMO_1 = [
  {
    Original_lab: 'Figure 1.',
    Original_Id: 'F1',
    Seq_No: '1.',
  },
  {
    Original_lab: 'Figure 10',
    Original_Id: 'F10',
    Seq_No: '10',
  },
  {
    Original_lab: 'Figure 2.',
    Original_Id: 'F2',
    Seq_No: '2.',
  },
  {
    Original_lab: 'Figure 3.',
    Original_Id: 'F3',
    Seq_No: '3.',
  },
  {
    Original_lab: 'Figure 4.',
    Original_Id: 'F4',
    Seq_No: '4.',
  },
  {
    Original_lab: 'Figure 5.',
    Original_Id: 'F5',
    Seq_No: '5.',
  },
  {
    Original_lab: 'Figure 6.',
    Original_Id: 'F6',
    Seq_No: '6.',
  },
  {
    Original_lab: 'Figure 7.',
    Original_Id: 'F7',
    Seq_No: '7.',
  },
  {
    Original_lab: 'Figure 8.',
    Original_Id: 'F8',
    Seq_No: '8.',
  },
  {
    Original_lab: 'Figure 9.',
    Original_Id: 'F9',
    Seq_No: '9.',
  },
];
ARRAY_DEMO.sort(function (a, b) {
  if (a.Seq_No > b.Seq_No) return 1;
  if (a.Seq_No < b.Seq_No) return -1;
  return 0;
});
//console.log(ARRAY_DEMO);
console.log(ARRAY_DEMO_1);
console.log(Object.keys(ARRAY_DEMO_1))

console.log('4.ssd1ss:'.replace(/\D/g, ''))
console.log('4:'.replace(/\d/g, ''))