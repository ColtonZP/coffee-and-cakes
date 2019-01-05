const coffees = document.querySelector('.coffees');
const bagCountDOM = document.querySelector('#bagCount');

let bag = JSON.parse(localStorage.getItem('items'));
let bagCount = localStorage.getItem('itemCount');

function updateBag() {
  if (!bagCount) {
    bagCount = 0;
  }
  bagCountDOM.innerHTML = bagCount;
  localStorage.setItem("itemCount", bagCount);
}

updateBag();

coffees.addEventListener('click', (event) => {
  let target = event.target;
  if (target.className === 'add' || target.parentElement.className === 'add') {
    if (!bag) {
      bag = [];
    }
    if (target.parentElement.className === 'add') {
      target = target.parentElement;
    }
    bagCount++;
    bag.push({'img': target.parentElement.querySelector('img').src, 'name' : target.parentElement.querySelector('.name').innerHTML, 'price' : Number(target.parentElement.querySelector('.price').innerHTML.substring(7, 11))});
    localStorage.setItem('items', JSON.stringify(bag));
    updateBag();
  }
});