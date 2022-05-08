import gsap from "gsap";

export function pageTransitionIn() {
  const tl = gsap.timeline();
  tl.to('.transitionSlide li', {
    duration: 0.6,
    ease: "power2.in",
    scaleY: 1,
    transformOrigin: "bottom left",
    stagger: 0.2
  })
}