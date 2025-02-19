
const createParagraph = () => {
    const para = document.createElement('p');
    para.textContent = 'the button was clicked'
    document.body.appendChild(para)
}

const buttons = document.querySelectorAll('button')
const textNode = document.createTextNode('Click me');

for (const button of buttons) {
    button.appendChild(textNode);
    button.addEventListener('click', createParagraph)
}
