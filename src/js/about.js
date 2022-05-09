import barba from '@barba/core';
import { pageTransitionsBarba } from './libs/pageTransitionsBarba';
import AOS from 'aos';
import 'aos/src/sass/aos.scss';


pageTransitionsBarba();
AOS.init();

barba.hooks.after((data) => {
  
});