//create a h1 element and add to the page
const header = document.createElement('hi');
const para = document.createElement('p');
const button = document.createElement('button');
const unOrdered = document.createElement('ul');
const list = document.createElement('li');

header.textContent = 'My List of things to buy'.toUpperCase()
para.textContent = 'Click the button below to see the list'
document.body.appendChild(header)
document.body.appendChild(para)
