
import $ from 'jquery';

/* Leaf Animation -------------------- */

let density = 26,
  speed = 0.6,
  winWidth = $(window).width(),
  winHeight = $(window).height(),
  end = {yMin:-winHeight/50-25, yMax:-winHeight/50-25, xMin:600, xMax:750, scaleMin:0.3, scaleMax:0.6, opacityMin:0, opacityMax:0},
  mid = {yMin:-winHeight/50-500, yMax:-winHeight/50-400, xMin:220, xMax:600, scaleMin:0.3, scaleMax:0.6, opacityMin:0.1, opacityMax:0.25},
  start = {yMin:-winHeight/50-790, yMax:-winHeight/50-900, xMin:-100, xMax:-20, scaleMin:0.3, scaleMax:0.6, opacityMin:0.05, opacityMax:0.15};

export function range(map, prop) {
  let min = map[prop + "Min"],
    max = map[prop + "Max"];
  return min + (max - min) * Math.random();
}

export function spawn(particle) {
  let wholeDuration = (10 / speed) * (0.7 + Math.random() * 0.4),
    delay = wholeDuration * Math.random(),
    partialDuration = (wholeDuration + 1) * (0.3 + Math.random() * 0.4);

  //set the starting values
  TweenLite.set(particle, {y:range(start, "y"), x:range(start, "x"), scale:range(start, "scale"), opacity:range(start, "opacity"), visibility:"hidden"});

  //the y tween should be continuous and smooth the whole duration
  TweenLite.to(particle, wholeDuration, {delay:delay, rotation: '+=900', y:range(end, "y"), ease:Linear.easeNone});

  //now tween the x independently so that it looks more randomized (rather than linking it with scale/opacity changes too)
  TweenLite.to(particle, partialDuration, {delay:delay, x:range(mid, "x"), ease:Power1.easeOut});
  TweenLite.to(particle, wholeDuration - partialDuration, {delay:partialDuration + delay, x:range(end, "x"), ease:Power1.easeIn});

  //now create some random scale and opacity changes
  partialDuration = wholeDuration * (0.5 + Math.random() * 0.3);
  TweenLite.to(particle, partialDuration, {delay:delay, scale:range(mid, "scale"), autoAlpha:range(mid, "opacity"), ease:Linear.easeNone});
  TweenLite.to(particle, wholeDuration - partialDuration, {delay:partialDuration + delay, scale:range(end, "scale"), autoAlpha:range(end, "opacity"), ease:Linear.easeNone, onComplete:spawn, onCompleteParams:[particle]});
}

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

$(window).ready(function() {
  console.log($(window).height());
  if ($(window).width() > 760) {
    let body = $(".header"),
    i, particle;
    for (i = 0; i < density; i++) {
      spawn( $("<div />", {id:"particle"+i}).addClass("i-particle").appendTo('header') );
    }
  }
});

