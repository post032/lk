
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

// $('#open-nav').click(function(){
//   $('#nav').toggleClass('nav-hide');
// });
//

(function() {
  "use strict";
  var toggles = document.querySelectorAll('.nav-open');
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      $('#nav').toggleClass('nav-hide');
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

})();
