import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const glassesCounter = document.querySelector('.glasses--js');
const addButton = document.querySelector('.add--js');
const deleteButton = document.querySelector('.delete--js');

let key = new Date().toISOString().slice(0, 10);
let currentValue = localStorage.getItem(key);
 
// Check every time the page is refreshed
if (currentValue === null) {
    localStorage.setItem(key, '0');
    glassesCounter.innerHTML = '0';
} else {
    glassesCounter.innerHTML = currentValue;
}


addButton.addEventListener('click', () => {
    currentValue = parseInt(localStorage.getItem(key));
    currentValue += 1;
    localStorage.setItem(key, currentValue.toString());
    glassesCounter.innerHTML = currentValue;
})

deleteButton.addEventListener('click', () => {
    currentValue = parseInt(localStorage.getItem(key));
    if (currentValue != 0) {
        currentValue -= 1;
        localStorage.setItem(key, currentValue.toString());
        glassesCounter.innerHTML = currentValue;
    }
})
