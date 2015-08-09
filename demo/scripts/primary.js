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

    var primaryObj = new Primary();

    $('.content').load('template/primary.html', function () {
        primaryObj.initialize();;
    });
})(jQuery)
