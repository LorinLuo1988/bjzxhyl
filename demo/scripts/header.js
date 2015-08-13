/**
 * Created by Administrator on 2015/8/9.
 */
window.windowCurrentUrl = 'primary';

(function ($) {
    $(function () {
        var Header = function (urlNav, languageToggle) {
            this.urlNav = urlNav;
            this.languageToggle = languageToggle;
            this.initialize();
        };

        Header.prototype.initialize = function () {
            this.navToggle();
            this.langToggle();
            this.IE7Handle();
        };

        Header.prototype.IE7Handle = function () {
            if (navigator.userAgent.indexOf('MSIE 7.0') != -1) {
                var navList = this.urlNav.find('li');

                navList.each(function (index, dom) {
                    var offsetWidth = $(this).innerWidth();
                    $(this).find('img').css('width', offsetWidth + 'px');
                });
            }
        }

        Header.prototype.navToggle = function () {
            var navList = this.urlNav.find('li');

            navList.on('click', function () {
                if (!$(this).hasClass('imgShow')) {
                    windowCurrentUrl = $(this).attr('data-url');
                    navList.removeClass('imgShow');
                    $(this).addClass('imgShow');

                    $.ajax('template/' + windowCurrentUrl + '.html', {
                        type: "GET",
                        success: function(response){
                            window.scrollTo(0, 0);

                            $('.bg .content').html(response);

                            if ($('.primary').length) {
                                primaryObj.initialize();
                            } else  if ($('.join-us .join-us-content h4').length) {
                                joinUsObj =  new JoinUs($('.join-us .join-us-content h4'), $('.join-us .join-us-content h5'));
                            } else if ($('.hot-song').length) {
                                hotSongObj.initialize($('.hot-song .pagination'), $('.song-list'));
                            }
                        }
                    });
                }
            });
        };

        Header.prototype.langToggle = function () {
            var languageToggle = this.languageToggle;
            var currentLanguage = languageToggle.find('.current-language');
            var languagePanel = languageToggle.find('.language-panel');
            var languageList = languageToggle.find('li');

            $(document).on('click', function (event) {
                if ($('.language-toggle').has(event.target).length || $(event.target) == $('.language-toggle')) {
                    languagePanel.toggleClass('show');
                } else {
                    languagePanel.removeClass('show');
                }
            });

            languageList.on('click', function () {
                var selectLanguage = $(this).html();
                currentLanguage.html(selectLanguage);
            });
        };

        var headerObj = new Header($('.header .url-nav'), $('.language-toggle'));
//        $('.footer').load();
    });
})(jQuery);