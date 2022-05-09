import barba from '@barba/core';
import { pageTransitionOut } from './pageTransitionOut';
import { pageTransitionIn } from './pageTransitionIn';
import { delay } from './delay';


export function pageTransitionsBarba(){
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
}