import { pageTransitionsBarba } from './libs/pageTransitionsBarba';
import barba from '@barba/core';
import gsap from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';

pageTransitionsBarba();

gsap.registerPlugin(scrollTrigger);

gsap.to(".box", {
  scrollTrigger: {
    trigger: this,
    markers: true,
    start: "center 80%",
    end: "bottom 100px",
    toggleActions: "restart complete restart complete"
  },
  x: 100,
});