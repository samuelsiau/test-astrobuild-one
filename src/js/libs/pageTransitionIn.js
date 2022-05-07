import gsap from "gsap";

export function pageTransitionIn() {
  var tl = gsap.timeline();
  tl.to('.transitionSlide li', {
    duration: 0.4,
    ease: "power2.in",
    scaleY: 0,
    transformOrigin: "top left",
    stagger: {
      each: 0.2,
      from: "end"
    }
  })
}