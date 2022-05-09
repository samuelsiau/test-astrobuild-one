import barba from '@barba/core';
import { pageTransitionsBarba } from './libs/pageTransitionsBarba';
import { homeAnimateLine } from './libs/homeAnimateLine';

barba.hooks.after((data) => {
  // console.log(data.next.namespace);
  homeAnimateLine();
});

pageTransitionsBarba();
homeAnimateLine();