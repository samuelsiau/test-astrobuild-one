import gsap from "gsap";

export function pageTransitionOut(){
  const tl = gsap.timeline();
  tl.to('.transitionSlide li', {
    duration: 0.4,
    ease: "power2.out",
    scaleY: 0,
    transformOrigin: "top left",
    stagger: {
      each: 0.2,
      from: "end"
    },
  })
}