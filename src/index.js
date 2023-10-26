import "./style.css";

import { navigationBar } from "./navbar";
import { initialPage, footer } from "./frontpage";
import { menuBar } from "./menu";
import { contact } from "./contact";

function mainPage() {
  const container = document.getElementById("content");
  container.style.width = "100vw";

  navigationBar();
  
  initialPage();
//   menuBar();
//   contact();
//   footer();
}

mainPage();


const homeButton = document.getElementById('0');
const menuButton = document.getElementById('1');
const contactButton = document.getElementById('2');

homeButton.addEventListener('click', function(){
    render();
    initialPage();
    initialPage();
    removeTab();
});

menuButton.addEventListener('click', function(){
    render();
    menuBar();
    removeTab();
});

contactButton.addEventListener('click', function(){
    render();
    contact();
    removeTab();
});


function removeTab() {
  const homes = document.querySelector("#content>.initialPageDiv");
  const menus = document.querySelector("#content>.cardDiv");
  const contactss = document.querySelector("#content>.contact");
  const footers = document.querySelector("#content>.footer");
  homes.style.display = "none";
  menus.style.display = "none";
  contactss.style.display = "none";
  footers.style.display = "none";
}

const render = function(){
    const content = document.querySelector('#content');
    content.style="";
    while(content.children.length > 1){
        content.children[1].remove();
    }
}

