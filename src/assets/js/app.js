
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
  item.addEventListener(
    "mouseenter",
    function (e) {
      // ADDS AND REMOVES ACTIVE CLASS ON TABLINKS
      portfolioLink.forEach(function (item) {
        item.classList.remove("active");
      });
      item.classList.add("active");
    },
  );
});

portfolioLink1.addEventListener("mouseenter", () => {
  portfolioImg.forEach(el=>el.classList.remove('active'));
  portfolioImg1.forEach(el=>el.classList.add('active'));
});

portfolioLink2.addEventListener("mouseenter", () => {
  portfolioImg.forEach(el=>el.classList.remove('active'));
  portfolioImg2.forEach(el=>el.classList.add('active'));
});

portfolioLink3.addEventListener("mouseenter", () => {
  portfolioImg.forEach(el=>el.classList.remove('active'));
  portfolioImg3.forEach(el=>el.classList.add('active'));
});

portfolioLink4.addEventListener("mouseenter", () => {
  portfolioImg.forEach(el=>el.classList.remove('active'));
  portfolioImg4.forEach(el=>el.classList.add('active'));
});

portfolioLink5.addEventListener("mouseenter", () => {
  portfolioImg.forEach(el=>el.classList.remove('active'));
  portfolioImg5.forEach(el=>el.classList.add('active'));
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

  
  const contactLink = document.querySelector(".contact-link");
  const contactArrow = document.querySelector(".arrow");

  contactLink.addEventListener("mouseenter", () => {
    contactArrow.classList.add("active");
  });

  contactLink.addEventListener("mouseleave", () => {
    contactArrow.classList.remove("active");
  })