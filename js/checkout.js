///////////////////
/*
function CalcPrice(itmPrice, itmQuantity, itmDiscount){
    
    if(itemDiscount.value === itmDiscount)
        return itmPrice * itmQuantity;
    else if(itemDiscount.value === itmDiscount)
    return ((itmQuantity * itemPrice *50)/100);
    else if(itemDiscount.value === itmDiscount)
    return ((itmQuantity * itemPrice *25)/100);
    else if(itemDiscount.value === itmDiscount)
    return ((itmQuantity * itemPrice *10)/100);
    
}
*/
//////////////

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
    
    
    
    
  let fullPrice = 0;
    
    
    function CalcPrice(itmPrice, itmQuantity, itmDiscount){
      const itemOff = document.querySelector('.discount');
    
    if(itemOff.value === itmDiscount)
        return itmPrice * itmQuantity;
    else if(itemDiscount.value === itmDiscount)
    return ((itmQuantity * itemPrice *50)/100);
    else if(itemDiscount.value === itmDiscount)
    return ((itmQuantity * itemPrice *25)/100);
    else if(itemDiscount.value === itmDiscount)
    return ((itmQuantity * itemPrice *10)/100);
    
}
      
// ((itemPrice.value*rngValue.value*itemDiscount.value)/100);
    
   
  
    
    
  let myItem = itemTxt.value
  +" (quantity: "+rngValue.value
  +", colour: "+itemColor.value
  +", price: $"+(itemDiscount.value === "0"?itemPrice.value*rngValue.value:((itemPrice.value*rngValue.value*itemDiscount.value)/100))
  
  
  //(itemPrice.value*rngValue.value*itemDiscount.value)/100
  +", discount: "+itemDiscount.value+"% Off"
  //+" fullPrice: "
  //+(itemPrice.value*rngValue.value*itemDiscount.value)/100
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