var navFilter = document.querySelector('.filter');
var navButton = document.querySelector('.filter__button');

navFilter.classList.remove('filter--nojs');

navButton.addEventListener('click', function () {
  if (navFilter.classList.contains('filter--closed')) {
    navFilter.classList.remove('filter--closed');
    navFilter.classList.add('filter--opened');
  } else {
    navFilter.classList.add('filter--closed');
    navFilter.classList.remove('filter--opened');
  }
});

var navFieldsetFacial = document.querySelector('.fieldset--facial-care');
var navButtonFieldsetFacial = document.querySelector('.fieldset__button--facial-care');

navFieldsetFacial.classList.remove('fieldset--nojs');

navButtonFieldsetFacial.addEventListener('click', function () {
  if (navFieldsetFacial.classList.contains('fieldset--closed')) {
    navFieldsetFacial.classList.remove('fieldset--closed');
    navFieldsetFacial.classList.add('fieldset--opened');
  } else {
    navFieldsetFacial.classList.add('fieldset--closed');
    navFieldsetFacial.classList.remove('fieldset--opened');
  }
});

var navFieldsetBody = document.querySelector('.fieldset--body-care');
var navButtonFieldsetBody = document.querySelector('.fieldset__button--body-care');

navFieldsetBody.classList.remove('fieldset--nojs');

navButtonFieldsetBody.addEventListener('click', function () {
  if (navFieldsetBody.classList.contains('fieldset--closed')) {
    navFieldsetBody.classList.remove('fieldset--closed');
    navFieldsetBody.classList.add('fieldset--opened');
  } else {
    navFieldsetBody.classList.add('fieldset--closed');
    navFieldsetBody.classList.remove('fieldset--opened');
  }
});

var navFieldsetSkin = document.querySelector('.fieldset--skin-type');
var navButtonFieldsetSkin = document.querySelector('.fieldset__button--skin-type');

navFieldsetSkin.classList.remove('fieldset--nojs');

navButtonFieldsetSkin.addEventListener('click', function () {
  if (navFieldsetSkin.classList.contains('fieldset--closed')) {
    navFieldsetSkin.classList.remove('fieldset--closed');
    navFieldsetSkin.classList.add('fieldset--opened');
  } else {
    navFieldsetSkin.classList.add('fieldset--closed');
    navFieldsetSkin.classList.remove('fieldset--opened');
  }
});
