
import $ from 'jquery';

let pageId = $('main').attr('id');
console.log(pageId);

/* Animate Menu Icon -------------------- */

export function animateMenuIcon() {

  $('.i-menu span:nth-child(2)').toggleClass('transparent');
  $('.i-menu span:nth-child(1)').toggleClass('rotate-top');
  $('.i-menu span:nth-child(3)').toggleClass('rotate-bottom');

  $('.i-menu--mobile span:nth-child(2)').toggleClass('transparent');
  $('.i-menu--mobile span:nth-child(1)').toggleClass('rotate-top');
  $('.i-menu--mobile span:nth-child(3)').toggleClass('rotate-bottom');

}

/* Toggle class of mobile search and menu icons -------------------- */

if ($(window).width() < 1113) {
  $('.i-search--mobile').toggle();
}

$('.i-menu--mobile').click(function() {
  console.log('debug');
  $('.i-search--mobile').toggle();
  $('.c-nav-right__menu-wrap').toggleClass('u-bg-black');
});

$('.site-overlay').click(function() {
  if ($(window).width() < 1113) {
    $('.i-search--mobile').toggle();
    $('.c-nav-right__menu-wrap').toggleClass('u-bg-black');
  }
});

/* Fixed Nav -------------------- */

// Set fixed nav to initial state
TweenMax.set($('.c-nav-fixed'), {y:'-=80px', autoAlpha: 0});

// Animate in fixed nav when user scrolls to a certain point
let moduleSkillsOffset1;
if (pageId === 'index-page') {
  moduleSkillsOffset1 = $('#skills').offset().top + window.innerHeight - 100;
}

$(window).scroll(function (event) {
  let scroll = $(window).scrollTop();
  if (scroll > moduleSkillsOffset1) {
    TweenMax.to($('.c-nav-fixed'), 0.7, {y: '0', autoAlpha: 1, ease: Power3.easeInOut});

  } else {
    TweenMax.to($('.c-nav-fixed'), 0.7, {y: '-=80px', autoAlpha: 0, ease: Power3.easeInOut});
  }
});

/* Petel Hover -------------------- */

// Set default petel item on first nav item
TweenMax.set($('.c-nav-fixed .c-main-nav__item:first-child .g-petel__item'), {y: 0, autoAlpha: 1});

// Change change petel when nav item is clicked
$('.g-petel').click(function() {
  $('.g-petel').removeClass('is-active');
  TweenMax.to($('.g-petel__item'), 0.3, {y: '-=30px', autoAlpha: 0, ease: Power3.easeInOut});
  $(this).addClass('is-active');
  TweenMax.to($('.g-petel.is-active .g-petel__item'), 0.3, {y: 0, autoAlpha: 1, ease: Power3.easeInOut});
});

/* Adjust active nav item according to scroll current scroll position -------------------- */

let $window = $(window);
let isScrolling = false;

$window.scroll(function (event) {

  let skillsOffset = $('#skills').offset().top - 5;
  let skillsHeight = $('#skills').height();
  let impressionenOffset = $('#impressionen').offset().top - 5;
  let impressionenHeight = $('#impressionen').height();
  let teamOffset = $('#team').offset().top - 5;
  let teamHeight = $('#team').height();
  let contactOffset = $('#contact').offset().top - 5;
  let contactHeight = $('#contact').height();

  let scroll = $window.scrollTop();
  let windowHeight = $window.height();

  if (isScrolling == false) {

    if (scroll >= skillsOffset && scroll < (skillsOffset + skillsHeight)) { // First section

      $('.c-nav-fixed .c-main-nav__item .g-petel').removeClass('is-active');
      TweenMax.to($('.g-petel__item'), 0.3, {y: '-=30px', autoAlpha: 0, ease: Power3.easeInOut});
      $('.c-nav-fixed .c-main-nav__item:nth-child(2) .g-petel').addClass('is-active');
      TweenMax.to($('.g-petel.is-active .g-petel__item'), 0.3, {y: 0, autoAlpha: 1, ease: Power3.easeInOut});

    } else if (scroll >= impressionenOffset && scroll < (impressionenOffset + impressionenHeight)) { // Second section

      console.log(scroll);
      console.log(impressionenOffset);
      console.log(impressionenHeight);
      $('.c-nav-fixed .c-main-nav__item .g-petel').removeClass('is-active');
      TweenMax.to($('.g-petel__item'), 0.3, {y: '-=30px', autoAlpha: 0, ease: Power3.easeInOut});
      $('.c-nav-fixed .c-main-nav__item:nth-child(3) .g-petel').addClass('is-active');
      TweenMax.to($('.g-petel.is-active .g-petel__item'), 0.3, {y: 0, autoAlpha: 1, ease: Power3.easeInOut});

    } else if (scroll >= teamOffset && scroll < (teamOffset + teamHeight)) { // Third section

      $('.c-nav-fixed .c-main-nav__item .g-petel').removeClass('is-active');
      TweenMax.to($('.g-petel__item'), 0.3, {y: '-=30px', autoAlpha: 0, ease: Power3.easeInOut});
      $('.c-nav-fixed .c-main-nav__item:nth-child(4) .g-petel').addClass('is-active');
      TweenMax.to($('.g-petel.is-active .g-petel__item'), 0.3, {y: 0, autoAlpha: 1, ease: Power3.easeInOut});

    } else if (scroll >= contactOffset && scroll < (contactOffset + contactHeight)) { // Third section

      $('.c-nav-fixed .c-main-nav__item .g-petel').removeClass('is-active');
      TweenMax.to($('.g-petel__item'), 0.3, {y: '-=30px', autoAlpha: 0, ease: Power3.easeInOut});
      $('.c-nav-fixed .c-main-nav__item:nth-child(5) .g-petel').addClass('is-active');
      TweenMax.to($('.g-petel.is-active .g-petel__item'), 0.3, {y: 0, autoAlpha: 1, ease: Power3.easeInOut});

    } else if (scroll >= contactOffset) { // Fourth section

      // $('.c-nav-fixed .c-main-nav__item .g-petel').removeClass('is-active');
      // TweenMax.to($('.g-petel__item'), 0.3, {y: '-=30px', autoAlpha: 0, ease: Power3.easeInOut});
      // $('.c-nav-fixed .c-main-nav__item:nth-child(5) .g-petel').addClass('is-active');
      // TweenMax.to($('.g-petel.is-active .g-petel__item'), 0.3, {y: 0, autoAlpha: 1, ease: Power3.easeInOut});

    }
  }
});
