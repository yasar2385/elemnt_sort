// Import stylesheets
import './style.css';
import '~bootstrap/dist/css/bootstrap.min.css';

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
console.log(Object.keys(ARRAY_DEMO_1));

console.log('4.ssd1ss:'.replace(/\D/g, ''));
console.log('4DADadADadDadADad DdDad D:'.replace(/\d/g, ''));

let VALID_ID_IGNORE = function (id) {
  try {
    if (typeof id != 'string') id = id.id;
    return ![' ', '', 'null', 'undefined', null, undefined].includes(id);
  } catch (err) {
    console.warn(err.message);
    ErrorLogTrace('VALID_ID_IGNORE', err.message);
  }
};

let get_new_id = function (idx, dom) {
  try {
    idx++;
    let find = idx.toString().getBibId();
    while (dom.querySelector(`[id="${find}"]`)) {
      idx++;
      find = idx.toString().getBibId();
    }
    return {
      lab: idx,
      id: find,
    };
  } catch (err) {
    console.warn(err.message);
    ErrorLogTrace('get_new_id', err.message);
  }
};

function get_id(e) {
  try {
    let rValue = VALID_ID_IGNORE(e.id)
      ? e.id
      : e.hasAttribute('del_id')
      ? e.getAttribute('del_id')
      : /* e.hasAttribute('oid') ? e.getAttribute('oid') : */ '';
    //console.log(rValue);
    return rValue;
  } catch (err) {
    console.warn(err.message);
    ErrorLogTrace('get_id', err.message);
  }
}

function sorterd(a, b) {
  try {
    let [a_val, b_val] = [
      parseInt(get_id(a).replace(/\D/g, '')),
      parseInt(get_id(b).replace(/\D/g, '')),
    ];
    console.log([a_val, b_val]);
    if (a_val > b_val) return 1;
    if (a_val < b_val) return -1;
    return 0;
    // return a_val.localeCompare(b_val);
  } catch (err) {
    console.warn(err.message);
    ErrorLogTrace('sorter', err.message);
  }
}
var refSec = document.getElementById('r1');
var categoryItems = refSec.querySelectorAll('div.ref');
var categoryItemsArray = Array.from(categoryItems);
var sortedOne = categoryItemsArray.sort(sorterd);
console.log(sortedOne);
sortedOne.forEach(function (e) {
  refSec.appendChild(e);
});

function get_text(Item) {
  [].reduce.call(
    Item.childNodes,
    function (a, b) {
      return a + (b.nodeType === 3 ? b.textContent : '');
    },
    ''
  );
}

console.log(document.getElementsByTagName('span.TEX'));
//get_text(document.getElementsByTagName('insert'));
