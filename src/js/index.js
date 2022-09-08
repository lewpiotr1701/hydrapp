import '../scss/main.scss';

// uncomment the lines below to enable PWA
import { registerSW } from './pwa.js';
registerSW();

/* place your code below */

const glassCounter = document.querySelector('.counter--js');
const addButton = document.querySelector('.add--js');
const deleteButton = document.querySelector('.delete--js');

const key = new Date().toLocaleString().slice(0, 10);
const localStorageValue = localStorage.getItem(key);

let currentGlassCounter = 0;


// Check every time the page is refreshed
if (localStorageValue) {
    currentGlassCounter = parseInt(localStorageValue);
} else {
    localStorage.setItem(key, 0);
}

glassCounter.innerHTML = currentGlassCounter;


addButton.addEventListener('click', () => {
    currentGlassCounter++;
    localStorage.setItem(key, currentGlassCounter);
    glassCounter.innerHTML = currentGlassCounter;
})

deleteButton.addEventListener('click', () => {
    if (currentGlassCounter > 0) {
        currentGlassCounter--;
        localStorage.setItem(key, currentGlassCounter);
        glassCounter.innerHTML = currentGlassCounter;
    }
})
