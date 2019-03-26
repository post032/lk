$('#registration').click(function() {
  $('.modal-registration').show();
  $('.modal-enter').hide();
  $(this).addClass('modal__toggle--active');
  $('#enter').removeClass('modal__toggle--active');
});

$('#enter').click(function() {
  $('.modal-enter').show();
  $('.modal-registration').hide();
  $(this).addClass('modal__toggle--active');
  $('#registration').removeClass('modal__toggle--active');
});

$('#add1').click(function() {
  $("#input1").removeClass('contacts__invisibly');
  $(this).removeAttr('style');
});

$('#add2').click(function() {
  $("#input2").removeClass('contacts__invisibly');
  $(this).removeAttr('style');
});

$('#add3').click(function() {
  $("#input3").removeClass('contacts__invisibly');
  $(this).removeAttr('style');
});

$('#input1 .contacts__basket').click(function() {
  $('#input1').addClass('contacts__invisibly');
  $('#input1').removeAttr('style');
});

$('#input2 .contacts__basket').click(function() {
  $('#input2').addClass('contacts__invisibly');
  $('#input2').removeAttr('style');
});

$('#input3 .contacts__basket').click(function() {
  $('#input3').addClass('contacts__invisibly');
  $('#input3').removeAttr('style');
});

$('.pay__lists li').click(function() {
  $(this).addClass('pay__active');
  $('.pay__lists li').not(this).removeClass('pay__active');
});

$('#open-nav').click(function() {
  $('#nav').toggleClass('nav-hide');
});

//ловит все изменения полей инпут
$('#name').on("input", function(ev) {
  if ($(ev.target).val().length > 4) {
    $('#name__label').addClass('modal__valid');
  } else {
    $('#name__label').removeClass('modal__valid');
  };
});

$('#series').on("input", function(ev) {
  if ($(ev.target).val().match(/^\d+$/)) {
    $('#series__label').addClass('modal__valid');
  } else {
    $('#series__label').removeClass('modal__valid');
  };
});

$('#number').on("input", function(ev) {
  if ($(ev.target).val().match(/^\d+$/)) {
    $('#number__label').addClass('modal__valid');
  } else {
    $('#number__label').removeClass('modal__valid');
  };
});

$('#mail').on("input", function(ev) {
  if ($(ev.target).val().match(/.+?\@.+/g)) {
    $('#mail__label').addClass('modal__valid');
  } else {
    $('#mail__label').removeClass('modal__valid');
  };
});

$('#phone').on("input", function(ev) {
  if ($(ev.target).val().match(/^\d+$/)) {
    $('#phone__label').addClass('modal__valid');
  } else {
    $('#phone__label').removeClass('modal__valid');
  };
});

$('#r-login').on("input", function(ev) {
  if ($(ev.target).val().length > 4) {
    $('#r-login__label').addClass('modal__valid');
  } else {
    $('#r-login__label').removeClass('modal__valid');
  };
});


	$("#pass2").on("input", function() { // Выполняем скрипт при изменении содержимого 2-го поля
		var value_input1 = $("#pass1").val(); // Получаем содержимое 1-го поля
		var value_input2 = $(this).val(); // Получаем содержимое 2-го поля
		if(value_input1 === value_input2) {
        $('#pass1__label').addClass('modal__valid');
        $('#pass2__label').addClass('modal__valid');
		} else {
      $('#pass1__label').removeClass('modal__valid');
      $('#pass2__label').removeClass('modal__valid');
		}
	});

  $("#pass1").on("input", function() { // Выполняем скрипт при изменении содержимого 2-го поля
		var value_input1 = $("#pass2").val(); // Получаем содержимое 1-го поля
		var value_input2 = $(this).val(); // Получаем содержимое 2-го поля
		if(value_input1 === value_input2) {
        $('#pass1__label').addClass('modal__valid');
        $('#pass2__label').addClass('modal__valid');
		} else {
      $('#pass1__label').removeClass('modal__valid');
      $('#pass2__label').removeClass('modal__valid');
		}
	});

  close (function() {
    "use strict";
    var toggles = document.querySelectorAll('.nav-open');
    var open = document.querySelector('#nav');
    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
      toggle.addEventListener("click", function(e) {
        e.preventDefault();
        open.classList.toggle('nav-hide');
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active"): this.classList.add("is-active");
      });
    }

  })();
