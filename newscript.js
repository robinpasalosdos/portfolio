const menu = document.querySelector(".mobile_nav_sections");
const icon = document.querySelector(".hamburger_icon");

function toggleMenu() {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const textElement = document.getElementById("home_text_p2");
const careers = ["Web Developer        ",
                  "Game Developer        ",
                  "Mobile App Developer        ",
                  "Data Analyst        "];

let currentWordIndex = 0;
let currentletterIndex = 1;

function updateText() {
  textElement.textContent = careers[currentWordIndex].slice(0,currentletterIndex);
  currentletterIndex = currentletterIndex + 1;
  if(currentWordIndex == 3 && currentletterIndex == 21){
    currentWordIndex = 0;
    currentletterIndex = 1;
  }
  if(currentletterIndex == careers[currentWordIndex].length + 1){
    currentWordIndex = currentWordIndex + 1;
    currentletterIndex = 1;
  }
}

setInterval(updateText,100);

var tabContainer = document.getElementById("head_nav");
var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

function slideDown(){
  tabContainer.classList.add("slide-down");
  tabContainer.style.boxShadow = '0 1px 6px #01fff4';
  setTimeout(function() {
  tabContainer.classList.remove("slide-up");
  },100);
}

function slideUp(){
  icon.classList.remove("open");
  menu.classList.remove("open");

  tabContainer.classList.add("slide-up");
  tabContainer.style.boxShadow = '0 1px 6px #01fff4';
    setTimeout(function() {
        tabContainer.classList.remove("slide-down");
        },100);
}

function navHandleScroll() {
  var currentScrollTop = document.documentElement.scrollTop;
  if (currentScrollTop > lastScrollTop) {
    slideUp();

  }else{
    slideDown();
  }
  lastScrollTop = currentScrollTop;
}
  
window.addEventListener("scroll", function() {
  navHandleScroll();
    if (window.pageYOffset == 0){
      tabContainer.style.boxShadow = 'none';
    }
});

const cards = document.querySelectorAll('.card');

function handleScroll() {
  cards.forEach((card, index) => {
        if (card.getBoundingClientRect().bottom < (window.innerHeight || document.documentElement.clientHeight)*.85) {
          card.classList.add('animateX');
          card.classList.remove('animateY');
          if(index > 0){
            cards[index-1].classList.remove('animateX');
          }
          for (let i = index; i < cards.length - 1; i++){
            cards[i+1].classList.add('animateY');
          }
        }else{
          card.classList.remove('animateX');
        }  
    });
}

window.addEventListener('scroll', handleScroll);

const screenWidth = window.innerWidth;
console.log(`Screen width: ${screenWidth}px`);
