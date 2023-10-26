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
  tabContainer.classList.remove("slide-up");
  tabContainer.style.boxShadow = '0 1px 6px #01fff4';
}

function slideUp(){
  icon.classList.remove("open");
  menu.classList.remove("open");

  tabContainer.classList.add("slide-up");
  tabContainer.style.boxShadow = '0 1px 6px #01fff4';
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
let scrollTimeout;
let animationFrameId;

function handleScroll() {
  clearTimeout(scrollTimeout);
  cancelAnimationFrame(animationFrameId);

  animationFrameId = requestAnimationFrame(() => {
    cards.forEach((card, index) => {
      if (card.getBoundingClientRect().top < (window.innerHeight || document.documentElement.clientHeight) * 0.45) {
        card.classList.add('animateX');
        card.classList.remove('animateY');
        if (index > 0) {
          cards[index - 1].classList.remove('animateX');
        }
        for (let i = index; i < cards.length - 1; i++) {
          cards[i + 1].classList.add('animateY');
        }
      } else {
        card.classList.remove('animateX');
      }
    });
  });
}


        // Function to smoothly scroll the page
        function smoothScroll(targetY, duration) {
            const startingY = window.scrollY;
            const startTime = performance.now();

            function step(currentTime) {
                const currentTimeMs = currentTime - startTime;
                const progress = Math.min(currentTimeMs / duration, 1);

                window.scrollTo(0, startingY + (targetY - startingY) * progress);

                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            }

            window.requestAnimationFrame(step);
        }

        // Function to initiate the smooth scroll with a delay
        function startSmoothScroll() {
            const delay = 1000; // 1000ms = 1 second
            const targetY = 1000; // Adjust this to your target position
            const duration = 1000; // 1000ms = 1 second

            setTimeout(() => {
                smoothScroll(targetY, duration);
            }, delay);
        }

        // Automatically start smooth scrolling when the page loads
        window.onload = startSmoothScroll;


