


// Gsap config

gsap.registerPlugin(ScrollTrigger);

function gsapAnimation() {

  const triggers = document.querySelectorAll(".split-word .word");
  
  triggers.forEach(trigger => {
    gsap.from(trigger.children, {
      duration: 1.5,
      y: "110%",
      ease: Power4. easeOut,
      stagger: 0.15,
      scrollTrigger: {
        trigger: trigger,
        scroller: ".smooth-scroll",
        start: "top 85%",
      }
    });
  })
  


    const target = document.querySelectorAll('.split-line');
    const results = Splitting({ target: target, by: 'lines' });
  
    results[0].lines.forEach((line, index) => {
      line.forEach((word) => {
        gsap.from(word, { 
          y: "100%", 
          stagger: .1,
        scrollTrigger: {
          trigger: target,
          scroller: ".smooth-scroll",
          start: "top 85%",
            }});
      })
    });

  

  const hoverLink = document.querySelector('.site-link');
  const arrow = document.querySelector('.arrow');
  
  const tl = gsap.timeline({ 
    defaults: { ease: "power4.easeOut" }, 
    paused: true 
  })
    .to(arrow, { 
      x: "40%",
      scale: 0.7,
      duration: .5
    })
  
  
    hoverLink.addEventListener("mouseenter", (e) => tl.play());
    hoverLink.addEventListener("mouseleave", (e) => tl.reverse());


/*
    const hoverLinkPorfolio = document.querySelector('.site-link-portfolio');
    
    const tl2 = gsap.timeline({ 
      defaults: { ease: "power4.easeOut" }, 
      paused: true 
    })
      .to(arrow, { 
        x: "40%",

      })
    
    
      hoverLinkPorfolio.addEventListener("mouseenter", (e) => tl2.play());
      hoverLinkPorfolio.addEventListener("mouseleave", (e) => tl2.reverse());
*/

  // Progress
    gsap.to('progress', {
      value: 100,
      ease: 'none',
      scrollTrigger: { 
        trigger: "#fixed-target",
        scroller: ".smooth-scroll",
        scrub: 0.3 
      }
    });
  
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  
}

gsapAnimation();

/*
// Swup config
const swup = new Swup({
  plugins: [
  new SwupBodyClassPlugin(),
  new SwupProgressPlugin()
  ]
});

function loadingScripts() {
  if (document.querySelector('.gsap')) {
    Splitting(),
    gsapAnimation()
  }
}

document.addEventListener("swup:animationInStart", () => {
  loadingScripts()
}), 
document.addEventListener("swup:animationInDone", () => {
  
}), console.clear();
*/

