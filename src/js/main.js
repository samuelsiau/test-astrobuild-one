// import $ from 'jquery';

import barba from '@barba/core';
import { pageTransitionOut } from './libs/pageTransitionOut';
import { pageTransitionIn } from './libs/pageTransitionIn';
import { delay } from './libs/delay';



// Barba hook here

barba.hooks.after((data) => {
  console.log(data.next.namespace);
});

barba.hooks.before(() => {
  barba.wrapper.classList.add('is-animating');
});

barba.hooks.after(() => {
  barba.wrapper.classList.remove('is-animating');
});


// Barba Init here

barba.init({
  sync: true,
  transitions: [{
    async leave(data) {
      const done = this.async();
      pageTransitionIn();
      await delay(1200);
      done();
    },

    async enter(data){
      const done = this.async();
      pageTransitionOut();
      done();
    },

    async once(data){
      const done = this.async();
      pageTransitionOut();
      done();
    }
  }]
})
