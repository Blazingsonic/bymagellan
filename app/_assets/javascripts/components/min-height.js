
import $ from 'jquery';

// Min Height of Screensize
export function setMinHeight() {

  let minheight;
  minheight = (window.innerHeight * 13/14);

  // if (window.innerWidth >= 1300) {
  //  minheight = (window.innerHeight * 13/14);
  // } else if (window.innerWidth >= 700) {
  //  minheight = (window.innerHeight * 3/4);
  // } else {
 //    minheight = (window.innerHeight * 2/5);
 //  }
  $('.js-min-height').css('min-height',minheight);

}
