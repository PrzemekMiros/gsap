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
})
gsap.from(".title", {
    y: "150%",
    duration: 0.5,
    delay: 1
})

gsap.from(".image", {
    yPercent: -50,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: "section"
    }, 
  });