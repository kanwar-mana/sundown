const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elemC= document.querySelector("#ele-container");
var fixe=document.querySelector("#fixed-image");
var ele = document.querySelectorAll(".element");

elemC.addEventListener("mouseenter",()=>{
    fixe.style.display="block";
})
elemC.addEventListener("mouseleave",()=>{
    fixe.style.display="none";
})

ele.forEach(e => {
    e.addEventListener("mouseenter",()=>{
        var image_link = e.getAttribute("data-image");
        fixe.style.backgroundImage = `url(${image_link})`;
    })
});

var menu=document.querySelector(".menu");
var menu_anim=document.querySelector("#menu-anim");
var flag=0;
menu.addEventListener("click",()=>{
    if(flag==0){
        menu_anim.style.top=0;
        flag=1;
    }
    else{
        menu_anim.style.top="-100%";
        flag=0;
    }
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
