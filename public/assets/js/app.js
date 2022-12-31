
function portfolioList() {

    const portfolioLink1 = document.querySelector(".p-link-1");
    const portfolioImage1 = document.querySelector(".p-img-1");
  
  
    portfolioLink1.addEventListener("mouseenter", () => {
      portfolioLink2.classList.remove("active")
      portfolioImage2.classList.remove("active")
      portfolioLink1.classList.add("active")
      portfolioImage1.classList.add("active")
  })
  
    const portfolioLink2 = document.querySelector(".p-link-2");
    const portfolioImage2 = document.querySelector(".p-img-2");
  
  
    portfolioLink2.addEventListener("mouseenter", () => {
      portfolioLink1.classList.remove("active")
      portfolioImage1.classList.remove("active")
      portfolioLink2.classList.add("active")
      portfolioImage2.classList.add("active")
  })
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