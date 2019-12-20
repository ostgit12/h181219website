//Func buy for topProductList
const topProductList = document.querySelector('.topproduct-list');


topProductList.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }
    
    let objData = {};


    if (typeof(Storage) !== "undefined") {


        if (localStorage.clickcount) {

            localStorage.clickcount = Number(localStorage.clickcount) + 1;
            
            objData.name = "water";
            objData.quantity = 12;
            objData.color = "red"; 
            objData.sale = 0;
            objData.price = 10;
            objData.salePrice = (objData.sale === 0 ? objData.price * objData.quantity : ((objData.price * objData.quantity * objData.sale) / 100));

        
           var mylist = JSON.parse(localStorage['mylist']);

            mylist.push(objData);
            localStorage['mylist'] = JSON.stringify(mylist);
            alert("product added to shopList");

} else {

            localStorage.clickcount = 1;

            objData.name = "water";
            objData.quantity = 12;
            objData.color = "red"; 
            objData.sale = 0;
            objData.price = 10;
            objData.salePrice = (objData.sale === 0 ? objData.price * objData.quantity : ((objData.price * objData.quantity * objData.sale) / 100));
            
            
            localStorage['mylist'] = JSON.stringify([objData]);
            alert("product added to shopList");
    

} //else if First Time

}//end if typeOf

  console.dir(event.target.id);
})



//Func for bottomProductList

const bottomProductList = document.querySelector('.bottomproduct-list');


bottomProductList.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }
    
    let objData = {};


    if (typeof(Storage) !== "undefined") {

         if (localStorage.clickcount) {
 
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
            
            
            objData.name = "water";
            objData.quantity = 12;
            objData.color = "red"; 
            objData.sale = 0;
            objData.price = 10;
            objData.salePrice = (objData.sale === 0 ? objData.price * objData.quantity : ((objData.price * objData.quantity * objData.sale) / 100));
        
           var mylist = JSON.parse(localStorage['mylist']);

            mylist.push(objData);
            localStorage['mylist'] = JSON.stringify(mylist);
            alert("product added to shopList");

} else {
            localStorage.clickcount = 1;
            
            alert("localStorage= " + localStorage.clickcount);

            objData.name = "water";
            objData.quantity = 12;
            objData.color = "red"; 
            objData.sale = 0;
            objData.price = 10;
            objData.salePrice = (objData.sale === 0 ? objData.price * objData.quantity : ((objData.price * objData.quantity * objData.sale) / 100));
    

            localStorage['mylist'] = JSON.stringify([objData]);
            alert("product added to shopList");

} //else if First Time

}//end if typeOf
    
  console.dir(event.target.id);
})