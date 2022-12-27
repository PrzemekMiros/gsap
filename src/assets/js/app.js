


// Gsap config

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



// Portfolio

let text1 = document.querySelector(".p-link-1");

let animation1 = gsap.to(".p-img-1", {
  paused: true,
  opacity: 1
});

text1.addEventListener("mouseenter", () => animation1.play());
text1.addEventListener("mouseleave", () => animation1.reverse());

let text2 = document.querySelector(".p-link-2");

let animation2 = gsap.to(".p-img-2", {
  paused: true,
  opacity: 1
});

text2.addEventListener("mouseenter", () => animation2.play());
text2.addEventListener("mouseleave", () => animation2.reverse());

let text3 = document.querySelector(".p-link-3");

let animation3 = gsap.to(".p-img-3", {
  paused: true,
  opacity: 1
});

text3.addEventListener("mouseenter", () => animation3.play());
text3.addEventListener("mouseleave", () => animation3.reverse());

let text4 = document.querySelector(".p-link-4");

let animation4 = gsap.to(".p-img-4", {
  paused: true,
  opacity: 1
});

text4.addEventListener("mouseenter", () => animation4.play());
text4.addEventListener("mouseleave", () => animation4.reverse());

let text5 = document.querySelector(".p-link-5");

let animation5 = gsap.to(".p-img-5", {
  paused: true,
  opacity: 1
});

text5.addEventListener("mouseenter", () => animation5.play());
text5.addEventListener("mouseleave", () => animation5.reverse());


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


    const menu_open = gsap.timeline({
      paused: "true",
      reversed: "true",
    });
    menu_open.to(".menu-container", {
      display: "flex",
    });
    menu_open.to("#menuBtnDiv", {
      duration: 0.2,
      y: "100%",
    });
    menu_open.fromTo(
      "#menuBtnDiv2",
      {
        duration: 0.2,
        y: -100,
      },
      {
        y: "-100%",
      },
      "-=.15"
    );
    menu_open.from(
      ".menu-container-1",
      {
        duration: 0.5,
        opacity: 0,
      },
      "-=.5"
    );
    menu_open.from(
      ".menu-container-header li span, .menu-container-footer li span",
      {
        stagger: {
          amount: 0.15,
        },
        y: 100,
        duration: 0.5,
      },
      "-=.1"
    );
    
    function menuOpen() {
      menu_open.reversed() ? menu_open.play() : menu_open.reverse();
    }

    const menuButton = document.querySelector(".menu");

    menuButton.addEventListener('click', () => {
      menuOpen();
    });

    
    

    
const cursorOuter = document.querySelector(".cursor--large");
const cursorInner = document.querySelector(".cursor--small");
const cursorTextContainerEl = document.querySelector(".cursor--text");
const cursorTextEl = cursorTextContainerEl.querySelector(".text");

const hoverItems = document.querySelectorAll(".cursor-hover-item");
const hoverEffectDuration = 0.3;
let isHovered = false;
let initialCursorHeight;

const cursorRotationDuration = 8;

let circleType = new CircleType(cursorTextEl);
circleType.radius(50);

setTimeout(() => {
	initialCursorHeight = circleType.container.style.getPropertyValue("height");
	console.log(initialCursorHeight);
}, 50);

hoverItems.forEach((item) => {
	item.addEventListener("pointerenter", handlePointerEnter);
	item.addEventListener("pointerleave", handlePointerLeave);
});

let mouse = {
	x: -100,
	y: -100
};

document.body.addEventListener("pointermove", updateCursorPosition);

function updateCursorPosition(e) {
	mouse.x = e.pageX;
	mouse.y = e.pageY;
}

function updateCursor() {
	gsap.set([cursorInner, cursorTextContainerEl], {
		x: mouse.x,
		y: mouse.y
	});

	gsap.to(cursorOuter, {
		duration: 0.15,
		x: mouse.x,
		y: mouse.y
	});

	if (!isHovered) {
		gsap.to(cursorTextContainerEl, hoverEffectDuration * 0.5, {
			opacity: 0
		});
		gsap.set(cursorTextContainerEl, {
			rotate: 0
		});
	}

	requestAnimationFrame(updateCursor);
}

updateCursor();

function handlePointerEnter(e) {
	isHovered = true;

	const target = e.currentTarget;
	updateCursorText(target);

	gsap.set([cursorTextContainerEl, cursorTextEl], {
		height: initialCursorHeight,
		width: initialCursorHeight
	});

	gsap.fromTo(
		cursorTextContainerEl,
		{
			rotate: 0
		},
		{
			duration: cursorRotationDuration,
			rotate: 360,
			ease: "none",
			repeat: -1
		}
	);

	gsap.to(cursorInner, hoverEffectDuration, {
		scale: 2
	});

	gsap.fromTo(
		cursorTextContainerEl,
		hoverEffectDuration,
		{
			scale: 1.2,
			opacity: 0
		},
		{
			delay: hoverEffectDuration * 0.75,
			scale: 1,
			opacity: 1
		}
	);
	gsap.to(cursorOuter, hoverEffectDuration, {
		scale: 1.2,
		opacity: 0
	});
}

function handlePointerLeave() {
	isHovered = false;
	gsap.to([cursorInner, cursorOuter], hoverEffectDuration, {
		scale: 1,
		opacity: 1
	});
}

function updateCursorText(textEl) {
	const cursorTextRepeatTimes = textEl.getAttribute("data-cursor-text-repeat");
	const cursorText = returnMultipleString(
		textEl.getAttribute("data-cursor-text"),
		cursorTextRepeatTimes
	);

	circleType.destroy();

	cursorTextEl.innerHTML = cursorText;
	circleType = new CircleType(cursorTextEl);
}

function returnMultipleString(string, count) {
	let s = "";
	for (let i = 0; i < count; i++) {
		s += ` ${string} `;
	}
	return s;
};

  
  
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

