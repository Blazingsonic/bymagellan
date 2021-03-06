
// import { TweenMax, TimelineMax } from 'gsap';
import $ from 'jquery';

export function lineAnimationSet(elem) {

  const pageId = $('main').attr('id');

  let length;
  if (pageId === 'index-page') {
    length = elem.getTotalLength();
    TweenMax.set(elem, {strokeDasharray: length, strokeDashoffset: length});
  }

}

export function lineAnimation(elem) {

  let tl = new TimelineMax();
  tl
    .to(elem, 2.3, {strokeDashoffset: '0px'})
    .to(elem, 0.03, {strokeDasharray: 'initial'});

  // TweenMax.to(elem, 0.02, {strokeDasharray: 'initial'});
}
