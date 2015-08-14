/**
 * Created by Administrator on 2015/8/15.
 */
(function ($) {
    $('.update-log-list li img.time-dot').on('click', function () {
       $(this).parent('li').find('.update-log-list-time').slideToggle(150, 'linear');
       $(this).parent('li').find('.update-log-list-content').slideToggle(150, 'linear', function () {
           if ($(this).parent('li').find('.update-log-list-content').css('display') == "none") {
               $(this).parent('li').animate({
                   paddingBottom: '20px'
               },100, 'linear');
           } else {
               $(this).parent('li').animate({
                   paddingBottom: '136px'
               },100, 'linear');
           }
       });
    });
})(jQuery)