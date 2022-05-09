import { pageTransitionsBarba } from './libs/pageTransitionsBarba';
import ScrollOut from "scroll-out";
import barba from "@barba/core";

pageTransitionsBarba();

ScrollOut({

})

barba.hooks.after((data) => {
  ScrollOut({

  })
});

