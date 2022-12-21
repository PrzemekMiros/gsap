gsap.registerPlugin(ScrollTrigger);

let bodyScrollBar = Scrollbar.init(document.body, { 
    damping: 0.1, 
    delegateTo: document 
});
ScrollTrigger.scrollerProxy(".scroller", {
  scrollTop(value) {
    if (arguments.length) {
      bodyScrollBar.scrollTop = value;
    }
    return bodyScrollBar.scrollTop;
  }
});
bodyScrollBar.addListener(ScrollTrigger.update);


gsap.set(".title-wrap", {
    overflow: "hidden"
});

gsap.from(".title", {
    y: "150%",
    duration: 0.5,
    delay: 1
});

const sections = document.querySelectorAll('section');

sections.forEach(section => {
  gsap.from(section.children, {
    y: 100,
    opacity: 0, 
    duration: .6, 
    ease: 'easeInOut', 
    scrollTrigger: {
  scroller: ".scroller",
  trigger: section,
  start: 'top 70%',
  // scrub: 1,
  markers: true,
}});  
});

