/**
 * Created by Administrator on 2015/8/9.
 */
(function ($) {
    function windowOnload (fun) {
        var oldOnload = window.onload;
        if(typeof window.onload == 'function') {
            window.onload = function () {
                oldOnload();
                fun();
            };
        } else {
            window.onload = fun;
        }
    };

    var Primary = function () {};
    Primary.prototype.initialize = function () {
        this.downloadImgHover();
        this.animate();
    };

    Primary.prototype.downloadImgHover = function () {
        $('.android-play-download').hover(
            function () {
                $(this).attr('src', 'style/img/Android-download-hover.png');
            },
            function () {
                $(this).attr('src', 'style/img/Android-download.png');
            }
        );

        $('.google-play-download').hover(
            function () {
                $(this).attr('src', 'style/img/Googleplay-download-hover.png');
            },
            function () {
                $(this).attr('src', 'style/img/Googleplay-download.png');
            }
        );
    };

    Primary.prototype.animate = function () {
        function animation () {
            if ( $('.primary-bottom .song').offset().top < document.documentElement.clientHeight +$(document).scrollTop() - 100) {
                $('.primary .primary-bottom .content .song .song-img').css({
                    visibility: 'visible',
                    animation: 'song-img 1s linear 0s 1',
                    msAnimation: 'song-img 1s linear 0s 1',
                    webkitAnimation: 'song-img 1s linear 0s 1',
                    mozAnimation: 'song-img 1s linear 0s 1',
                    oAnimation: 'song-img 1s linear 0s 1'
                });

                $('.primary .primary-bottom .content .song .tip-img').css({
                    visibility: 'visible',
                    animation: 'tip-right 2s linear 0s 1',
                    msAnimation: 'tip-right 2s linear 0s 1',
                    webkitAnimation: 'tip-right 2s linear 0s 1',
                    mozAnimation: 'tip-right 2s linear 0s 1',
                    oAnimation: 'tip-right 2s linear 0s 1'
                });

                $('.primary .primary-bottom .content .song .text').css({
                    visibility: 'visible',
                    animation: 'text-right 2.2s linear 0s 1',
                    msAnimation: 'text-right 2.2s linear 0s 1',
                    webkitAnimation: 'text-right 2.2s linear 0s 1',
                    mozAnimation: 'text-right 2.2s linear 0s 1',
                    oAnimation: 'text-right 2.2s linear 0s 1'
                });
            }

            if ( $('.primary-bottom .social-song').offset().top < document.documentElement.clientHeight + $(document).scrollTop() - 100) {
                $('.primary .primary-bottom .content .social-song .new-people-entry').css({
                    visibility: 'visible',
                    animation: 'new-people-entry 1s linear 0s 1',
                    msAnimation: 'new-people-entry 1s linear 0s 1',
                    webkitAnimation: 'new-people-entry 1s linear 0s 1',
                    mozAnimation: 'new-people-entry 1s linear 0s 1',
                    oAnimation: 'new-people-entry 1s linear 0s 1'
                });

                $('.primary .primary-bottom .content .social-song .tip-img').css({
                    visibility: 'visible',
                    animation: 'tip-left 2s linear 0s 1',
                    msAnimation: 'tip-left 2s linear 0s 1',
                    webkitAnimation: 'tip-left 2s linear 0s 1',
                    mozAnimation: 'tip-left 2s linear 0s 1',
                    oAnimation: 'tip-left 2s linear 0s 1'
                });

                $('.primary .primary-bottom .content .social-song .text').css({
                    visibility: 'visible',
                    animation: 'text-left 2.2s linear 0s 1',
                    msAnimation: 'text-left 2.2s linear 0s 1',
                    webkitAnimation: 'text-left 2.2s linear 0s 1',
                    mozAnimation: 'text-left 2.2s linear 0s 1',
                    oAnimation: 'text-left 2.2s linear 0s 1'
                });
            }
        };
        $(window).on('scroll', animation);
    };

    var primaryObj = new Primary();

    $('.content').load('template/primary.html', function () {
        primaryObj.initialize();;
    });
})(jQuery)
