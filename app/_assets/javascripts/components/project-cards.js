
import $ from 'jquery';

let pageId = $('main').attr('id');
console.log(pageId);

/* Animate Cards on Scroll -------------------- */

// Vars
let moduleImpressionenHeight = $('#impressionen').height();
let moduleImpressionenOffset;
if (pageId === 'index-page') {
  moduleImpressionenOffset = $('#impressionen').offset().top;
}
let impressionenScroll = false;
let $cards = $('#impressionen .o-card');
let $defaultCards = $('#impressionen .o-card.m-category-web');
let numItemsDefault = $('.m-category-web').length;

// Set default for position of cards
TweenMax.set($cards, {x: '-=50', autoAlpha: 0, display: 'none'});

// Set default cards
TweenMax.set($defaultCards, {x: '-=50', autoAlpha: 0, display: 'flex'});

// Show default number of items
if (numItemsDefault > 6) {
  $('#current-displayed-items').text('6');
} else {
  $('#current-displayed-items').text(numItemsDefault);
}
$('#all-items-of-category').text(numItemsDefault);

// Animate when user scrolls to a certain point
$(window).scroll(function (event) {
  let scroll = $(window).scrollTop();
  if (scroll > moduleImpressionenOffset + 300 && !impressionenScroll) {
    TweenMax.staggerTo($defaultCards, 1,  {x: '0', autoAlpha: 1}, 0.25);
    impressionenScroll = true;
  }
});

export function updateProjectCards(id) {
  let projectCardTl = new TimelineMax();
  let $projectCards;
  let numItems;

  if (id === 'bullet-web') {
    $projectCards = $('.m-category-web');
    numItems = $('.m-category-web').length;
  } else if (id === 'bullet-gestaltung') {
    $projectCards = $('.m-category-gestaltung');
    numItems = $('.m-category-gestaltung').length;
  } else if (id === 'bullet-print') {
    $projectCards = $('.m-category-print');
    numItems = $('.m-category-print').length;
  } else if (id === 'bullet-etc') {
    $projectCards = $('.m-category-etc');
    numItems = $('.m-category-etc').length;
  }

  projectCardTl
    .staggerTo($cards, 0.7, {x: '+= 30', autoAlpha: 0}, 0.1)
    .add('hidden')
    .set($cards, {x: 0, display: 'none'}, 'hidden')
    .set($projectCards, {x: '-=30'}, 'hidden')
    .set($projectCards, {display: 'flex'}, 'hidden')
    .add('ready')
    .staggerTo($projectCards, 0.7, {x: '+= 30', autoAlpha: 1}, 'ready');

  // Show the number of elements with the corresponding class class
  if (numItems > 6) {
    $('#current-displayed-items').text('6');
  } else {
    $('#current-displayed-items').text(numItems);
  }
  $('#all-items-of-category').text(numItems);
}
