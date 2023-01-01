
function portfolioList() {

  const portfolioLink = document.querySelectorAll(".portfolio-link"),
        portfolioLink1 = document.querySelector(".p-link-1"),

        portfolioImg1 = document.querySelector(".p-img-1");

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