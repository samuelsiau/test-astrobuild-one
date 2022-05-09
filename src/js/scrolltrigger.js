import { pageTransitionsBarba } from './libs/pageTransitionsBarba';
import barba from '@barba/core';
import gsap from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';
import '../styles/scrolltrigger.module.scss';

pageTransitionsBarba();

gsap.registerPlugin(scrollTrigger);

gsap.set('.box', {x:500})

gsap.to(".box", {
  scrollTrigger: {
    trigger: '.box',
    markers: true,
    toggleClass: 'active',
    toggleActions:"play none none none"
  },
  x: 0
  // opacity: 1
});