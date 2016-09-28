// (c) Sebastian Saier

import $ from 'jquery';
import { TweenMax, TimelineMax } from 'gsap';
import slickSlider from 'slick-carousel';
import { lineAnimationSet, lineAnimation } from './components/line-animation';
import { range, spawn } from './components/leaf-animation';
import { updateProjectCards } from './components/project-cards';
import { animateMenuIcon } from './components/navigation';
import { setMinHeight } from './components/min-height';
import { lineAnimationSetAll, lineAnimationExcecuteAll } from './components/skills';
import { contactItemClick } from './components/contact';
import remodal from 'remodal'

// ==========================================================================
// Variables
// ==========================================================================

// General

// URL

// let currentUrl = document.location.pathname.match(/[^\/]+$/)[0];


// ==========================================================================
// Tests
// ==========================================================================

console.log('This is a test');


// ==========================================================================
// Navigation
// ==========================================================================

// Animate menu icon on click events
$('.site-overlay, .i-menu, .i-menu--mobile').click(function() {
  animateMenuIcon();
});


// ==========================================================================
// Document Classes
// ==========================================================================

// Min Height
$(document).ready(function() {
  setMinHeight();
});
$(window).resize(function() {
  setMinHeight();
});


// ==========================================================================
// SVG
// ==========================================================================

// Load SVG sprite
$.get('assets/images/sprite/svg.svg', function(data) {
    let div = document.createElement('div');
    div.className += 'hide-svg-defs';
    div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
  document.body.insertBefore(div, document.body.childNodes[0]);
});


// ==========================================================================
// Smoothscroll
// ==========================================================================

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      let target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


// ==========================================================================
// Slick Slider
// ==========================================================================

$(document).ready(function() {
  $('.js-slick').slick({
    autoplay: false,
    speed: 1000,
    dots: true,
    arrows: false
  });
});


// ==========================================================================
// Skills Module
// ==========================================================================

/* Animate Lines on Scroll -------------------- */

// Set variables
let moduleSkillsHeight = $('#skills').height();
let moduleSkillsOffset = $('#skills').offset().top + 500;
let skillsScroll = false;

// Set all lines
lineAnimationSetAll();

// Animate lines when user scrolls to a certain point
$(window).scroll(function (event) {

  let scroll = $(window).scrollTop();

  if (scroll > moduleSkillsOffset && !skillsScroll) {
    // TweenMax.staggerTo($skillsOverview, 1,  {x: '0', autoAlpha: 1}, 0.25);
    lineAnimationExcecuteAll();
    skillsScroll = true;
  }
});


// ==========================================================================
// Projects Module
// ==========================================================================

// Set variables
let $bulletItemImpr = $('#impressionen .o-bullet__item');

// Update Project Cards on click
$(document).ready(function() {
  $bulletItemImpr.click(function() {
    let id = $(this).attr('id');
    $bulletItemImpr.removeClass('is-active');
    $(this).addClass('is-active');
    updateProjectCards(id);
  });
});


// ==========================================================================
// Contact Module
// ==========================================================================

$('.c-contact__item').on('click', function() {
  let id = $(this).attr('id');
  contactItemClick(id);

  $('.c-contact__item').removeClass('is-active');
  $(this).addClass('is-active');
});


// ==========================================================================
// Team Module
// ==========================================================================

// let moduleTeamOffset = $('#team').offset().top + 50;
// let teamScroll = false;
// CSSPlugin.defaultTransformPerspective = 1000;

// // Set the backface
// TweenMax.set($(".c-card-prof"), {rotationY:-180, autoAlpha: 0});

// // Animate when user scrolls to a certain point
// $(window).scroll(function (event) {
//  let scroll = $(window).scrollTop();
//  if (scroll > moduleTeamOffset && !teamScroll) {
//    let frontCards = $('.c-card-prof');
//     // backCard = $(this).children(".cardBack"),
//     let profileCardTl = new TimelineMax();

//    profileCardTl
//      .staggerTo(frontCards, 2, {rotationY:0, autoAlpha: 1, ease: Power3.easeInOut}, 0.5);

//    teamScroll = true;
//  }
// });


// ==========================================================================
// Misc
// ==========================================================================

/* Pushy -------------------- */

!function(a){function b(){g.hasClass(k)?h.toggleClass(l):h.toggleClass(m)}function c(){g.hasClass(k)?(h.addClass(l),g.animate({left:"0px"},p),i.animate({left:q},p),j.animate({left:q},p)):(h.addClass(m),g.animate({right:"0px"},p),i.animate({right:q},p),j.animate({right:q},p))}function d(){g.hasClass(k)?(h.removeClass(l),g.animate({left:"-"+q},p),i.animate({left:"0px"},p),j.animate({left:"0px"},p)):(h.removeClass(m),g.animate({right:"-"+q},p),i.animate({right:"0px"},p),j.animate({right:"0px"},p))}function e(){a(r).addClass(t),a(r).on("click",function(){var b=a(this);b.hasClass(t)?(a(r).addClass(t).removeClass(s),b.removeClass(t).addClass(s)):b.addClass(t).removeClass(s)})}function f(){a(r).addClass(t),u.children("a").on("click",function(b){b.preventDefault(),a(this).toggleClass(s).next(".pushy-submenu ul").slideToggle(200).end().parent(r).siblings(r).children("a").removeClass(s).next(".pushy-submenu ul").slideUp(200)})}var g=a(".pushy"),h=a("body"),i=a("#container"),j=a(".push"),k="pushy-left",l="pushy-open-left",m="pushy-open-right",n=a(".site-overlay"),o=a(".menu-btn, .pushy-link"),p=200,q=g.width()+"px",r=".pushy-submenu",s="pushy-submenu-open",t="pushy-submenu-closed",u=a(r),v=function(){var a=document.createElement("p"),b=!1,c={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.insertBefore(a,null);for(var d in c)void 0!==a.style[d]&&(a.style[d]="translate3d(1px,1px,1px)",b=window.getComputedStyle(a).getPropertyValue(c[d]));return document.body.removeChild(a),void 0!==b&&b.length>0&&"none"!==b}();if(v)g.css({visibility:"visible"}),e(),o.on("click",function(){b()}),n.on("click",function(){b()});else{h.addClass("no-csstransforms3d"),g.hasClass(k)?g.css({left:"-"+q}):g.css({right:"-"+q}),g.css({visibility:"visible"}),i.css({"overflow-x":"hidden"});var w=!1;f(),o.on("click",function(){w?(d(),w=!1):(c(),w=!0)}),n.on("click",function(){w?(d(),w=!1):(c(),w=!0)})}}($);


























