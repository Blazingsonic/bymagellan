
import $ from 'jquery';
import _ from 'lodash';

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
let $defaultCards = $('.m-category-web:lt(6)');
let numItemsDefault = $('.m-category-web').length - 1;
let $loadMore = $('.c-card-proj__more');

console.log(`num def ${numItemsDefault}`);

// Set default for position of cards
TweenMax.set($cards, {x: '-=50', autoAlpha: 0, display: 'none'});

// Set default cards
TweenMax.set($defaultCards, {x: '-=50', autoAlpha: 0, display: 'flex'});

// Show default number of items
if (numItemsDefault > 6) {
  $('#current-displayed-items').text('6');
} else {
  $('#current-displayed-items').text(numItemsDefault);
  $loadMore.hide();
}
$('#all-items-of-category').text(numItemsDefault);

// Animate when user scrolls to a certain point
$(window).scroll(_.debounce(function (event) {
  let scroll = $(window).scrollTop();
  if (scroll > moduleImpressionenOffset + 300 && !impressionenScroll) {
    TweenMax.staggerTo($defaultCards, 1,  {x: '0', autoAlpha: 1}, 0.25);
    impressionenScroll = true;
  }
}, 100));

export function updateProjectCards(id, loadState) {
  let projectCardTl = new TimelineMax();
  let projectCardTlAdd = new TimelineMax();
  let $projectCards;
  let numItems;
  let numItemsLoadState1;

  console.log(`load State ${loadState}`);

  if (loadState == 0) {

    if (id === 'bullet-web') {
      $projectCards = $('.m-category-web:lt(6)');
      numItems = $('.m-category-web').length - 1;
      $loadMore.hide();
    } else if (id === 'bullet-gestaltung') {
      $projectCards = $('.m-category-gestaltung:lt(6)');
      numItems = $('.m-category-gestaltung').length;
      $loadMore.show();
    } else if (id === 'bullet-print') {
      $projectCards = $('.m-category-print:lt(6)');
      numItems = $('.m-category-print').length;
      $loadMore.hide();
    } else if (id === 'bullet-etc') {
      $projectCards = $('.m-category-etc:lt(6)');
      numItems = $('.m-category-etc').length;
      $loadMore.hide();
    }

    projectCardTl
    .staggerTo($cards, 0.6, {x: '+= 30', autoAlpha: 0}, 0.1)
    .add('hidden')
    .set($cards, {x: 0, display: 'none'}, 'hidden-=0.2')
    .set($projectCards, {x: '-=30'}, 'hidden-=0.2')
    .set($projectCards, {display: 'flex'}, 'hidden-=0.2')
    .add('ready')
    .staggerTo($projectCards, 0.6, {x: '+= 30', autoAlpha: 1}, 'ready-=0.2');

    // Show the number of elements with the corresponding class class
    if (numItems > 6) {
      $('#current-displayed-items').text('6');
      $loadMore.show();
    } else {
      $('#current-displayed-items').text(numItems);
    }
    $('#all-items-of-category').text(numItems);

  } else if (loadState == 1) {

    if (id === 'bullet-web') {
      numItemsLoadState1 = $('.m-category-web').length;
      let numItemsAdded = numItemsLoadState1 - 6;
      $projectCards = $('.m-category-web').slice(-numItemsAdded);
      console.log($projectCards);
    } else if (id === 'bullet-gestaltung') {
      numItemsLoadState1 = $('.m-category-gestaltung').length;
      let numItemsAdded = numItemsLoadState1 - 6;
      $projectCards = $('.m-category-gestaltung').slice(-numItemsAdded);
      console.log($projectCards);
    } else if (id === 'bullet-print') {
      $projectCards = $('.m-category-print');
      numItemsLoadState1 = $('.m-category-print').length;
    } else if (id === 'bullet-etc') {
      $projectCards = $('.m-category-etc');
      numItemsLoadState1 = $('.m-category-etc').length;
    }

    projectCardTlAdd
      .set($projectCards, {x: '-30', height: '0', clearProps: 'display'})
      .to($projectCards, 0.4, {height: 'initial'})
      .add('ready')
      .staggerTo($projectCards, 0.7, {x: '+= 30', autoAlpha: 1},'+=0.5');

    $('#current-displayed-items').text(numItemsLoadState1 - 1);

    $loadMore.hide();
    loadState = 0;

  }
}








