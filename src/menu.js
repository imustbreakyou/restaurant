import './style.css';
console.log("menu.js served!")

function renderMenu() {

let content = document.getElementById("content");
console.log({content});

// append container to content
const menuContainer = document.createElement("div");
menuContainer.classList.add("menu-container"); // Assuming you intended to name it "menu-container"
content.appendChild(menuContainer);
console.log({menuContainer});

// append menu to container
const menu = document.createElement("div");
menu.classList.add("menu-info"); // Corrected class name
menuContainer.appendChild(menu);
console.log({menu});

// Create and Append H1
const menuTitle = document.createElement("h1");
menuTitle.textContent = "Menu";
menu.appendChild(menuTitle);

// Create and Append First Description Text
const sevenCourse = document.createElement("h3");
sevenCourse.textContent = "7 Course Prix Fixe"; // Corrected to set textContent
menu.appendChild(sevenCourse);

const sevenCoursePrice = document.createElement("h4");
sevenCoursePrice.textContent = "$400.00";
menu.appendChild(sevenCoursePrice);

// Create and Append BR
let space = document.createElement("br");
menu.appendChild(space);

const fiveCourse = document.createElement("h3");
fiveCourse.textContent = "5 Course Prix Fixe";
menu.appendChild(fiveCourse);

const fiveCoursePrice = document.createElement("h4");
fiveCoursePrice.textContent = "$355.00";
menu.appendChild(fiveCoursePrice);

// Create and Append imageContainer to menuContainer
const imageContainer = document.createElement("div");
imageContainer.id = 'menu-image-container';
menuContainer.appendChild(imageContainer);

// Create and append menuImage to imageContainer
const menuImage = document.createElement("div");
menuImage.id = "menu-image";
imageContainer.appendChild(menuImage);

}