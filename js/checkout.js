const list = document.querySelector('ol');
const input = document.querySelector('input');
const button = document.querySelector('button');

const newItem = document.querySelector('.addItem');

newItem.addEventListener('click', addNewItem);

function addNewItem() {
  const itemTxt = document.querySelector('.itemTxt');
  const rngValue = document.querySelector('.rngBar');
  const itemColor = document.querySelector('.color');
  const itemPrice = document.querySelector('.itemPrice');
  const itemDiscount = document.querySelector('.discount');
    
  let myItem = itemTxt.value
  +" (quantity: "+rngValue.value
  +", colour: "+itemColor.value
  +", price: $"+(itemDiscount.value === "0"?itemPrice.value*rngValue.value:((itemPrice.value*rngValue.value*itemDiscount.value)/100))
  +", sale: "+itemDiscount.value+"% Off"
  +")";
  itemTxt.value = '';


    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = 'Delete';
    list.appendChild(listItem);

    listBtn.onclick = function(e) {
        list.removeChild(listItem);
}
  input.focus();
  
}