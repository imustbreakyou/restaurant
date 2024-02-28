import './style.css';
import menu from './menu.js';
import home from './home.js';
import contact from './contact.js';

console.log("index.js served!")
let content = document.getElementById("content");


function clearContent (element) {
  while (element.firstElementChild) {
    element.firstElementChild.remove()
  }
}


function renderHome() {
  clearContent(content)
  home();

}

function renderMenu() {
  clearContent(content)
  menu();

}

function renderContact() {
  clearContent(content)
  contact();

}

const homeNav = document.getElementById("nav-home");
homeNav.addEventListener('click', ()=>{
  renderHome();
})

const contactNav = document.getElementById("nav-contact");
contactNav.addEventListener('click', ()=>{
  renderContact();
})

const menuNav = document.getElementById("nav-menu");
menuNav.addEventListener('click', ()=>{
  renderMenu();
})




