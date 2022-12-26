


// Gsap config

  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".smooth-scroll"),
    smooth: true,
    multiplier: 0.75
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".smooth-scroll", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
  });
  


  const triggers = document.querySelectorAll(".word");
  
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
  

    gsap.from(".split-line", {
      duration: 1.5,
      y: "110%",
      ease: Power4. easeOut,
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".split-line",
        scroller: ".smooth-scroll",
        start: "top 85%",
      }
    });

  

  const hoverLink = document.querySelector('.site-link');
  const arrow = document.querySelector('.arrow');
  
  const tl = gsap.timeline({ 
    defaults: { ease: "power4.easeOut" }, 
    paused: true 
  })
    .to(arrow, { 
      x: "50%",
      scale: 0.7,
      duration: .5
    })
  
  
    hoverLink.addEventListener("mouseenter", (e) => tl.play());
    hoverLink.addEventListener("mouseleave", (e) => tl.reverse());


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


