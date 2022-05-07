import gsap from "gsap";

export function pageTransitionOut(){
  var tl = gsap.timeline();
  tl.to('.transitionSlide li', {
    duration: 0.6,
    ease: "power2.out",
    scaleY: 1,
    transformOrigin: "bottom left",
    stagger: 0.2
  })
}