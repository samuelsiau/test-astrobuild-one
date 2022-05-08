import barba from '@barba/core';
import { homeAnimateLine } from './homeAnimateLine';

barba.hooks.after((data) => {
  console.log(data.next.namespace);
  homeAnimateLine();
});

homeAnimateLine();