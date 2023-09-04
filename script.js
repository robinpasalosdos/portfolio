
const navigation = document.querySelector(".primary-navigation");

const navigationHeight = navigation.offsetHeight;

document.documentElement.style.setProperty(
    "--scroll-padding",
    navigationHeight + "px"
);

var tablink = document.getElementsByClassName("tab-link");
var tabcontent = document.getElementsByClassName("tab-content")
function opentab(tabname){
    for(content of tabcontent){
    content.classList.remove("active-tab");
    }
    document.getElementById(tabname).classList.add("active-tab");
}

function toggleMenu() {
    const menu = document.querySelector(".menu_links");
    const icon = document.querySelector(".hamburger_icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }