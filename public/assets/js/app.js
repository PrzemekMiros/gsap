
// For more information, see greensock.com/docs/v3/Plugins/ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Smooth scroll setup
const bodyScrollBar = Scrollbar.init(document.body, { damping: 0.1, delegateTo: document });
 
bodyScrollBar.setPosition(0, 0);
bodyScrollBar.track.xAxis.element.remove();

// How to get them to work together
ScrollTrigger.scrollerProxy("body", {
  scrollTop(value) {
    if (arguments.length) {
      bodyScrollBar.scrollTop = value;
    }
    return bodyScrollBar.scrollTop;
  }
});


// Regular ScrollTrigger stuff


  // Reveal split text chars
  const reveals = gsap.utils.toArray(".char .reveal");
  reveals.forEach(reveal => {
    gsap.from(reveal, {
      duration: 1,
      x: "-100%",
      ease: Power3. easeOut,
      stagger: 0.25,
      scrollTrigger: {
        trigger: reveal,
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
      ease: Power3. easeOut,
      stagger: 0.2,
      scrollTrigger: {
        trigger: revsplit,
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
    ease: Power3. easeOut,
    scrollTrigger: {
      trigger: box,
      start: "top 95%",
    }
  })
});

  // Hover link
  const hoverLink = document.querySelector('.contact-link');
  const arrow = document.querySelector('.arrow');
  
  const tl = gsap.timeline({ 
    defaults: { ease: Power3. easeOut }, 
    paused: true 
  })
    .to(arrow, { 
      x: "40%",
      scale: 0.5,
      duration: .6
    })
  
    hoverLink.addEventListener("mouseenter", (e) => tl.play());
    hoverLink.addEventListener("mouseleave", (e) => tl.reverse());
