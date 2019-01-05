const page = document.querySelector('.order');
const orderPage = document.querySelector('.orderPage');
const amount = document.querySelector('.amount');
const tax = document.querySelector('.tax');
const total = document.querySelector('.total');
const removeAll = document.querySelector('.removeAll');

let coffee;
let orderItems;
let order;
let addedPrice = 0;

bagCountHTML = document.querySelector('#bagCount');
bag = JSON.parse(localStorage.getItem('items'));
bagCount = localStorage.getItem('itemCount');

showBag();

function addPrice(price) {
  addedPrice += price;
  amount.innerHTML = 'Amount: ' + addedPrice.toFixed(2);
  tax.innerHTML = 'Tax: ' + (addedPrice * .09).toFixed(2);
  total.innerHTML = 'Total: ' + (addedPrice * .09 + addedPrice).toFixed(2);
}

function showBag() {
  if (bag === null || bag.length === 0) {
    order = '<h1>Empty</h1>'
    addPrice(0);
  } else {
    order = '<ul class="coffees orders">'
    for (let i = 0; i < bag.length; i++) {
      order += '<li><div class="coffee"><img class="coffeeImg" src="' + bag[i].img + '"><h3 class="name">' + bag[i].name + '</h3><p>' + bag[i].price +'</p><button class="remove">Remove Item</button></div></li>';
      addPrice(bag[i].price);
    }
    order += '</ul>'
  }
  page.innerHTML = order;
  coffee = document.querySelector('.coffees');
  orderItems = document.querySelectorAll('li');
}

function removeItem(index) {
  bag.splice(index, 1);
  localStorage.setItem('items', JSON.stringify(bag));
  bagCountDOM.innerHTML = bagCount;
  if (bagCount > 0) {
    bagCount--;
  }
  localStorage.setItem('itemCount', bagCount);
  addedPrice = 0;
  showBag();
}

orderPage.addEventListener('click', (event) => {
  console.log(orderItems);
  if (event.target.className === 'remove' || event.target.parentElement.className === 'remove') {
    for (let i = 0; i < orderItems.length; i++) {
      if (event.target.parentElement.parentElement == orderItems[i]) {
        removeItem(i);
      }
    }
  } else if (event.target.className === 'removeAll') {
    for (let i = orderItems.length; i >= 0; i--) {
      removeItem(i);
    }
  }
});
