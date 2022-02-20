const topArray = ["#ffafbd","#2193b0","#cc2b5e","#de6262","#eecda3","#eacda3","#ddd6f3","#43cea2"];
const bottomArray = ["#ffc3a0", "#6dd5ed", "#753a88", "#ffb88c", "#ef629f", "#d6ae7b","faaca8","#185a9d"];

let rdnum = Math.floor(Math.random() * topArray.length);

const topColor = topArray[rdnum];
const bottomColor = bottomArray[rdnum];

const body = document.querySelector("body");

body.style.backgroundImage = `linear-gradient(${topColor},${bottomColor})`;