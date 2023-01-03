window.addEventListener("load", () => {

  scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    reloadOnContextChange: !0,
    multiplier: .65,
    lerp: .15,
    touchMultiplier: 2,
    tablet: {
      smooth: !0
    },
    smartphone: {
      smooth: !0
    }
  });

function scrollObserver() {
    
    const navBtn1 = document.getElementById("nav-btn-1");
    const navBtn2 = document.getElementById("nav-btn-2");
    const navBtn3 = document.getElementById("nav-btn-3");
    const navBtn4 = document.getElementById("nav-btn-4");
    const navBtn5 = document.getElementById("nav-btn-5");

    scroll.on("call", callValue => {
         if (callValue === "one") {
           navBtn1.classList.add("active");
           navBtn2.classList.remove("active");
           console.log(callValue);
         } else {
           navBtn1.classList.remove("active");
         };
   
         if (callValue === "two") {
           navBtn2.classList.add("active");
           navBtn1.classList.remove("active");
           navBtn3.classList.remove("active");
           console.log(callValue);
         } else {
           navBtn2.classList.remove("active");
         };
   
         if (callValue === "three") {
           navBtn3.classList.add("active");
           navBtn2.classList.remove("active");
           navBtn4.classList.remove("active");
           console.log(callValue);
         } else {
           navBtn3.classList.remove("active");
         };
   
         if (callValue === "four") {
           navBtn4.classList.add("active");
           navBtn3.classList.remove("active");
           navBtn5.classList.remove("active");
           console.log(callValue);
         } else {
           navBtn4.classList.remove("active");
         };
         
         if (callValue === "five") {
           navBtn5.classList.add("active");
           navBtn4.classList.remove("active");
           console.log(callValue);
         } else {
           navBtn5.classList.remove("active");
         };
   });
   }
   scrollObserver();

new ResizeObserver(() => scroll.update()).observe(document.querySelector("[data-scroll-container]"));

});



function portfolioList() {

  const portfolioLink = document.querySelectorAll(".portfolio-link"),
        portfolioLink1 = document.querySelector(".p-link-1"),
        portfolioLink2 = document.querySelector(".p-link-2"),
        portfolioLink3 = document.querySelector(".p-link-3"),
        portfolioLink4 = document.querySelector(".p-link-4"),
        portfolioLink5 = document.querySelector(".p-link-5"),

        portfolioImg = document.querySelectorAll(".portfolio-img"),
        portfolioImg1 = document.querySelectorAll(".p-img-1"),
        portfolioImg2 = document.querySelectorAll(".p-img-2"),
        portfolioImg3 = document.querySelectorAll(".p-img-3"),
        portfolioImg4 = document.querySelectorAll(".p-img-4"),
        portfolioImg5 = document.querySelectorAll(".p-img-5");

  portfolioLink.forEach(function (item) {
    item.addEventListener("mouseenter", function (e) {
      // Remove and add class on portfolio links
      portfolioLink.forEach(function (item) {
        item.classList.remove("active");
      });
        item.classList.add("active");
    },
  );
});

portfolioLink1.addEventListener("mouseenter", () => {
  portfolioImg.forEach(el=>el.classList.remove('active'))
  portfolioImg1.forEach(el=>el.classList.add('active'))
});

portfolioLink2.addEventListener("mouseenter", () => {
  portfolioImg.forEach(el=>el.classList.remove('active'))
  portfolioImg2.forEach(el=>el.classList.add('active'))
});

portfolioLink3.addEventListener("mouseenter", () => {
  portfolioImg.forEach(el=>el.classList.remove('active'))
  portfolioImg3.forEach(el=>el.classList.add('active'))
});

portfolioLink4.addEventListener("mouseenter", () => {
  portfolioImg.forEach(el=>el.classList.remove('active'))
  portfolioImg4.forEach(el=>el.classList.add('active'))
});

portfolioLink5.addEventListener("mouseenter", () => {
  portfolioImg.forEach(el=>el.classList.remove('active'))
  portfolioImg5.forEach(el=>el.classList.add('active'))
});

}
portfolioList();


function greetingsText () {
    const greeting = document.getElementById("greeting");
    const hour = new Date().getHours();
    const welcomeTypes = ["Dzień dobry", "Dobry wieczór"];
    let welcomeText = "";
    
    if ((hour < 18) && (hour > 4)) welcomeText = welcomeTypes[0];
    else welcomeText = welcomeTypes[1];
    
    greeting.innerHTML = welcomeText;
    }
  greetingsText();


  function accordionWrap() {
    let t = document.getElementsByClassName("accordion");
    for (let e = 0; e < t.length; e++) t[e].addEventListener("click", function () {
      let e = this.nextElementSibling;
      if (e.style.maxHeight) e.style.maxHeight = null, this.classList.remove("open");
      else {
        for (let a = 0; a < t.length; a++) t[a].classList.remove("open"), t[a].nextElementSibling.style.maxHeight = null;
        e.style.maxHeight = e.scrollHeight + "px", this.classList.toggle("open");
      }
    })
  }
  accordionWrap();  

  
function contactLink() {
  const contactLink = document.querySelector(".contact-link");
  const contactArrow = document.querySelector(".arrow");

  contactLink.addEventListener("mouseenter", () => {
    contactArrow.classList.add("active");
  })

  contactLink.addEventListener("mouseleave", () => {
    contactArrow.classList.remove("active");
  })
}
contactLink();


