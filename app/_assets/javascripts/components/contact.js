
import $ from 'jquery';
import toastr from 'toastr';
import parsley from 'parsleyjs';

// Set variables
let pageId = $('main').attr('id');
let front = true;

export function contactItemClick(elem) {

  let cardToChange;
  let temp;

  if (front === true) {
    cardToChange = '.c-card-proj--back';
  } else {
    cardToChange = '.c-card-proj--front';
  }

  temp = $(cardToChange + ' .c-card-proj__right');

  front = !front;

  if (elem === 'mail') {

    $(cardToChange + ' p:first-of-type').text('e-mail');
    $(cardToChange + ' h4').text('ahoy@bymagellan.co');
    $(cardToChange + ' a p').text('Schreiben Sie uns!');
    $(cardToChange + ' a').attr('href', 'mailto:ahoy@bymagellan.co');
    $(cardToChange + ' a > svg').attr('class', 'i-plane u-mr-vr-05');
    $(cardToChange + ' a > svg use').remove();
    var useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    $(cardToChange + ' a > svg').append(useElement);
    useElement.setAttributeNS(
        'http://www.w3.org/1999/xlink', // xlink NS URI
        'href',                         // attribute (no 'xlink:')
        '#plane');
    $(cardToChange + ' .c-card-proj__right').removeClass('letter-contact');
    $(cardToChange + ' .c-card-proj__right').removeClass('telephone-contact');
    $(cardToChange + ' .c-card-proj__right').removeClass('formular-contact');
    $(cardToChange + ' .c-card-proj__right').addClass('c-card-proj__right');
    $(cardToChange + ' .c-card-proj__right').addClass('letter-contact');
    flipCard();

  } else if (elem === 'telefon') {

    $(cardToChange + ' p:first-of-type').text('Mobilfunk');
    $(cardToChange + ' h4').text('0176 392 00032');
    $(cardToChange + ' a p').text('Auch WhatsApp möglich');
    $(cardToChange + ' a').attr('href', 'tel:+0176 392 00032');
    $(cardToChange + ' a > svg').attr('class', 'i-double-tick-indicator u-mr-vr-033');
    $(cardToChange + ' a > svg use').remove();
    var useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    $(cardToChange + ' a > svg').append(useElement);
    useElement.setAttributeNS(
        'http://www.w3.org/1999/xlink', // xlink NS URI
        'href',                         // attribute (no 'xlink:')
        '#double-tick-indicator');
    $(cardToChange + ' .c-card-proj__right').removeClass('letter-contact');
    $(cardToChange + ' .c-card-proj__right').removeClass('telephone-contact');
    $(cardToChange + ' .c-card-proj__right').removeClass('formular-contact');
    $(cardToChange + ' .c-card-proj__right').addClass('c-card-proj__right');
    $(cardToChange + ' .c-card-proj__right').addClass('telephone-contact');
    flipCard();

  } else if (elem === 'formular') {

    $(cardToChange + ' p:first-of-type').text('Formular');
    $(cardToChange + ' h4').text('Online-Formular');
    $(cardToChange + ' a p').text('Fast wie auf echtem Papier!');
    $(cardToChange + ' a').attr('href', '#modal-contact');
    $(cardToChange + ' a > svg').attr('class', 'i-pen u-mr-vr-05');
    $(cardToChange + ' a > svg use').remove();
    var useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    $(cardToChange + ' a > svg').append(useElement);
    useElement.setAttributeNS(
        'http://www.w3.org/1999/xlink', // xlink NS URI
        'href',                         // attribute (no 'xlink:')
        '#pen');
    $(cardToChange + ' .c-card-proj__right').removeClass('letter-contact');
    $(cardToChange + ' .c-card-proj__right').removeClass('telephone-contact');
    $(cardToChange + ' .c-card-proj__right').removeClass('formular--contact');
    $(cardToChange + ' .c-card-proj__right').addClass('c-card-proj__right');
    $(cardToChange + ' .c-card-proj__right').addClass('formular-contact');
    flipCard();

  }
}

CSSPlugin.defaultTransformPerspective = 1000;

// We set the backface
TweenMax.set($(".c-card-proj--back"), {rotationY:+180, backfaceVisibility:"hidden"});

function flipCard() {
  var frontCard = $(".c-card-proj--front"),
      backCard = $(".c-card-proj--back"),
      tl = new TimelineMax();

  tl
    .to(frontCard, 1, {rotationY: '+=180', backfaceVisibility:"hidden"})
    .to(backCard, 1, {rotationY: '+=180', backfaceVisibility:"hidden"}, 0);
}

// Show Confirmed Message when submit button is clicked
// $('.c-contact-form__submit').click(function(e) {

//   let inst = $('[data-remodal-id=modal-contact]').remodal();
//   inst.close();
//   e.preventDefault();
//   toastr.success('Wurde erfolgreich an Magellan verschickt!', 'Online-Formular');

// });

if (pageId === 'index-page') {
  var message = "";

  $("#contact-form").parsley().on("form:submit", function() {

    var data = {};
    $("#contact-form").serializeArray().map(function(x){data[x.name] = x.value;});
      $.ajax({
          url: "https://formspree.io/me@jonathanarbely.de",
          method: "POST",
          data: {message: data},
          dataType: "json"
      });
    let inst = $('[data-remodal-id=modal-contact]').remodal();
    inst.close();
    toastr.success('Wurde erfolgreich an Magellan verschickt!', 'Online-Formular');

    return false;

  });
}











