$(document).ready(function(){
    $('.hamburger').click(function(){
        $('.main-menu').toggleClass('open');
    });

    $('.main-menu-item a').click(function scroll(e){
        const href = $(this).attr('href');
        e.preventDefault();

        $('html, body').animate(
            {
              scrollTop: $(href).offset().top,
            },
            800,
          );
        
          location.hash = href;
          $('a[href^="#"]').click(scroll);
        });
    });
