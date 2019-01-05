const page = document.querySelector('.order');
const orderPage = document.querySelector('.orderPage');
const amount = document.querySelector('.amount');
const tax = document.querySelector('.tax');
const total = document.querySelector('.total');
const completeOrderWindow = document.querySelector('#completeOrderWindow');
const cvv = document.querySelector('.cvv');
const cardType = document.querySelector('#cardType');
const cardValue = completeOrderWindow.querySelector('.card');
const name = completeOrderWindow.querySelector('.name');

let coffee;
let orderItems;
let order;
let addedPrice = 0;

bagCountHTML = document.querySelector('#bagCount');
bag = JSON.parse(localStorage.getItem('items'));
bagCount = localStorage.getItem('itemCount');

const cards = [
  {type : 'visa',  number : /^(?:4[0-9]{12}(?:[0-9]{3})?)$/},
  {type : 'master', number : /^(?:5[1-5][0-9]{14})$/,},
  {type : 'amex', number : /^(?:3[47][0-9]{13})$/,},
  {type : 'discover', number : /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/}
]

showBag();

function addPrice(price) {
  addedPrice += price;
  amount.innerHTML = 'Amount: ' + addedPrice.toFixed(2);
  tax.innerHTML = 'Tax: ' + (addedPrice * .09).toFixed(2);
  total.innerHTML = 'Total: ' + (addedPrice * .09 + addedPrice).toFixed(2);
  completeOrderWindow.querySelector('.total').innerHTML = total.innerHTML;
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

function stopScroll() {
  window.scrollTo(0, 0);
}

function checkCard(cardInput) {
  let valid = false
  let type;
  for (i = 0; i < cards.length; i++) {
    if(cards[i].number.test(cardInput.value) === true) {
        type = cards[i].type;
        valid = true;
        break;
      } 
  }
  if (valid === true) {
    cardInput.style.borderColor = '#a8c5c1';
    cardType.innerHTML = type;
    cardType.className = 'cardType';
    return type;
  } else {
    cardInput.style.borderColor = '#f96161';
    return false;
  }
}

function checkCVV(type) {
  console.log(type);
  valid = false;
  if(type === 'amex' && cvv.value.length === 4) {
    cvv.style.borderColor = '#a8c5c1';
    valid = true;
    return valid;
  } else if(type !== 'amex' && cvv.value.length === 3 && type !== false) {
    cvv.style.borderColor = '#a8c5c1';
    valid = true;
    return valid;
  } else {
    cvv.style.borderColor = '#f96161';
    return valid;
  }
}

function checkName() {
  if (name.value !== '') {
    name.style.borderColor = '#a8c5c1';
    return true;
  } else {
    name.style.borderColor = '#f96161';
    return false;
  }
}

orderPage.parentNode.addEventListener('click', (event) => {
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
  } else if (event.target.className === 'completeOrder' && bag.length >= 1) {
    completeOrderWindow.className = '';
    window.addEventListener('scroll', stopScroll);
  } else if (event.target.className === 'completeEntireOrder') {
    if(checkCard(cardValue) && checkCVV(checkCard(cardValue)) && checkName()){
      completeOrderWindow.querySelector('.checkout').innerHTML = '<h3>Your order will be available for pick up in 15 minutes</h3><button class="done">Done</button>';
    }
  } else if (event.target.className ==='done') {
    completeOrderWindow.className = 'nodisplay';
    localStorage.clear();
    location.reload();
  }
});

cardValue.addEventListener('input', (event) => {
  checkCard(cardValue);
});

cvv.addEventListener('input', (event) => {
  console.log(checkCVV(checkCard(cardValue)));
  checkCVV(checkCard(cardValue));
});