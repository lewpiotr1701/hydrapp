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

if (glassCounter) {
    glassCounter.innerHTML = currentGlassCounter;
}

if (addButton) {
    addButton.addEventListener('click', () => {
        currentGlassCounter++;
        localStorage.setItem(key, currentGlassCounter);
        glassCounter.innerHTML = currentGlassCounter;
    })
}

if (deleteButton) {
    deleteButton.addEventListener('click', () => {
        if (currentGlassCounter > 0) {
            currentGlassCounter--;
            localStorage.setItem(key, currentGlassCounter);
            glassCounter.innerHTML = currentGlassCounter;
        }
    })
}


// Hamburger menu
const hamburger = document.querySelector('.hamburger--js');
const navbarMenu = document.querySelector('.navbar__menu--js');

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle('active');
    navbarMenu.classList.toggle('active');
}

const navbarLink = document.querySelectorAll('.navbar__link--js');

navbarLink.forEach(e => e.addEventListener('click', closeMenu));

function closeMenu() {
    hamburger.classList.remove('active');
    navbarMenu.classList.remove('active');
}
