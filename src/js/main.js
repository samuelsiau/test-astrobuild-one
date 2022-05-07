// import $ from 'jquery';
import ScrollReveal from 'scrollreveal';
import SplitType from 'split-type';
import barba from '@barba/core';
import gsap from 'gsap';


function animeLine() {
  function removeVisible() {
    headingOne.removeClass('.load-hidden');
  }
  const headingOne = $('.heading1');

  const el = document.querySelector('.heading1'); 
  const instance = new SplitType(el, {types: 'lines'});

  $('.heading1 .line').wrap('<div class="overflow-hidden"></div>');
  
  // instance.lines.map(line => {
  //   const wrapEl = document.createElement('div');
  //   wrapEl.classList.add('overflow-hidden');
  //   // or wrapEl.style.overflow = 'hidden'
  //   line.parentNode.appendChild(wrapEl)
  //   wrapEl.appendChild(line)
  // })
  
  ScrollReveal().reveal('.heading1 .overflow-hidden .line', { 
    distance: '50px',
    interval: 350,
    beforeReveal: removeVisible,
    reset: true
  });
}

animeLine();


function delay(n) {
  n = n || 2000;
  return new Promise(done => {
    setTimeout(() => {
      done();
    }, n)
  })
}

function pageTransitionOut() {
  var tl = gsap.timeline();
  tl.to('.transitionSlide li', {
    duration: 0.6,
    ease: "power2.out",
    scaleY: 1,
    transformOrigin: "bottom left",
    stagger: 0.2
  })
}


function pageTransitionIn() {
  var tl = gsap.timeline();
  tl.to('.transitionSlide li', {
    duration: 0.4,
    ease: "power2.in",
    scaleY: 0,
    transformOrigin: "bottom left",
    stagger: 0.2
  })
}


// Barba hook here
barba.hooks.after((data) => {
  console.log(data.next.namespace);
  animeLine();
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
      pageTransitionOut();
      await delay(1200);
      done();
    },

    async enter(data){
      const done = this.async();
      pageTransitionIn();
      done();
    },

    async once(data){
      const done = this.async();
      pageTransitionIn();
      done();
    }
  }]
})

// barba.init({
//   debug: true,
//   sync: true,
//   transitions: [{
//     leave(data) {
//       return gsap.to(data.current.container, {
//         opacity: 0
//       });
//     },
//     enter(data) {
//       return gsap.from(data.next.container, {
//         opacity: 0
//       });
//     },
//     once(data) {
//       return gsap.from(data.next.container, {
//         opacity: 0
//       });
//     },
//   }]
// });







