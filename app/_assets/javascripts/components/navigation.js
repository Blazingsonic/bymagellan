
import $ from 'jquery';
import _ from 'lodash';

let pageId = $('main').attr('id');

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
  $('.c-nav-right__menu-wrap').addClass('is-mobile');
}

$('.i-menu--mobile').click(function() {
  // console.log('debug');
  // $('.i-search--mobile').toggle();
  // $('.c-nav-right__menu-wrap').toggleClass('u-bg-black');
});

$('.site-overlay').click(function() {

  $('.gh-svg-wrapper').toggleClass('is-active');

  if ($(window).width() < 1113) {
    // $('#fixed-nav .i-search').toggle();
  }
});

$('.gh-svg-wrapper').click(function() {
  $('.gh-svg-wrapper').toggleClass('is-active');
});

$('.c-nav-right__menu-wrap .gh-svg-wrapper').click(function() {
  if ($(window).width() < 1113) {
    // $('#fixed-nav .i-search').toggle();
  }
});

$(window).resize(function() {
  if ($(window).width() < 1113) {
    // $('.c-nav-fixed .i-search').hide();
    $('.c-nav-right__menu-wrap').addClass('is-mobile');
  } else {
    // $('.i-search').show();
    $('.c-nav-right__menu-wrap').removeClass('is-mobile');
  }
});

/* Fixed Nav -------------------- */

// Set fixed nav to initial state
TweenMax.set($('.c-nav-fixed'), {y:'-=80px', autoAlpha: 0});

// Animate in fixed nav when user scrolls to a certain point
let moduleSkillsOffset;
let projectPageImgOffset;
if (pageId === 'index-page') {
  moduleSkillsOffset = $('#skills').offset().top + window.innerHeight * 17/20;
} else if (pageId === 'project-page') {
  projectPageImgOffset = window.innerHeight - 200;
}

$(window).scroll(_.debounce(function (event) {
  let scroll = $(window).scrollTop();
  if (scroll > moduleSkillsOffset || scroll > projectPageImgOffset) {
    TweenMax.to($('.c-nav-fixed'), 0.7, {y: '0', autoAlpha: 1, ease: Power3.easeInOut});

  } else {
    TweenMax.to($('.c-nav-fixed'), 0.7, {y: '-=80px', autoAlpha: 0, ease: Power3.easeInOut});
  }
}, 100));

/* Petel Hover -------------------- */

// Set default petel item on first nav item
if (pageId === 'index-page') {
  TweenMax.set($('.c-main-nav__item:first-child .g-petel__item'), {y: 0, autoAlpha: 1});

  // Change change petel when nav item is clicked
  $('.c-nav-fixed .g-petel').click(function() {
    $('.c-nav-fixed .g-petel').removeClass('is-active');
    TweenMax.to($('.c-nav-fixed .g-petel__item'), 0.3, {y: '-=30px', autoAlpha: 0, ease: Power3.easeInOut});
    $(this).addClass('is-active');
    TweenMax.to($('.c-nav-fixed .g-petel.is-active .g-petel__item'), 0.3, {y: 0, autoAlpha: 1, ease: Power3.easeInOut});
  });
} else if (pageId === 'project-page') {
  TweenMax.set($('.c-main-nav__item:nth-child(3) .g-petel__item'), {y: 0, autoAlpha: 1});
}

/* Adjust active nav item according to scroll current scroll position -------------------- */

let $window = $(window);
let isScrolling = false;

$window.scroll(_.debounce(function (event) {

  if (pageId === 'index-page') {

    // console.log('efwefwefwefewfw');

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
        TweenMax.to($('.c-nav-fixed .g-petel__item'), 0.3, {y: '-=30px', autoAlpha: 0, ease: Power3.easeInOut});
        $('.c-nav-fixed .c-main-nav__item:nth-child(2) .g-petel').addClass('is-active');
        TweenMax.to($('.c-nav-fixed .g-petel.is-active .g-petel__item'), 0.3, {y: 0, autoAlpha: 1, ease: Power3.easeInOut});

      } else if (scroll >= impressionenOffset && scroll < (impressionenOffset + impressionenHeight)) { // Second section

        $('.c-nav-fixed .c-main-nav__item .g-petel').removeClass('is-active');
        TweenMax.to($('.c-nav-fixed .g-petel__item'), 0.3, {y: '-=30px', autoAlpha: 0, ease: Power3.easeInOut});
        $('.c-nav-fixed .c-main-nav__item:nth-child(3) .g-petel').addClass('is-active');
        TweenMax.to($('.c-nav-fixed .g-petel.is-active .g-petel__item'), 0.3, {y: 0, autoAlpha: 1, ease: Power3.easeInOut});

      } else if (scroll >= teamOffset && scroll < (teamOffset + teamHeight)) { // Third section

        $('.c-nav-fixed .c-main-nav__item .g-petel').removeClass('is-active');
        TweenMax.to($('.c-nav-fixed .g-petel__item'), 0.3, {y: '-=30px', autoAlpha: 0, ease: Power3.easeInOut});
        $('.c-nav-fixed .c-main-nav__item:nth-child(4) .g-petel').addClass('is-active');
        TweenMax.to($('.c-nav-fixed .g-petel.is-active .g-petel__item'), 0.3, {y: 0, autoAlpha: 1, ease: Power3.easeInOut});

      } else if (scroll >= contactOffset && scroll < (contactOffset + contactHeight)) { // Third section

        $('.c-nav-fixed .c-main-nav__item .g-petel').removeClass('is-active');
        TweenMax.to($('.c-nav-fixed .g-petel__item'), 0.3, {y: '-=30px', autoAlpha: 0, ease: Power3.easeInOut});
        $('.c-nav-fixed .c-main-nav__item:nth-child(5) .g-petel').addClass('is-active');
        TweenMax.to($('.c-nav-fixed .g-petel.is-active .g-petel__item'), 0.3, {y: 0, autoAlpha: 1, ease: Power3.easeInOut});

      } else if (scroll >= contactOffset) { // Fourth section

        // $('.c-nav-fixed .c-main-nav__item .g-petel').removeClass('is-active');
        // TweenMax.to($('.g-petel__item'), 0.3, {y: '-=30px', autoAlpha: 0, ease: Power3.easeInOut});
        // $('.c-nav-fixed .c-main-nav__item:nth-child(5) .g-petel').addClass('is-active');
        // TweenMax.to($('.g-petel.is-active .g-petel__item'), 0.3, {y: 0, autoAlpha: 1, ease: Power3.easeInOut});

      }
    }
  }

}, 100));

/* Set links in navigation -------------------- */

if (pageId === 'index-page') {

} else if (pageId === 'project-page') {
  // Main Nav
  $('.c-main-nav__item:first-child a').attr('href', 'https://bymagellan.co/#start');
  $('.c-main-nav__item:nth-child(2) a').attr('href', 'https://bymagellan.co/#skills');
  $('.c-main-nav__item:nth-child(3) a').attr('href', 'https://bymagellan.co/#impressionen');
  $('.c-main-nav__item:nth-child(4) a').attr('href', 'https://bymagellan.co/#team');
  $('.c-main-nav__item:nth-child(5) a').attr('href', 'https://bymagellan.co/#kontakt');

  // Pushy Menu
  $('.pushy-link:first-child a').attr('href', 'https://bymagellan.co/#start');
  $('.pushy-link:nth-child(2) a').attr('href', 'https://bymagellan.co/#skills');
  $('.pushy-link:nth-child(3) a').attr('href', 'https://bymagellan.co/#impressionen');
  $('.pushy-link:nth-child(4) a').attr('href', 'https://bymagellan.co/#team');
  $('.pushy-link:nth-child(5) a').attr('href', 'https://bymagellan.co/#kontakt');
}



















