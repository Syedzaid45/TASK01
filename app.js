window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    var topBarHeight = document.querySelector('.top-bar').offsetHeight;
  
    if (window.pageYOffset > topBarHeight) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  };
  