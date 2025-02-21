const myLists = document.querySelector('#myLists');

const totalCost = document.createElement('p');

const itemNeeded = 'shoe:15000, Boxer:12000, gas:98000, wardrobe:80000, bed:220000, car:4000000, land:2000000, fridge:300000, funiture:200000, houserent:450000, villagehose:2000000';
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
const button = document.createElement('button')
button.textContent = 'Add More'


const update = () => {
    const name = prompt('Enter item')
    const price = prompt('Enter price') 
    const product = name + ':' + price;
    items.push(product);
    const [a, b] = items[items.length-1].split(':')

    const list = document.createElement('li')
    list.textContent = `${a.toUpperCase()} -- ${price}`
    myLists.appendChild(list)
    total += Number(b)
    totalCost.textContent = `Total -- ${total}`;
}
button.addEventListener('click', update);
document.body.appendChild(button)