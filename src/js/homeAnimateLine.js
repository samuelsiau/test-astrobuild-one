import ScrollReveal from 'scrollreveal';
import SplitType from 'split-type';

export function homeAnimateLine() {
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

  function myCallback() {
    console.log("Bannner text reveal done")
  }

  
  ScrollReveal().reveal('.heading1 .overflow-hidden .line', { 
    distance: '50px',
    interval: 350,
    beforeReveal: removeVisible,
    reset: true,
    afterReveal: myCallback
  });
}