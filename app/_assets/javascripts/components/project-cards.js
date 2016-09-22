
import $ from 'jquery';

/* Animate Cards on Scroll -------------------- */

// Vars
let moduleImpressionenHeight = $('#impressionen').height();
let moduleImpressionenOffset = $('#impressionen').offset().top;
let impressionenScroll = false;
let $cards = $('#impressionen .o-card');
let $bulletItemImpr = $('#impressionen .o-bullet__item');

// Set default for position of cards
TweenMax.set($cards, {x: '-=50', autoAlpha: 0});

// Animate when user scrolls to a certain point
$(window).scroll(function (event) {
  let scroll = $(window).scrollTop();
  if (scroll > moduleImpressionenOffset && !impressionenScroll) {
    TweenMax.staggerTo($cards, 1,  {x: '0', autoAlpha: 1}, 0.25);
    impressionenScroll = true;
  }
});

export function updateProjectCards() {
  $projectCards = $('.js-card');
  let projectCardTl = new TimelineMax();

  projectCardTl
    .staggerTo($projectCards, 0.7, {x: '+= 30', autoAlpha: 0}, 0.1)
    .set($projectCards, {x: '-=60'})
    .staggerTo($projectCards, 0.7, {x: '+= 30', autoAlpha: 1}, 0.1);
}

// Update Project Cards on click
$(document).ready(function() {
  $bulletItemImpr.click(function() {
    $bulletItemImpr.removeClass('is-active');
    $(this).addClass('is-active');
    updateProjectCards();
  });
});
