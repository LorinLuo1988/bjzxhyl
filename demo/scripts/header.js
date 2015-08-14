/**
 * Created by Administrator on 2015/8/9.
 */
window.windowCurrentUrl = 'primary';

(function ($) {
    $(function () {
        var primaryCount = 0;
        var joinUsCount = 0;
        var hotSongCount = 0;

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

                    $('.bg>.content>.' + windowCurrentUrl).removeClass('contentHide').addClass('contentShow');
                    $('.bg>.content>div:not(.' + windowCurrentUrl + ')').removeClass('contentShow').addClass('contentHide');

                    if ($('.primary').hasClass('contentShow')) {
                        primaryCount++;

                        if (primaryCount >= 2) {
                            primaryCount  =1;
                            return false;
                        }

                        primaryObj.initialize();
                    } else  if ($('.join-us ').hasClass('contentShow')) {
                        joinUsCount++;

                        if (joinUsCount >= 2) {
                            joinUsCount = 1;
                            return false;
                        }

                        joinUsObj.initialize($('.join-us .join-us-content h4'), $('.join-us .join-us-content h5'));
                    } else if ($('.hot-song').hasClass('contentShow')) {
                        hotSongCount++;

                        if (hotSongCount >= 2) {
                            hotSongCount = 1;
                            return false;
                        }

                        hotSongObj.initialize($('.hot-song .pagination'), $('.song-list'));
                    }
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
    });
})(jQuery);