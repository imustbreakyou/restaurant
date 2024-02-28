import './style.css';
import { menu } from './menu.js';
import { home } from './home.js';
import { contact } from './contact.js';

console.log("index.js served!")
const content = document.getElementById("content");


const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#contact");

home();

homeBtn.addEventListener("click", () => {
  content.innerHTML ='';
  home();
});

aboutBtn.addEventListener("click", () => {
  content.innerHTML ='';
  contact();
});

menuBtn.addEventListener("click", () => {
  content.innerHTML ='';
  menu();
});

