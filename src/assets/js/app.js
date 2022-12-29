
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
    });


  gsap.registerPlugin(ScrollTrigger, CustomEase);

  CustomEase.create("power6", "M0,0 C0.322,0.592 0.146,0.266 0.338,0.622 0.452,0.834 0.512,0.944 1,1 ");


  // Reveal split text chars
  const reveals = gsap.utils.toArray(".char .reveal");
  reveals.forEach(reveal => {
    gsap.from(reveal, {
      duration: 1,
      x: "-100%",
      ease: "power6",
      stagger: 0.2,
      scrollTrigger: {
        trigger: reveal,
        scroller: ".smooth-scroll",
        start: "top 80%",
      }
    });
  });

  // Reveal split text lines
  const revealSplit = gsap.utils.toArray(".split-line");
  revealSplit.forEach(revsplit => {
    gsap.from(revsplit, {
      duration: 1,
      y: "100%",
      ease: "power6",
      stagger: 0.2,
      scrollTrigger: {
        trigger: revsplit,
        scroller: ".smooth-scroll",
        start: "top 90%",
      }
    });
  });

  // Fade from down
  const boxes = gsap.utils.toArray('.fade-down');
  boxes.forEach(box => {
  gsap.from(box, { 
    duration: 1,
    y: "100%",
    opacity: 0,
    delay: .2,
    ease: "power6",
    scrollTrigger: {
      trigger: box,
      scroller: ".smooth-scroll",
      start: "top 95%",
    }
  })
});

  // Hover link
  const hoverLink = document.querySelector('.contact-link');
  const arrow = document.querySelector('.arrow');
  
  const tl = gsap.timeline({ 
    defaults: { ease: "power6" }, 
    paused: true 
  })
    .to(arrow, { 
      x: "40%",
      scale: 0.5,
      duration: .8
    })
  
    hoverLink.addEventListener("mouseenter", (e) => tl.play());
    hoverLink.addEventListener("mouseleave", (e) => tl.reverse());

  // Progress
    gsap.from('.progress', {
      height: 0,
      ease: 'none',
      scrollTrigger: { 
        trigger: "body",
        scroller: ".smooth-scroll",
        start: "top top",
        scrub: 0.3 
      }
    });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
