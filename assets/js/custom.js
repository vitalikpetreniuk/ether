$(function(){

    if($('.home').length)
    {
        $('#first-tabs-side').tabs();
        $('#exchange-tabs1').tabs();
        $('#exchange-tabs2').tabs();

        $('.eth-block').find('.eth-title').on('click', function(){
            $(this).parent().find('.eth-body').slideToggle();
        });
    }
    if($('.how-to-start').length)
    {
        $('#start-tabs').tabs();
        $( "#start-accordion" ).accordion({
            heightStyle: "content",
            collapsible: true
        });
    }

    $('.h-line').on('click', function (e) {
        $(this).toggleClass('active');
        if($(this).parent().find('.h-drop').length)
        {
            e.preventDefault();
            $(this).parent().find('.h-drop').fadeToggle('fast');
        }
    });

    $('.mobile-trigger').on('click', function(){
        $('.mobile-overlay').fadeIn();
    });

    $('.mobile-close').on('click', function(){
        $('.mobile-overlay').fadeOut();
    });

    $('.search form input[type="search"]').on('focus',function(e) {
        $('#search').addClass('show');
        $('body').addClass('no-scroll');
    });

    $('.search-close').on('click', function(){
        $('#search').removeClass('show');
        $('body').removeClass('no-scroll');
    });

    $('li.chat a').on('click',function(e) {
        e.preventDefault();
        $('.mobile-close').trigger('click');
        $('#chat').addClass('show');
        $('body').addClass('no-scroll');
    });

    $('.chat-close').on('click', function(){
        $('#chat').removeClass('show');
        $('body').removeClass('no-scroll');
    });

    particlesJS.load('particles-js', 'assets/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });

    $(window).on('load', function () {
        setTimeout(function(){
            if($('.scrollbar-inner').length)
            {$('.scrollbar-inner').scrollbar();}
        }, 1000);
        setTimeout(function(){
            if($('.scrollbar-inner').length)
            {
                $('#myTrades .scrollbar-inner').scrollbar();
                $('#myOrders .scrollbar-inner').scrollbar();
                $('#myFunds .scrollbar-inner').scrollbar();
            }
        }, 15000);
        setTimeout(function(){
            if($('.scrollbar-inner').length)
            {
                $('#myTrades .scrollbar-inner').scrollbar();
                $('#myOrders .scrollbar-inner').scrollbar();
                $('#myFunds .scrollbar-inner').scrollbar();
            }
        }, 20000);
        setTimeout(function(){
            if($('.scrollbar-inner').length)
            {
                $('#myTrades .scrollbar-inner').scrollbar();
                $('#myOrders .scrollbar-inner').scrollbar();
                $('#myFunds .scrollbar-inner').scrollbar();
            }
        }, 25000);
    });


});