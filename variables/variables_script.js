// const document = new Document()
// document.appendChild(document.createElement('html'))
// const html = document.querySelector('html')
//end here to make more references via other resources on how to go about running a script ouside html 

const button = document.querySelector('#button');
const subHeader = document.querySelector('#subHeading');

//this next line of code will do something with the button when is clicked by incrementing the count it was clicked
let count = 1;
button.addEventListener('click', () => {
    
    subHeader.textContent = `the button was clicked ${count} times`
    count++;
    button.textContent = 'Try again'
})