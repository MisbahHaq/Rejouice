const locoScroll = () => {
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

};
locoScroll();
const loaderEffect = () => {
  let tl = gsap.timeline();
tl.from("#loader h3",{
  x: 100,
  opacity: 0,
  duration:1,
  stagger:.1
})
tl.to("#loader h3",{
  x: -100,
  opacity:0,
  duration:1,
  stagger:.1
});

tl.to("#loader",{
  display: "none"
})
tl.from("#upper-container-first h1 span",{
  y:500,
  duration:.5,
  stagger:.1,
})
}
loaderEffect();
const cursorEffect = () => {
let innerPageone = document.querySelector("#upper-container-first");
let cursor = document.querySelector("#cursor");
innerPageone.addEventListener("mousemove",(val) => {
    gsap.to(cursor,{
        x: val.x,
        y: val.y
    })
})
innerPageone.addEventListener("mouseenter",(value) => {
    gsap.to(cursor,{
        scale: 1,
        opacity: 1
    });
})
innerPageone.addEventListener("mouseleave",(value) => {
    gsap.to(cursor,{
        scale: 0,
        opacity: 0
    });
})
};
cursorEffect();
const textEffect = () =>{
  let tl2 = gsap.timeline();
  tl2.from(".text_elem h1",{
    y:120,
    stagger:.1,
    duration:1,
    opacity: 0,
    scrollTrigger:({
      trigger:"#container-second",
      scroller:"#main",
      start:"top 50%",
      end:"top 50%",
      scrub:2
    })
  });

  
}
textEffect();
const graphicCursorEffect = () =>{
  let videoCursor = document.querySelector("#container-four");
  let blackCursor = document.querySelector("#black-cursor");
  videoCursor.addEventListener("mousemove",(dets) => {
    gsap.to(blackCursor,{
      x: dets.x,
      y: dets.y
  })
  });
  videoCursor.addEventListener("mouseenter",(detes)=>{
    gsap.to(blackCursor,{
      scale:1,
      opacity:1
    })
  });
  videoCursor.addEventListener("mouseleave",(detes)=>{
    gsap.to(blackCursor,{
      opacity:0,
      scale:0
    })
  })
};
graphicCursorEffect();

const sliderAnimationEffect = () =>{
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2700,
      disableOnInteraction: false,
    }
  });
};
sliderAnimationEffect();