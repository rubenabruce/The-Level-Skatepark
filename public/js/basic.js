$(document).ready(() => {
  
  // header media queries
  if (window.matchMedia("(orientation: portrait)").matches) {
      $('.burgerBtn').removeClass('hidden');
  }

  //burgerBtn functionality
  $('.in').on('click', () => {
      asideOut()
  })

  $('html, body').on('swiperight', () => {
      asideOut
  })

  $('.out').on('click', () => {
      asideIn();
  })

  $('out').on('swipeleft', () => {
      asideIn();
  })


  $('.dropbtn').on('mouseenter', () => {
    $('.dropdownMenu').slideDown(400);
  });
  $('.dropdownMenu').on('mouseleave', () => {
    $('.dropdownMenu').slideUp(400);
  });

  $('.splitOption').on('mouseenter', event => {
    $(event.currentTarget).children().removeClass('hide')
    $(event.currentTarget).children('#localSpot').text("Find Spots")
  }).on('mouseleave', event => {
    $(event.currentTarget).children('.uploadSpot').addClass('hide');
  });

  
});

function asideOut() {
  $('body').animate({
    left: '-100vw'
  });
  $('aside').animate({
    right: '0'
  });
}

function asideIn() {
  $('body').animate({
    left: '0px'
  })
  $('aside').animate({
    right: '-100vw'
  })
}