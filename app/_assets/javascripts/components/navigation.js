
import $ from 'jquery';

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

$('.i-menu--mobile').click(function() {
  console.log('debug');
  $('.i-search--mobile').toggleClass('u-transparent');
  $('.c-nav-right__menu-wrap').toggleClass('u-bg-black');
});

$('.site-overlay').click(function() {
  if ($(window).width() < 1113) {
    $('.i-search--mobile').toggleClass('u-transparent');
    $('.c-nav-right__menu-wrap').toggleClass('u-bg-black');
  }
});

/* Fixed Nav -------------------- */

// Set fixed nav to initial state
TweenMax.set($('.c-nav-fixed'), {y:'-=80px', autoAlpha: 0});

// Animate in fixed nav when user scrolls to a certain point
let moduleSkillsOffset1 = $('#skills').offset().top + window.innerHeight - 100;

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

const skillsOffset = $('#skills').offset().top + $('#skills').height() / 2;
const impressionenOffset = $('#impressionen').offset().top + $('#impressionen').height() / 2;
const teamOffset = $('#team').offset().top + $('#team').height() / 2;
const contactOffset = $('#contact').offset().top + $('#contact').height() / 2;

let isScrolling = false;

$(window).scroll(function (event) {
    const scroll = $(window).scrollTop();

    console.log(scroll);

    if (isScrolling == false) {

      if (scroll < skillsOffset - 1) { // First section

        $('.c-nav-fixed .c-main-nav__item .g-petel').removeClass('is-active');
        TweenMax.to($('.g-petel__item'), 0.3, {y: '-=30px', autoAlpha: 0, ease: Power3.easeInOut});
        $('.c-nav-fixed .c-main-nav__item:nth-child(1) .g-petel').addClass('is-active');
        TweenMax.to($('.g-petel.is-active .g-petel__item'), 0.3, {y: 0, autoAlpha: 1, ease: Power3.easeInOut});

      } else if (scroll >= skillsOffset && scroll < impressionenOffset) { // Second section

        console.log('scrolling');
        $('.c-nav-fixed .c-main-nav__item .g-petel').removeClass('is-active');
        TweenMax.to($('.g-petel__item'), 0.3, {y: '-=30px', autoAlpha: 0, ease: Power3.easeInOut});
        $('.c-nav-fixed .c-main-nav__item:nth-child(2) .g-petel').addClass('is-active');
        TweenMax.to($('.g-petel.is-active .g-petel__item'), 0.3, {y: 0, autoAlpha: 1, ease: Power3.easeInOut});

      } else if (scroll >= impressionenOffset && scroll < teamOffset) { // Third section

        $('.c-nav-fixed .c-main-nav__item .g-petel').removeClass('is-active');
        TweenMax.to($('.g-petel__item'), 0.3, {y: '-=30px', autoAlpha: 0, ease: Power3.easeInOut});
        $('.c-nav-fixed .c-main-nav__item:nth-child(3) .g-petel').addClass('is-active');
        TweenMax.to($('.g-petel.is-active .g-petel__item'), 0.3, {y: 0, autoAlpha: 1, ease: Power3.easeInOut});

      } else if (scroll >= teamOffset && scroll < contactOffset) { // Third section

        $('.c-nav-fixed .c-main-nav__item .g-petel').removeClass('is-active');
        TweenMax.to($('.g-petel__item'), 0.3, {y: '-=30px', autoAlpha: 0, ease: Power3.easeInOut});
        $('.c-nav-fixed .c-main-nav__item:nth-child(4) .g-petel').addClass('is-active');
        TweenMax.to($('.g-petel.is-active .g-petel__item'), 0.3, {y: 0, autoAlpha: 1, ease: Power3.easeInOut});

      } else if (scroll >= contactOffset) { // Fourth section

        $('.c-nav-fixed .c-main-nav__item .g-petel').removeClass('is-active');
        TweenMax.to($('.g-petel__item'), 0.3, {y: '-=30px', autoAlpha: 0, ease: Power3.easeInOut});
        $('.c-nav-fixed .c-main-nav__item:nth-child(5) .g-petel').addClass('is-active');
        TweenMax.to($('.g-petel.is-active .g-petel__item'), 0.3, {y: 0, autoAlpha: 1, ease: Power3.easeInOut});

      }
    }
});
