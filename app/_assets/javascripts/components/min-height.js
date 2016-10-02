
import $ from 'jquery';

let pageId = $('main').attr('id');

// Min Height of Screensize
export function setMinHeight(windowHeightInitial) {

  let minheight;
  minheight = (windowHeightInitial * 13/14);

  // if (window.innerWidth >= 1300) {
  //  minheight = (window.innerHeight * 13/14);
  // } else if (window.innerWidth >= 700) {
  //  minheight = (window.innerHeight * 3/4);
  // } else {
 //    minheight = (window.innerHeight * 2/5);
 //  }

  if (pageId === 'project-page') {
    if (window.innerHeight < 890) {
      minheight = 890 * 13/14;
    }
  }

  $('.js-min-height').css('min-height',minheight);
}
