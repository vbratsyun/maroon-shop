var navFieldsetCompound = document.querySelector('.fieldset--compound');
    var navButtonFieldsetCompound = document.querySelector('.fieldset__button--compound');

    navFieldsetCompound.classList.remove('fieldset--nojs');

    navButtonFieldsetCompound.addEventListener('click', function () {
      if (navFieldsetCompound.classList.contains('fieldset--closed')) {
        navFieldsetCompound.classList.remove('fieldset--closed');
        navFieldsetCompound.classList.add('fieldset--opened');
      } else {
        navFieldsetCompound.classList.add('fieldset--closed');
        navFieldsetCompound.classList.remove('fieldset--opened');
      }
    });

    var navFieldsetApplication = document.querySelector('.fieldset--application');
    var navButtonFieldsetApplication = document.querySelector('.fieldset__button--application');

    navFieldsetApplication.classList.remove('fieldset--nojs');

    navButtonFieldsetApplication.addEventListener('click', function () {
      if (navFieldsetApplication.classList.contains('fieldset--closed')) {
        navFieldsetApplication.classList.remove('fieldset--closed');
        navFieldsetApplication.classList.add('fieldset--opened');
      } else {
        navFieldsetApplication.classList.add('fieldset--closed');
        navFieldsetApplication.classList.remove('fieldset--opened');
      }
    });
