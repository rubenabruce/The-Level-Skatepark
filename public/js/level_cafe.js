import "../css/level_cafe.css";
import "./basic";

$(document).ready(() => {
    $('#mobileBack').on('click', () => {
        $('.about').animate({
            flex: '1'
        })
        $('.banner').fadeIn();
        $('.banner h1').fadeIn();
        $('.menu').animate({
            flex: '1'
        })
        $('.upcoming').animate({
            flex: '1'
        })
        $('#mobileBack').fadeOut();
        $('.about').css('scrollTop', '0');
        $('.thirds').css({
            scrollTop: '0',
            overflow: 'hidden'
        })
    })
    $('.hover').on('mouseenter', (event) => {
        // $(event.currentTarget).animate({
        //     flexBasis: '+=1%'
        // })
        $(event.currentTarget).find('.banner').css({
            filter: 'brightness(.8)'
        })
    }).on('mouseleave', (event) => {
        // $(event.currentTarget).animate({
        //     flexBasis: '-=1%'
        // });
        $(event.currentTarget).find('.banner').css({
            filter: 'brightness(.5)'
        })
    });
    $('.about').on('click', () => { 
        if (window.matchMedia("(orientation: portrait)").matches) {
            $('.about').animate({
                flexBasis: '100%'
            })
            $('.menu').animate({
                flexBasis: '0'
            })
            $('.upcoming').animate({
                flexBasis: '0'
            })
            $('#mobileBack').fadeIn();
        } else {
            $('.about').animate({
                flexBasis: '94%'
            });
            $('.menu').animate({
                flexBasis: '3%'
            })
            $('.upcoming').animate({
                flexBasis: '3%'
            })
        }
        $('.about').css({
            overflowY: 'scroll',
            height: '100%'
        });
        $('.about .banner h1').fadeOut(300);
        $('.aboutMain').fadeIn(400);
        $('.about .banner').fadeOut(400);
        $('.upcomingMain').fadeOut(400);
        // $('.upcoming')$("#containerDiv").animate({ scrollTop: 0 }, "fast");
        $('.upcoming .banner').fadeIn(400)
        $('.menuMain').fadeOut(400);
        $('.menu .banner').fadeIn(400)

        $('.about').animate({
            scrollTop: '0',
        })
        $('.menu').animate({
            // height: '50%',
            scrollTop: '0',
            right: '0px', 
            top: '0px',
            // width: '3%',
        }, 400);
        $('.upcoming').animate({
            // height: '50%',
            scrollTop: '0',
            right: '0px', 
            bottom: '0px',
            // '-webkit-transform': "rotate(-90deg)"
        }, 400);

        $('.menu').css({
            display: 'fixed',
            overflow: 'hidden'
        });
        $('.upcoming').css({
            display: 'fixed',
            overflow: 'hidden'
        });
    });
    $('.menu').on('click', () => {
        if (window.matchMedia("(orientation: portrait)").matches) {
            $('.menu').animate({
                flexBasis: '100%'
            })
            $('.about').animate({
                flexBasis: '0'
            })
            $('.upcoming').animate({
                flexBasis: '0'
            })
            $('#mobileBack').fadeIn();
        } else {
            $('.menu').animate({
                flexBasis: '94%'
            });
            $('.about').animate({
                flexBasis: '3%'
            })
            $('.upcoming').animate({
                flexBasis: '3%'
            })
        }
        $('.menuMain').fadeIn(400);
        $('.menu').css({
            overflowY: 'scroll',
            height: '100%'
        });
        $('menuNav').css('display', 'flex');
        $('.menu .banner h1').fadeOut(300);
        $('.menu .banner').fadeOut(400);
        $('.upcomingMain').fadeOut(400);
        $('.upcoming .banner').fadeIn(400);
        $('.aboutMain').fadeOut(400);
        $('.about .banner').fadeIn(400);
        $('.about').animate({
            left: '0px', 
            scrollTop: '0',
        });
        $('.upcoming').animate({
            right: '0px', 
            scrollTop: '0',
        });
        $('.about').css({
            display: 'fixed',
            overflow: 'hidden'
        });
        $('.upcoming').css({
            display: 'fixed',
            overflow: 'hidden'
        });
    });
    $('.upcoming').on('click', () => { 
        if (window.matchMedia("(orientation: portrait)").matches) {
            $('.upcoming').animate({
                flexBasis: '100%'
            })
            $('.about').animate({
                flexBasis: '0'
            })
            $('.menu').animate({
                flexBasis: '0'
            })
            $('#mobileBack').fadeIn();
        } else {
            $('.upcoming').animate({
                flexBasis: '94%'
            });
            $('.about').animate({
                flexBasis: '3%'
            })
            $('.menu').animate({
                flexBasis: '3%'
            })
        }
        $('.upcomingMain').fadeIn(400);
        $('.upcoming .banner').fadeOut(400);
        $('.upcoming .banner h1').fadeOut(300);
        $('.aboutMain').fadeOut(400);
        $('.about .banner').fadeIn(400);
        $('.menuMain').fadeOut(400);
        $('.menu .banner').fadeIn(400);

        $('.upcoming').css({
            height: '100%', 
            overflowY: 'hidden', 
            overflowX: 'scroll'
        });
        $('.menu').animate({
            left: '0px', 
            scrollTop: '0',
        });
        $('.about').animate({
            left: '0px', 
            scrollTop: '0',
        });
        $('.menu').css({
            display: 'fixed',
            overflow: 'hidden'
        });
        $('.about').css({
            display: 'fixed',
            overflow: 'hidden'
        });
    });
    $('#hotFoodBtn').on('click', event => {
        $('#hotFood').slideDown(500)
        $('#coldFood').slideUp(500)
        $('#hotFood').css('display', 'flex')
        $('#drinks').slideUp(500)
    });
    $('#coldFoodBtn').on('click', event => {
        $('#coldFood').slideDown(500)
        $('#coldFood').css('display', 'flex')
        $('#drinks').slideUp(500)
        $('#hotFood').slideUp(500)
    });
    $('#drinksBtn').on('click', event => {
        $('#coldFood').slideUp(500)
        $('#drinks').css('display', 'flex')
        $('#drinks').slideDown(500)
        $('#hotFood').slideUp(500)
    });
    $('.skaterDeals').on('click', event => {
        $(event.currentTarget).animate({
            height: '80%',
            width: '40%'
        });
    });
    // if ($('.about').scrollTop() < $('.review').scrollTop()) {
    //     $('form').css('display', 'flex')
    //     $('form').delay('slow').animate({
    //         bottom: '0'
    //     })
    // } else {
    //     $('form').animate({
    //         bottom: '-100%'
    //     })
    //     $('form').delay('slow').css('display', 'none')
    // }

    // shows the contact form at bottom of page
    $('.about').on("scroll", function() {
        if ($('.about').height() + $('.about').scrollTop() > 2100) {
            $('.contactPageHeader').fadeIn('fast');
            $('form').fadeIn('fast');
            $('#ownerImg').fadeIn('fast');
            $('form').delay('1s').addClass('active')
        } else {
            $('.contactPageHeader').fadeOut('fast');
            $('form').removeClass('active');
            $('form').fadeOut('slow')
            $('#ownerImg').fadeOut('slow');
        }
    });
});

