
import $ from 'jquery';

let pageId = $('main').attr('id');

// Min Height of Screensize
export function setMinHeight(windowHeightInitial) {

  let minheight;
  let headerPadding = $('header.e-header').css('padding-top');
  let headerPaddingNumber = parseInt(headerPadding, 10);

  minheight = (windowHeightInitial - (2 * headerPaddingNumber));

  // if (window.innerWidth >= 1300) {
  //  minheight = (window.innerHeight * 13/14);
  // } else if (window.innerWidth >= 700) {
  //  minheight = (window.innerHeight * 3/4);
  // } else {
 //    minheight = (window.innerHeight * 2/5);
 //  }

  if (pageId === 'project-page') {
    if (window.innerHeight < 380) {
      minheight = windowHeightInitial;
    }
  }

  $('.js-min-height').css('min-height',minheight);
}
