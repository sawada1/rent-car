

let navbars = document.querySelectorAll(".navbar .list ul li a");
let sign_btns = document.querySelectorAll(".navbar .signs button");


navbars.forEach((nav)=>{
    nav.addEventListener("click", function(e){
        navbars.forEach((e)=>e.classList.remove("active"));
        this.classList.add("active");
    });
});

sign_btns.forEach((btn)=>{
    btn.addEventListener("click", function(e){
        sign_btns.forEach((e)=>e.classList.remove("active"));
        this.classList.add("active");
    });
});



let thelist = document.querySelector('header .navbar .list');
let bar = document.querySelector('header .navbar .signs i');
bar.addEventListener("click", ()=>{
  thelist.classList.toggle('active');
})


var swiper = new Swiper(".review-container", {
    grabCursor: true,
    centeredSlides: true,  
    spaceBetween: 20,
    loop:true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    breakpoints: {
      360: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });












const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    delay:400,
    reset: true
});
sr.reveal('.logo-text' ,{delay: 200, origin: 'top'});
sr.reveal('.review' ,{delay: 200, origin: 'top'});
sr.reveal('.about' ,{delay: 200, origin: 'top'});
sr.reveal('.work' ,{delay: 200, origin: 'top'});
sr.reveal('.services' ,{delay: 200, origin: 'top'});