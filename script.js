var divElement1 = document.getElementById("tab-1st"); 
var divElement2 = document.getElementById("tab-2nd"); 
var divElement3 = document.getElementById("tab-3rd"); 
var divElement4 = document.getElementById("tab-4th"); 
var divElement5 = document.getElementById("tab-5th"); 
var anchorElement1 = divElement1.querySelector("a");
var anchorElement2 = divElement2.querySelector("a");
var anchorElement3 = divElement3.querySelector("a");
var anchorElement4 = divElement4.querySelector("a");
var anchorElement5 = divElement5.querySelector("a");

var tabContainer = document.getElementById("tab-container"); 
var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

var firstWork = document.getElementById("first-work");
var secondWork = document.getElementById("second-work");
var thirdWork = document.getElementById("third-work");
var firstWorkDetails = document.getElementById("first-work-details");
var secondWorkDetails = document.getElementById("second-work-details");
var thirdWorkDetails = document.getElementById("third-work-details");



anchorElement3.classList.add("scale-main");
divElement2.classList.add("scale-2nd");
divElement4.classList.add("scale-2nd");


divElement1.addEventListener("click", function() {
    forTab2();
    forTab2();
});
divElement5.addEventListener("click", function() {
    forTab4();
    forTab4();
});
divElement2.addEventListener("click", forTab2);
divElement4.addEventListener("click", forTab4);


function forTab2(){
    divElement2.classList.remove("scale-2nd");
    divElement4.classList.remove("scale-2nd");
    anchorElement3.classList.remove("scale-main");
    divElement5.classList.add("scale-down");
    divElement2.classList.add("slide-right");
    divElement3.classList.add("slide-right");
    divElement4.classList.add("slide-right");
    divElement1.classList.add("slide-right");
    setTimeout(function() {
        
        divElement5.classList.remove("scale-down");
        var cloneElement = anchorElement5.cloneNode(true);
        anchorElement5.href = anchorElement4.href;
        anchorElement5.textContent = anchorElement4.textContent;
        divElement4.classList.remove("slide-right");
        divElement4.classList.add("scale-2nd");
        anchorElement4.href = anchorElement3.href;
        anchorElement4.textContent = anchorElement3.textContent;
        divElement3.classList.remove("slide-right");
        anchorElement3.classList.add("scale-main");
        anchorElement3.href = anchorElement2.href;
        anchorElement3.textContent = anchorElement2.textContent;
        divElement2.classList.remove("slide-right");
        divElement2.classList.add("scale-2nd");
        anchorElement2.href = anchorElement1.href;
        anchorElement2.textContent = anchorElement1.textContent;   
        divElement1.classList.remove("slide-right");
        anchorElement1.href = cloneElement.href;
        anchorElement1.textContent = cloneElement.textContent;
      }, 605);
}

function forTab4(){
    divElement2.classList.remove("scale-2nd");
    divElement4.classList.remove("scale-2nd");
    anchorElement3.classList.remove("scale-main");
    divElement1.classList.add("scale-up");
    divElement2.classList.add("slide-left");
    divElement3.classList.add("slide-left");
    divElement4.classList.add("slide-left");
    divElement5.classList.add("slide-left");
    setTimeout(function() {
        divElement1.classList.remove("scale-up");
        var cloneElement = anchorElement1.cloneNode(true);
        anchorElement1.href = anchorElement2.href;
        anchorElement1.textContent = anchorElement2.textContent;
        divElement2.classList.remove("slide-left");
        divElement2.classList.add("scale-2nd");
        anchorElement2.href = anchorElement3.href;
        anchorElement2.textContent = anchorElement3.textContent;
        divElement3.classList.remove("slide-left");
        anchorElement3.classList.add("scale-main");
        anchorElement3.href = anchorElement4.href;
        anchorElement3.textContent = anchorElement4.textContent;
        divElement4.classList.remove("slide-left");
        divElement4.classList.add("scale-2nd");
        anchorElement4.href = anchorElement5.href;
        anchorElement4.textContent = anchorElement5.textContent;
        divElement5.classList.remove("slide-left");
        anchorElement5.href = cloneElement.href;
        anchorElement5.textContent = cloneElement.textContent;
      }, 605);
}

function toggleMenu() {
    const icon = document.querySelector(".span-container");
    icon.classList.toggle("open");
}

function handleScroll() {
  var currentScrollTop = document.documentElement.scrollTop;
  if (currentScrollTop >= lastScrollTop) {
    tabContainer.classList.add("slide-up");
    setTimeout(function() {
        tabContainer.classList.remove("slide-down");
        },200);

  }else{
    tabContainer.classList.add("slide-down");
    setTimeout(function() {
    tabContainer.classList.remove("slide-up");
    },200);
  }
  lastScrollTop = currentScrollTop;
}

window.addEventListener("scroll", function() {
    handleScroll();
    workAnimation();
});

function workAnimation(){
    if(window.pageYOffset >= 0 && window.pageYOffset < 200){
        firstWork.classList.add("work-container-animate");
        secondWork.classList.remove("work-container-animate");
        thirdWork.classList.remove("work-container-animate");
        secondWorkDetails.style.display = "none";
        thirdWorkDetails.style.display = "none";
        firstWorkDetails.style.display = "flex";
          

    }

    if(window.pageYOffset >= 200 && window.pageYOffset < 400){
        firstWork.classList.remove("work-container-animate");
        secondWork.classList.add("work-container-animate");
        thirdWork.classList.remove("work-container-animate");
        secondWorkDetails.style.display = "flex";
        firstWorkDetails.style.display = "none";
        thirdWorkDetails.style.display = "none";


    }
    if(window.pageYOffset >= 400 && window.pageYOffset < 600){
        firstWork.classList.remove("work-container-animate");
        secondWork.classList.remove("work-container-animate");
        thirdWork.classList.add("work-container-animate");
        thirdWorkDetails.style.display = "flex";
        secondWorkDetails.style.display = "none";
        firstWorkDetails.style.display = "none";

    }
}


var yOffset = window.pageYOffset;
console.log("The value of window.pageYOffset is: " + yOffset);

