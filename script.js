document.addEventListener("DOMContentLoaded", () => {


/* =========================
   PAGE LOAD ANIMATION
========================= */

document.body.classList.add("loaded");



/* =========================
   SCROLL PROGRESS BAR
========================= */

const progressBar = document.getElementById("progress-bar");


window.addEventListener("scroll", () => {

let scrollTop = document.documentElement.scrollTop;

let scrollHeight =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;


let progress =
(scrollTop / scrollHeight) * 100;


progressBar.style.width = progress + "%";

});



/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const revealElements =
document.querySelectorAll(".reveal");


const revealObserver =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add("active");

}

});


},
{
threshold:0.15
}
);



revealElements.forEach(element=>{

revealObserver.observe(element);

});



/* =========================
   ANIMATED COUNTERS
========================= */

const counters =
document.querySelectorAll(".counter");


let started = false;


const counterObserver =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting && !started){


started = true;


counters.forEach(counter=>{


let target =
parseFloat(counter.dataset.target);


let current = 0;


let increment =
target / 100;



let updateCounter = ()=>{


if(current < target){


current += increment;



if(target % 1 !== 0){

counter.innerText =
current.toFixed(1);

}

else{

counter.innerText =
Math.ceil(current);

}


requestAnimationFrame(updateCounter);


}

else{


counter.innerText =
target;


if(target === 91.4){

counter.innerText =
"91.4%";

}

else if(target === 50){

counter.innerText =
"50+";

}

}


};



updateCounter();



});


}


});


},
{
threshold:0.5
}
);



const statsSection =
document.querySelector(".stats-section");


if(statsSection){

counterObserver.observe(statsSection);

}



/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
document.querySelectorAll("section[id]");


const navLinks =
document.querySelectorAll(".nav-links a");



window.addEventListener("scroll",()=>{


let current = "";


sections.forEach(section=>{


let sectionTop =
section.offsetTop - 150;


let sectionHeight =
section.clientHeight;


if(
scrollY >= sectionTop &&
scrollY < sectionTop + sectionHeight
){

current =
section.getAttribute("id");

}


});



navLinks.forEach(link=>{


link.style.color="";


if(
link.getAttribute("href")
===
"#"+current
){

link.style.color="#EC4899";

}


});


});



/* =========================
   SMOOTH BUTTON SCROLL
========================= */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{


anchor.addEventListener(
"click",
function(e){


let target =
document.querySelector(
this.getAttribute("href")
);


if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}


});


});



});
