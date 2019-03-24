
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

$('#add1').click(function(){
  $("#input1").removeClass('contacts__invisibly');
  $(this).removeAttr('style');
});

$('#add2').click(function(){
  $("#input2").removeClass('contacts__invisibly');
  $(this).removeAttr('style');
});

$('#add3').click(function(){
  $("#input3").removeClass('contacts__invisibly');
  $(this).removeAttr('style');
});

$('#input1 .contacts__basket').click(function(){
  $('#input1').addClass('contacts__invisibly');
  $('#input1').removeAttr('style');
});

$('#input2 .contacts__basket').click(function(){
  $('#input2').addClass('contacts__invisibly');
  $('#input2').removeAttr('style');
});

$('#input3 .contacts__basket').click(function(){
  $('#input3').addClass('contacts__invisibly');
  $('#input3').removeAttr('style');
});

$('.pay__lists li').click(function(){
  $(this).addClass('pay__active');
  $('.pay__lists li').not(this).removeClass('pay__active');
});

$('#open-nav').click(function(){
  $('#nav').addClass('nav-show');
  $('#nav').removeClass('nav-hide');
   $('#nav').removeAttr('style');
});

$('#close-nav').click(function(){
  $('#nav').addClass('nav-hide');
  $('#nav').removeClass('nav-show');
  $('#nav').removeAttr('style');
});
