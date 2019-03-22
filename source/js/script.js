$(function(){
    $('#link1').on('click', function() {
       $('#window1').slideToggle(300, function(){
            if( $(this).hasClass('toriff__open')){
                $(this).addClass('toriff__close');
                $(this).removeClass('toriff__open');
                $(this).removeAttr('style');
                $(this).hide();
                $('#header1').addClass('tariff__header--radius')
            }
            else {
              $(this).addClass('toriff__open');
              $(this).removeClass('toriff__close');
              $(this).removeAttr('style');
              $('#header1').removeClass('tariff__header--radius')
              $('.toriff__open').show();
            }
       });
    });
});

$(function(){
    $('#link2').on('click', function() {
       $('#window2').slideToggle(300, function(){
            if( $(this).hasClass('toriff__close')){
                $(this).addClass('toriff__open');
                $(this).removeClass('toriff__close');
                $(this).removeAttr('style');
                $('#header2').removeClass('tariff__header--radius')
                $('.toriff__open').show();
            }
            else {
              $(this).removeClass('toriff__open');
              $(this).addClass('toriff__close');
              $(this).removeAttr('style');
              $(this).hide();
              $('#header2').addClass('tariff__header--radius')
            }
       });
    });
});

$(function(){
    $('#link3').on('click', function() {
       $('#window3').slideToggle(300, function(){
            if( $(this).hasClass('toriff__open')){
                $(this).addClass('toriff__close');
                $(this).removeClass('toriff__open');
                $(this).removeAttr('style');
                $(this).hide();
                $('#header3').addClass('tariff__header--radius')
            }
            else {
              $(this).addClass('toriff__open');
              $(this).removeClass('toriff__close');
              $(this).removeAttr('style');
              $('#header3').removeClass('tariff__header--radius')
              $('.toriff__open').show();
            }
       });
    });
});
