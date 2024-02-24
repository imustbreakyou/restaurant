import './style.css';
console.log("index.js served!")



  let content = document.getElementById("content");
  console.log( {content} );

  // append container to content
  const container = document.createElement("div");
  container.classList.add("container");
  content.appendChild(container);
  console.log( {container} );

  // append center-container to content
  const centerContainer = document.createElement("div");
  centerContainer.classList.add("center-container");
  content.appendChild(centerContainer);
  console.log( {centerContainer} );

  // Append Center to center-container
  const center = document.createElement("div");
  center.classList.add("center");
  centerContainer.appendChild(center);
  console.log( {center} );


   // Create and Append H1

   const title = document.createElement("h1");
   title.id = 'title'; 
   title.textContent = "Oak & Ember";
   center.appendChild(title);

  // Create and Append First Descripto Text
 
   const firstText = document.createElement("h4");
   firstText.id = 'first-text';
   firstText.textContent = "American cuisine with an emphasis on seasonal and locally sourced ingredients. Our menu features a mix of artisanal meats, sustainable seafood, and fresh produce, prepared to highlight their natural flavors. ";
   center.appendChild(firstText);
   
  // Create and Append BR
  let space = document.createElement("br");
  center.appendChild(space);


  // Create and Append First Descripto Text
  const secondText = document.createElement("h4");
  secondText.id = 'second-text';
  secondText.textContent = "Oak & Ember&apos;s dedication to local sourcing and seasonal ingredients enriches every meal with exceptional flavors, connecting diners to the land and celebrating the seasons. Our philosophy ensures a dining experience that&apos;s both delicious and meaningful, bringing the essence of America&apos;s heartland to each dish.";
  center.appendChild(secondText);
  


  /*

  We need to import Menu from Menu.js

  we need to import Contact from Contact.js

  home.addEventListener('click', () => {
    scriptsrc = /menu.js
    clearPage()
    loadPage(home)

  });



  menu.addEventListener('click', () => {
    scriptsrc = /menu.js
    clearPage()
    loadPage(menu)

  });


  contact.addEventListener('click', () => {
    if module = active;
      return;
    else {
      clearPage();
      loadPage(contact);

    };
  });

  scriptsrc = contact

  */




