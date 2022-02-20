const sectionImage = ["001.jpeg", "002.jpeg", "003.jpeg", "004.jpeg", "005.jpeg", "006.jpeg", "007.jpeg"];

let imageNumber = Math.floor(Math.random() * sectionImage.length);

const chosenImage = sectionImage[imageNumber];
const backgroundImage = document.createElement("img");
backgroundImage.src = `img/${chosenImage}`;
const section = document.querySelector("section");
section.appendChild(backgroundImage);