console.log("Hello world")
const double = x => x* 2;
console.log(double(30));
console.log(double(30), typeof(double));

const person =  {name: "francis", age: 30, gender: "Male"}
console.log(typeof(person))
a = [person, double];
a.push(23)
console.log(a[2])
console.log(a[1](22) + 10)
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello alx_backend_javascript, Where hard things are done'
const multiply = (x, y) => x*y;
a.push(multiply)
console.log(a[3](9,3))

const myImage = document.querySelector('img');
const descriptor = document.getElementById('image')
myImage.addEventListener('click', () => {
    const mySrc = myImage.getAttribute('src');
    if (mySrc === "images/js_img_1.png") {
        myImage.setAttribute('src', "images/js_img_2.png");
        descriptor.textContent = ''
    } else if (mySrc === "images/js_img_2.png") {
        myImage.setAttribute('src', "images/css_img_1.png");
        descriptor.textContent = 'Cascading style sheet';
    } else if (mySrc === "images/css_img_1.png") {
        myImage.setAttribute('src', "images/css_img_2.png");
        descriptor.textContent = ''
    }
     else if (mySrc === "images/css_img_2.png") {
        myImage.setAttribute('src', "images/html_img_1.png");
        descriptor.textContent = 'Hypertext Markup Language'
    } else if (mySrc === "images/html_img_1.png") {
        myImage.setAttribute('src', "images/html_img_2.png");
        descriptor.textContent = ''
    } else {
        myImage.setAttribute('src', "images/js_img_1.png");
        descriptor.textContent = 'JavaScript Language'
    }
})

const button = document.getElementById("user")
const name = document.querySelector('h2')
const setUserName = () => {
    const myName = prompt('Please Enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        name.textContent = `You're welcome, ${myName}, to where you will really do hard things 😎😎`
    }
}
if (!localStorage.getItem('name')) {
    setUserName()
} else {
    const storedName = localStorage.getItem('name')
    name.textContent = `You're welcome, ${storedName}, to where you will really do hard things 😎😎`
}

button.addEventListener('click', () => setUserName());
const bgButton = document.createElement('button');
bgButton.appendChild(document.createTextNode('Change Background'));
const bg = document.querySelector('body');
bg.style.backgroundColor = 'white'
// myHeading.style.color = 'black'
document.body.appendChild(bgButton)
bgButton.addEventListener('click', () => {
    if (bg.style.backgroundColor === 'white') {
        bg.style.backgroundColor = 'black'
        bg.style.color = 'white'
        bgButton.textContent = 'white'
        // myHeading.style.color = 'white'
    } else {
        bg.style.backgroundColor = 'white'
        bg.style.color = 'black'
        bgButton.textContent = 'black'
    }
})