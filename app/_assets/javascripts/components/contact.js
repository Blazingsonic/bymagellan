
import $ from 'jquery';
import toastr from 'toastr';

// Set variables
let front = true;

export function contactItemClick(elem) {

  let cardToChange;
  let temp;

  if (front === true) {
    console.log('back to change');
    cardToChange = '.c-card-proj--back';
  } else {
    console.log('front to change');
    cardToChange = '.c-card-proj--front';
  }

  temp = $(cardToChange + ' .c-card-proj__right');

  front = !front;

  if (elem === 'mail') {

    console.log('mail');
    $(cardToChange + ' p:first-of-type').text('e-mail');
    $(cardToChange + ' h4').text('mail@magellan.de');
    $(cardToChange + ' a p').text('Schreiben Sie uns eine Mail!');
    $(cardToChange + ' .c-card-proj__right').removeClass('letter-contact');
    $(cardToChange + ' .c-card-proj__right').removeClass('telephone-contact');
    $(cardToChange + ' .c-card-proj__right').removeClass('formular-contact');
    $(cardToChange + ' .c-card-proj__right').addClass('c-card-proj__right');
    $(cardToChange + ' .c-card-proj__right').addClass('letter-contact');
    flipCard();

  } else if (elem === 'telefon') {

    console.log('telefon');
    $(cardToChange + ' p:first-of-type').text('Mobilfunk');
    $(cardToChange + ' h4').text('0176 392 00032');
    $(cardToChange + ' a p').text('Auch WhatsApp möglich');
    $(cardToChange + ' .c-card-proj__right').removeClass('letter-contact');
    $(cardToChange + ' .c-card-proj__right').removeClass('telephone-contact');
    $(cardToChange + ' .c-card-proj__right').removeClass('formular-contact');
    $(cardToChange + ' .c-card-proj__right').addClass('c-card-proj__right');
    $(cardToChange + ' .c-card-proj__right').addClass('telephone-contact');
    flipCard();

  } else if (elem === 'formular') {

    console.log('formular');
    $(cardToChange + ' p:first-of-type').text('Formular');
    $(cardToChange + ' h4').text('Online-Formular');
    $(cardToChange + ' a p').text('Jetzt online ausfüllen!');
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
TweenMax.set($(".c-card-proj--back"), {rotationY:-180});

function flipCard() {
  var frontCard = $(".c-card-proj--front"),
      backCard = $(".c-card-proj--back"),
      tl = new TimelineMax();

  tl
    .to(frontCard, 1, {rotationY: '+=180'})
    .to(backCard, 1, {rotationY: '+=180'}, 0);
}

// Show Confirmed Message when submit button is clicked
$('.c-contact-form__submit').click(function(e) {

  let inst = $('[data-remodal-id=modal-contact]').remodal();
  inst.close();
  e.preventDefault();
  toastr.success('Wurde erfolgreich an Magellan verschickt!', 'Online-Formular');

});













