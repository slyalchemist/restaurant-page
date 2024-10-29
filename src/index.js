//index.js
import "./styles.css";
import { greeting } from "./greetings.js";
import { menuConstruct } from "./menuConstruct.js";
import { contactConstruct } from "./contactConstruct.js";
import { homeConstruct } from "./homeConstruct.js";

console.log(greeting);

const content = document.getElementById("content");
const home = document.getElementById("home");
const menu = document.getElementById("menu");
const contact = document.getElementById("contact");

homeConstruct();

home.addEventListener("click", homeConstruct);
menu.addEventListener("click", menuConstruct);
contact.addEventListener("click", contactConstruct);

function tempTest() {
    console.log("Eureka!");
}