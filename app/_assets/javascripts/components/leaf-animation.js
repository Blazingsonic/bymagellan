
import $ from 'jquery';

/* Leaf Animation -------------------- */

$(document).ready(function() {

});

let density = 24,
  speed = 0.4,
  winWidth = $(window).width(),
  winHeight = $(window).height(),
  end = {yMin:-winHeight/2.1, yMax:-winHeight/2.6, xMin:490, xMax:580, scaleMin:0.3, scaleMax:0.48, opacityMin:0, opacityMax:0},
  mid = {yMin:-winHeight/1.5, yMax:-winHeight/2, xMin:160, xMax:400, scaleMin:0.3, scaleMax:0.48, opacityMin:0.1, opacityMax:0.25},
  start = {yMin:-winHeight - (winHeight/8), yMax:-winHeight + (winHeight/8), xMin:-120, xMax:-20, scaleMin:0.3, scaleMax:0.48, opacityMin:0.05, opacityMax:0.15};
console.log(`header ${winHeight}`);
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
  if ($(window).width() > 800) {
    let body = $(".header"),
    i, particle;
    for (i = 0; i < density; i++) {
      // spawn( $("<div />", {id:"particle"+i}).addClass("i-particle").appendTo('.e-header') );
    }
  }
});

/* Leaf Animation Menu -------------------- */

let densityMenu = 12,
  speedMenu = 0.55,
  winWidthMenu = $(window).width(),
  winHeightMenu = $(window).height(),
  endMenu = {yMin:-80, yMax:-45, xMin:135, xMax:150, scaleMin:0.21, scaleMax:0.21, opacityMin:0, opacityMax:0},
  midMenu = {yMin:-85, yMax:-50, xMin:65, xMax:125, scaleMin:0.21, scaleMax:0.21, opacityMin:0.1, opacityMax:0.25},
  startMenu = {yMin:-90, yMax:-50, xMin:-25, xMax:10, scaleMin:0.21, scaleMax:0.21, opacityMin:0, opacityMax:0};

export function rangeMenu(map, prop) {
  let min = map[prop + "Min"],
    max = map[prop + "Max"];
  return min + (max - min) * Math.random();
}

export function spawnMenu(particle) {
  let wholeDuration = (10 / speedMenu) * (0.7 + Math.random() * 0.4),
    delay = wholeDuration * Math.random(),
    partialDuration = (wholeDuration + 1) * (0.3 + Math.random() * 0.4);

  //set the starting values
  TweenLite.set(particle, {y:rangeMenu(startMenu, "y"), x:rangeMenu(startMenu, "x"), scale:rangeMenu(startMenu, "scale"), opacity:rangeMenu(startMenu, "opacity"), visibility:"hidden"});

  //the y tween should be continuous and smooth the whole duration
  TweenLite.to(particle, wholeDuration, {delay:delay, rotation: '+=900', y:rangeMenu(endMenu, "y"), ease:Linear.easeNone});

  //now tween the x independently so that it looks more randomized (rather than linking it with scale/opacity changes too)
  TweenLite.to(particle, partialDuration, {delay:delay, x:rangeMenu(midMenu, "x"), ease:Power1.easeOut});
  TweenLite.to(particle, wholeDuration - partialDuration, {delay:partialDuration + delay, x:rangeMenu(endMenu, "x"), ease:Power1.easeIn});

  //now create some random scale and opacity changes
  partialDuration = wholeDuration * (0.5 + Math.random() * 0.3);
  TweenLite.to(particle, partialDuration, {delay:delay, scale:rangeMenu(midMenu, "scale"), autoAlpha:rangeMenu(midMenu, "opacity"), ease:Linear.easeNone});
  TweenLite.to(particle, wholeDuration - partialDuration, {delay:partialDuration + delay, scale:rangeMenu(endMenu, "scale"), autoAlpha:rangeMenu(endMenu, "opacity"), ease:Linear.easeNone, onComplete:spawnMenu, onCompleteParams:[particle]});
}

function randomIntFromIntervalMenu(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

$(window).ready(function() {
  console.log($(window).height());
  if ($(window).width() > 800) {
    let body = $(".header"),
    i, particle;
    for (i = 0; i < densityMenu; i++) {
      // spawnMenu( $("<div />", {id:"particle"+i}).addClass("i-particle").appendTo('.c-nav-fixed') );
    }
  }
});
