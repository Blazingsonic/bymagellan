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
import remodal from 'remodal';
import _ from 'lodash';
// import stickykit from 'sticky-kit';

// ==========================================================================
// Variables
// ==========================================================================

// General

// URL
const pageId = $('main').attr('id');
console.log(pageId);

// let currentUrl = document.location.pathname.match(/[^\/]+$/)[0];


// ==========================================================================
// Tests and Checks
// ==========================================================================

// Initial Test
console.log('This is a test');

/* Detect if user is on a mobile device (smartphone and tablet) -------------------- */

// Initiate as false
var isMobile = false;

// Device Detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;


// ==========================================================================
// Document Classes
// ==========================================================================

let windowHeightInitial = window.innerHeight;

// Min Height
$(document).ready(function() {
  setMinHeight(windowHeightInitial);
});
$(window).resize(function(windowHeightInitial) {
  if (!isMobile) {
    windowHeightInitial = window.innerHeight;
  }
  setMinHeight(windowHeightInitial);
});


// ==========================================================================
// Navigation
// ==========================================================================

// Animate menu icon on click events
$('.site-overlay, .i-menu, .i-menu--mobile').click(function() {
  animateMenuIcon();
});

// ==========================================================================
// Project Page Showroomm Offset
// ==========================================================================

$(document).ready(function() {

if (pageId === 'project-page') {
  let heroStaticTitleOffset = $('.c-hero--static__title').offset().top;
  let heroStaticTitleHeight = $('.c-hero--static__title').height();
  let windowHeightPage = window.innerHeight;
  let showRoomTop = heroStaticTitleOffset + 200;
  console.log('showrromtop' + showRoomTop);

  $('.c-showroom').offset({top: showRoomTop});
}

});

$(window).resize(function() {

if (pageId === 'project-page') {
  let heroStaticTitleOffset = $('.c-hero--static__title').offset().top;
  let heroStaticTitleHeight = $('.c-hero--static__title').height();
  let windowHeightPage = window.innerHeight;
  let showRoomTop = heroStaticTitleOffset + 200;
  console.log('showrromtop' + showRoomTop);

  $('.c-showroom').offset({top: showRoomTop});
}
});


// ==========================================================================
// SVG
// ==========================================================================

let svgPath;

// Load SVG sprite
if (pageId === 'index-page') {
  svgPath = '../bymagellan/assets/images/sprite/svg.svg' // deploy gh pages
  // svgPath = '../../assets/images/sprite/svg.svg' // local
} else {
  svgPath = '../../assets/images/sprite/svg.svg' // both
}

$.get(svgPath, function(data) {
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
let moduleSkillsOffset;
if (pageId === 'index-page') {
  moduleSkillsOffset = $('#skills').offset().top + 500;
}
let skillsScroll = false;

// Set all lines
lineAnimationSetAll();

// Animate lines when user scrolls to a certain point
$(window).scroll(_.debounce(function (event) {

  let scroll = $(window).scrollTop();

  if (scroll > moduleSkillsOffset && !skillsScroll) {
    // TweenMax.staggerTo($skillsOverview, 1,  {x: '0', autoAlpha: 1}, 0.25);
    lineAnimationExcecuteAll();
    skillsScroll = true;
  }
}, 100));


// ==========================================================================
// Projects Module
// ==========================================================================

// Set variables
let $bulletItemImpr = $('#impressionen .o-bullet__item');
let $loadMore = $('.c-card-proj__more');
let loadState = 0;

// Update Project Cards on click
$(document).ready(function() {
  $bulletItemImpr.click(function() {
    let id = $(this).attr('id');
    if (pageId === 'index-page' && id === 'bullet-web') {
      loadState = 0;
      $bulletItemImpr.removeClass('is-active');
      $(this).addClass('is-active');
      updateProjectCards(id, loadState);
    }
  });
  $loadMore.click(function(e) {
    e.preventDefault();
    loadState += 1;
    let id = $('#impressionen .o-bullet__item.is-active').attr('id');
    updateProjectCards(id, loadState);
  });
});


// ==========================================================================
// Contact Module
// ==========================================================================

$('.c-contact__item').on('click', function() {


  if (!$('#card-contact-container').hasClass('is-animating')) {
    console.log('should not have a class');
    $('#card-contact-container').addClass('is-animating');
    let id = $(this).attr('id');
    contactItemClick(id);

    $('.c-contact__item').removeClass('is-active');
    $(this).addClass('is-active');

    if ($(window).width() < 595) {
      $('html,body').animate({scrollTop: $('#card-contact-container').offset().top - 150},'slow');
    }

    _.delay(function() {
      $('#card-contact-container').removeClass('is-animating');
    }, 1000)
  }
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
// Fixed Widget
// ==========================================================================

// $("#widget-font").stick_in_parent();


// ==========================================================================
// Misc
// ==========================================================================

/* Pushy -------------------- */

!function(a){function b(){g.hasClass(k)?h.toggleClass(l):h.toggleClass(m)}function c(){g.hasClass(k)?(h.addClass(l),g.animate({left:"0px"},p),i.animate({left:q},p),j.animate({left:q},p)):(h.addClass(m),g.animate({right:"0px"},p),i.animate({right:q},p),j.animate({right:q},p))}function d(){g.hasClass(k)?(h.removeClass(l),g.animate({left:"-"+q},p),i.animate({left:"0px"},p),j.animate({left:"0px"},p)):(h.removeClass(m),g.animate({right:"-"+q},p),i.animate({right:"0px"},p),j.animate({right:"0px"},p))}function e(){a(r).addClass(t),a(r).on("click",function(){var b=a(this);b.hasClass(t)?(a(r).addClass(t).removeClass(s),b.removeClass(t).addClass(s)):b.addClass(t).removeClass(s)})}function f(){a(r).addClass(t),u.children("a").on("click",function(b){b.preventDefault(),a(this).toggleClass(s).next(".pushy-submenu ul").slideToggle(200).end().parent(r).siblings(r).children("a").removeClass(s).next(".pushy-submenu ul").slideUp(200)})}var g=a(".pushy"),h=a("body"),i=a("#container"),j=a(".push"),k="pushy-left",l="pushy-open-left",m="pushy-open-right",n=a(".site-overlay"),o=a(".menu-btn, .pushy-link"),p=200,q=g.width()+"px",r=".pushy-submenu",s="pushy-submenu-open",t="pushy-submenu-closed",u=a(r),v=function(){var a=document.createElement("p"),b=!1,c={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.insertBefore(a,null);for(var d in c)void 0!==a.style[d]&&(a.style[d]="translate3d(1px,1px,1px)",b=window.getComputedStyle(a).getPropertyValue(c[d]));return document.body.removeChild(a),void 0!==b&&b.length>0&&"none"!==b}();if(v)g.css({visibility:"visible"}),e(),o.on("click",function(){b()}),n.on("click",function(){b()});else{h.addClass("no-csstransforms3d"),g.hasClass(k)?g.css({left:"-"+q}):g.css({right:"-"+q}),g.css({visibility:"visible"}),i.css({"overflow-x":"hidden"});var w=!1;f(),o.on("click",function(){w?(d(),w=!1):(c(),w=!0)}),n.on("click",function(){w?(d(),w=!1):(c(),w=!0)})}}($);


























