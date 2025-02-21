//create a h1 element and add to the page
const header = document.createElement('hi');
const para = document.createElement('p');
const button = document.createElement('button');
const unOrdered = document.createElement('ul');
const list = document.createElement('li');

header.textContent = 'My List of things to buy'.toUpperCase()
para.textContent = 'Click the button below to see the list'
button.textContent = 'See list'
document.body.appendChild(header)
document.body.appendChild(para)
document.body.appendChild(button)

const myList = 'beverage:30000, meat:5000, oil:3000, transport:4000 vegetable:1000, fruit:2000'
const myArray = myList.split(', ')
button.addEventListener('click', () => {
    myArray.forEach((item) => {
        const [name, price] = item.split(':');
        list.textContent = `${name} --- ${price}`
        unOrdered.appendChild(list)
    })
    document.body.insertBefore(unOrdered)
    button.textContent = ''
})
