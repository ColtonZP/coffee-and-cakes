const coffees = document.querySelector('.coffees');
const bagCountDOM = document.querySelector('#bagCount');

let bag = [];
let bagCount = localStorage.getItem("itemCount");

function updateBag() {
  if (!bagCount) {
    bagCount = 0;
  }
  bagCountDOM.innerHTML = bagCount;
  localStorage.setItem("itemCount", bagCount);
}

updateBag();

coffees.addEventListener('click', (event) => {
  console.log(event.target.parent);
  if (event.target.className === 'add' || event.target.parentElement.className === 'add') {
    bagCount++;
    bag.push("coffee" + bagCount);
    localStorage.setItem("items", bag);
    updateBag();
  }
});