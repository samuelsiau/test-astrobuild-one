import { pageTransitionsBarba } from './libs/pageTransitionsBarba';
import ScrollOut from "scroll-out";
import barba from "@barba/core";
import '../styles/work.module.scss';

pageTransitionsBarba();

ScrollOut({

})

barba.hooks.after((data) => {
  ScrollOut({

  })
});

