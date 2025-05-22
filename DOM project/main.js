const list = document.querySelector(".list");
const priceList = document.querySelector(".priceList");

const menuField = document.querySelector(".menuField");
const price = document.querySelector(".price");

const click = document.querySelector(".click");

click.addEventListener('click', function(){
//Create new Li tag
const newLi = document.createElement("LI");
const priceLi = document.createElement("LI");
//get the values of input
const liContent = document.createTextNode(menuField.value);
const priceContent = document.createTextNode(price.value);

//add the input to the new Li
newLi.appendChild(liContent);
priceLi.appendChild(priceContent);

//Attach the li to the menu list
list.appendChild(newLi);
priceList.appendChild(priceLi);





})