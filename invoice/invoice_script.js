const myLists = document.querySelector('#myLists');

const totalCost = document.createElement('p');

const itemNeeded = 'shoe:15000, Boxer:12000, gas:98000, wardrobe:80000, bed:220000, fridge:300000, funiture:200000, houserent:450000, villagehose:2000000';
const items = itemNeeded.split(', ').sort();
let total = 0;
for (const item of items) {
    const [name, price] = item.split(':');
    const cprice = Number(price);
    total+=cprice;
    const listItem = document.createElement('li');
    listItem.textContent = `${name.toUpperCase()} -- ${price}`;
    myLists.appendChild(listItem);
}
totalCost.textContent = `Total -- ${total}`;
document.body.appendChild(totalCost);