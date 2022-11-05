import {Validator} from "./validator.js";
import {correctQuotes} from "./quotes.js";

const quotesBtn = document.querySelector(".btn#quotes");
quotesBtn.addEventListener('click', correctQuotes);

let validator = new Validator();
window.validator = validator


//const email = document.querySelector("#email");
//email.addEventListener("input", validator.validateElem(email));

//const name = document.querySelector("#name");
//name.addEventListener("input", validator.validateElem);

//const tel = document.querySelector("#tel");
//tel.addEventListener("input", validator.validateElem(tel));
console.log(validator)
