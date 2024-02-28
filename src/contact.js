

import './style.css';
console.log("contact.js served!")

function renderContact() {
  let content = document.getElementById("content");
  console.log( {content} );

  // append container to content
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");
  content.appendChild(contactContainer);
  console.log( {contactContainer} );

  // append contact-info to container
  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contact-info");
  contactContainer.appendChild(contactInfo);
  console.log( {contactInfo} );

  // append map to container
  const map = document.createElement("div");
  map.id = "map";
  contactContainer.appendChild(map);
  console.log( {map} );



   // Create and Append H1

   const title = document.createElement("h1");
   title.textContent = "menu";
   contactInfo.appendChild(title);

  // Create and Append First Description Text
 
   const phone = document.createElement("h3");
   phone.textContent = "Phone";
   contactInfo.appendChild(phone);

   const phoneNumber = document.createElement("h4");;
   phoneNumber.textContent = "212-867-5309";
   contactInfo.appendChild(phoneNumber);

     // Create and Append BR
  const space = document.createElement("br");
  contactInfo.appendChild(space);

   
  const email = document.createElement("h3");
  email.textContent = "Email";
  contactInfo.appendChild(email);

  const emailAddress = document.createElement("h4");;
  emailAddress.textContent = "info@oakandember.com";
  contactInfo.appendChild(emailAddress);


  

  // Create and Append googleMap to Map
  const googleMap = document.createElement("div");
  googleMap.id = 'googleMap';
  map.appendChild(googleMap);
  

  // Create and iframe to googlMap to 
  const iframe = document.createElement("iframe");
  iframe.id = "iframe";
  iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.5844719783977!2d-73.9674781!3d40.749168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2591c5b5896d7%3A0x5b6f3d4edb00a068!2sUnited%20Nations%20Secretariat%20Building%2C%20405%20E%2042nd%20St%2C%20New%20York%2C%20NY%2010017!5e0!3m2!1sen!2sus!4v1709071700930!5m2!1sen!2sus';
  map.appendChild(iframe);
  
  
}