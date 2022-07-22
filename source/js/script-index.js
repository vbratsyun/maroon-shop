var navMain = document.querySelector('.nav');
    var navToggle = document.querySelector('.nav__button');

    navMain.classList.remove('nav--nojs');

    navToggle.addEventListener('click', function () {
      if (navMain.classList.contains('nav--closed')) {
        navMain.classList.remove('nav--closed');
        navMain.classList.add('nav--opened');
      } else {
        navMain.classList.add('nav--closed');
        navMain.classList.remove('nav--opened');
      }
    });





    
