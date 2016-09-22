
// import { TweenMax, TimelineMax } from 'gsap';

export function lineAnimationSet(elem) {

  console.log(`line animation set ${elem}`);
  let length = elem.getTotalLength();
  TweenMax.set(elem, {strokeDasharray: length, strokeDashoffset: length});

}

export function lineAnimation(elem) {

  console.log('animating lines');
  let tl = new TimelineMax();
  tl
    .to(elem, 2.3, {strokeDashoffset: '0px'})
    .to(elem, 0.03, {strokeDasharray: 'initial'});

  // TweenMax.to(elem, 0.02, {strokeDasharray: 'initial'});
}
