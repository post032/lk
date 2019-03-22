
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

// $(function()
// {
//     $('body').on('click', 'a.ajax', function(event) // вешаем обработчик на все ссылки, даже созданные после загрузки страницы
//     {
//         event.preventDefault(); // предотвращаем штатное действие, то есть переход по ссылке
//         $.get($(this).attr('href'), function() // отправляем GET запрос на href, указанный в ссылке
//         {
//             console.log('href'); // выводим полученные данные в консоль.
//         });
//     });
// });
