


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


  gsap.registerPlugin(ScrollTrigger);

  const triggers = document.querySelectorAll(".split-word .word");
  
  triggers.forEach(trigger => {
    gsap.from(trigger.children, {
      duration: 1,
      y: "110%",
      ease: Power4. easeOut,
      stagger: 0.1,
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

  

  const hoverLink = document.querySelector('.contact-link');
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
