
import $ from 'jquery';
import { lineAnimationSet, lineAnimation } from '../components/line-animation';

// ==========================================================================
// Line Animations
// ==========================================================================

// let $skillsOverview = $('.c-show-skills__figure');

// Set variables
let backendFrame = document.querySelector('#backend-frame');
let backendMiddle = document.querySelector('#backend-middle');
let frontendFrame = document.querySelector('#frontend-frame');
let frontendStand = document.querySelector('#frontend-stand');
let perfFrame = document.querySelector('#perf-frame');
let perf1 = document.querySelector('#perf-1');
let perf2 = document.querySelector('#perf-2');
let perf3 = document.querySelector('#perf-3');
let perf4 = document.querySelector('#perf-4');
let seoFrame = document.querySelector('#seo-frame');
let seo1 = document.querySelector('#seo-1');
let seo2 = document.querySelector('#seo-2');
let seo3 = document.querySelector('#seo-3');
let seo4 = document.querySelector('#seo-4');

// Set all animations
export function lineAnimationSetAll() {
  lineAnimationSet(backendFrame);
  lineAnimationSet(backendMiddle);
  lineAnimationSet(frontendFrame);
  lineAnimationSet(frontendStand);
  lineAnimationSet(perfFrame);
  lineAnimationSet(perf1);
  lineAnimationSet(perf2);
  lineAnimationSet(perf3);
  lineAnimationSet(perf4);
  lineAnimationSet(seoFrame);
  lineAnimationSet(seo1);
  lineAnimationSet(seo2);
  lineAnimationSet(seo3);
  lineAnimationSet(seo4);
}

// Excecute all animations
export function lineAnimationExcecuteAll() {
  lineAnimation(backendFrame);
  lineAnimation(backendMiddle);
  lineAnimation(frontendFrame);
  lineAnimation(frontendStand);
  lineAnimation(perfFrame);
  lineAnimation(perf1);
  lineAnimation(perf2);
  lineAnimation(perf3);
  lineAnimation(perf4);
  lineAnimation(seoFrame);
  lineAnimation(seo1);
  lineAnimation(seo2);
  lineAnimation(seo3);
  lineAnimation(seo4);
}

// Set default for position of skills overview
// TweenMax.set($skillsOverview, {x: '-=50', autoAlpha: 0});


// ==========================================================================
// Skills Interaction
// ==========================================================================

// Set variables and texts
let $sep = $('.c-show-skills__sep');
let $desc = $('.c-show-skills__desc');

let frontendText = 'Als Frontendbereich einer Website oder App wird zusammenfassend alles kategorisiert, was der Besucher bei normaler Benutzung sie. Hier setzen wir unser ganzes Fachwissen ein, um schlanken und responsiven Code zu entwickeln, der auf einer breiten Anzahl an Geräten skillsatibel ist und flink lädt sowie die konzipierte Gestaltung bestmöglich widerspiegelt und eine tolle Benutzererfahrung garantiert. Wir arbeiten mit folgenden Technologien: HTML5, CSS3, jQuery & SASS';
let backendText = 'Als Backendbereich einer Website oder App wird zusammenfassend alles kategorisiert, was der Besucher bei normaler Benutzung sie. Hier setzen wir unser ganzes Fachwissen ein, um schlanken und responsiven Code zu entwickeln, der auf einer breiten Anzahl an Geräten skillsatibel ist und flink lädt sowie die konzipierte Gestaltung bestmöglich widerspiegelt und eine tolle Benutzererfahrung garantiert. Wir arbeiten mit folgenden Technologien: HTML5, CSS3, jQuery & SASS';
let performanceText = 'Als Performance einer Website oder App wird zusammenfassend alles kategorisiert, was der Besucher bei normaler Benutzung sie. Hier setzen wir unser ganzes Fachwissen ein, um schlanken und responsiven Code zu entwickeln, der auf einer breiten Anzahl an Geräten skillsatibel ist und flink lädt sowie die konzipierte Gestaltung bestmöglich widerspiegelt und eine tolle Benutzererfahrung garantiert. Wir arbeiten mit folgenden Technologien: HTML5, CSS3, jQuery & SASS';
let seoText = 'Als Seo einer Website oder App wird zusammenfassend alles kategorisiert, was der Besucher bei normaler Benutzung sie. Hier setzen wir unser ganzes Fachwissen ein, um schlanken und responsiven Code zu entwickeln, der auf einer breiten Anzahl an Geräten skillsatibel ist und flink lädt sowie die konzipierte Gestaltung bestmöglich widerspiegelt und eine tolle Benutzererfahrung garantiert. Wir arbeiten mit folgenden Technologien: HTML5, CSS3, jQuery & SASS';

let skillsState = 'init';

// Open skills and show details
$(document).ready(function() {

  // If overview element is clicked, show detailed information
  $('.c-show-skills__figure').on('click', function() {
    let $elem = $(this);
    let $allElems = $('.c-show-skills__figure');
    let openSkillsTl = new TimelineMax();

    openSkillsTl
      .to($allElems, 0.5, {x: '+=50', autoAlpha: 0, display: 'none'})
      .to($elem, 0.2, {autoAlpha: 0, ease:Power4.easeInOut}, '-=0.4')
      // remove init classes
      //.set($('.c-skills'), {className: '-=c-skills--init'}) // no class given
      .set($('.c-sub-skills'), {className: '-=is-initial', height: 'initial', autoAlpha: 1})
      .set($('.c-show-skills'), {className: '-=is-initial'})
      .set($elem, {x: 0, display: ''})
      .to($elem, 1, {autoAlpha: 1, ease: Power4.easeInOut})
      .to($desc, 1, {autoAlpha: 1, ease: Power4.easeInOut}, '-=0.4');

    skillsState = 'opened';
  });

  // If sub link of skills is clicked, switch out the information shown
  $('.c-sub-skills__item').on('click', function() {
    let descTextTl = new TimelineMax();
    let descNewText = 'description text';

    $(this).siblings().removeClass('is-active');
    $(this).addClass('is-active');

    if ($(this).text().toLowerCase() == 'frontend') {
      descNewText = frontendText;
    }
    if ($(this).text().toLowerCase() == 'backend') {
      descNewText = backendText;
    }
    if ($(this).text().toLowerCase() == 'performance') {
      descNewText = performanceText;
    }
    if ($(this).text().toLowerCase() == 'seo') {
      descNewText = seoText;
    }

    descTextTl
      .to($desc, 0.5, {x: '+=50', autoAlpha: 0, ease:Power4.easeInOut})
      .set($desc, {x: 0, text: descNewText})
      .to($desc, 0.75, {autoAlpha: 1});
  });

  // If main link of skills is clicked, switch out sub menu links and the information shown
  $('#skills-bullet .o-bullet__item').on('click', function() {
    let switchSkillsTl = new TimelineMax();

    $('#skills-bullet .o-bullet__item').removeClass('is-active');
    $(this).addClass('is-active');

    // If skills is in opened--state switch out sub links and information shown
    if (skillsState == 'opened') {
      console.log('was opened');
      switchSkillsTl
        .to($('.c-show-skills'), 0.25, {autoAlpha: 0})
        // .set($('.c-show-skills__desc u-m-0'), {text: "vev evewv ewvev"})
        .to($('.c-show-skills'), 0.25, {autoAlpha: 1}, '+=0.35')
    }

    // If skills is in init--state just switch out the overviews
    if (skillsState == "init") {
      console.log('was init');
      switchSkillsTl
        .to($('.c-show-skills__figure'), 0.5, {x: '+=50', autoAlpha: 0, display: 'none', ease: Power4.easeInOut})
        .to($('.c-show-skills__figure'), 0.5, {x: 0, autoAlpha: 1, display: '', ease: Power4.easeInOut}, '-=0.05');
    }
  });
});
