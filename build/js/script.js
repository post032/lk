
$('#registration').click(function(){
 $('.modal-registration').show();
 $('.modal-enter').hide();
 $(this).addClass('modal__toggle--active');
 $('#enter').removeClass('modal__toggle--active');
});

$('#enter').click(function(){
 $('.modal-enter').show();
 $('.modal-registration').hide();
 $(this).addClass('modal__toggle--active');
 $('#registration').removeClass('modal__toggle--active');
});

//////////////////////

$('#personal-info').click(function(){
 $('.personal').toggle();
 $('.modal-registration').hide();
 $('#personal-info').addClass('active');
});

$('#contacts-info').click(function(){
 $('.contacts').toggle();
 $('.modal-registration').hide();
 $('#contacts-info').addClass('active');
});

$('#order-info').click(function(){
 $('.order').toggle();
 $('.modal-registration').hide();
 $('#order-info').addClass('active');
});

$('#service-info').click(function(){
 $('.service').toggle();
 $('.modal-registration').hide();
 $('#service-info').addClass('active');
});

$('#review-info').click(function(){
 $('.review').toggle();
 $('.modal-registration').hide();
 $('#review-info').addClass('active');
});

$('#pay-info').click(function(){
 $('.pay').toggle();
 $('.modal-registration').hide();
 $('#pay-info').addClass('active');
});
