/**
 * Created by Administrator on 2015/8/11.
 */
(function ($) {
    function  Pagination (totalCount, pageSize, paginationContainer, songObjArr, songContainer) {
        this.totalCount = totalCount;
        this.pageSize = pageSize;
        this.totalPage = Math.ceil(this.totalCount / this.pageSize);
        this.songObjArr = songObjArr;
        this.paginationContainer = paginationContainer;
        this.songContainer = songContainer;
        this.currentPage = 1;
        this.currentPageDom = paginationContainer.find('.active');

        this.initialize();
    };

    Pagination.prototype.initialize = function () {
        this.eventBind();
    };

    Pagination.prototype.nextPage = function () {
        if (this.currentPage >= this.totalPage) {
            return false;
        }

        this.currentPage++;
        this.currentPageDom.removeClass('active').addClass('inactive');
        this.currentPageDom.next('.inactive').removeClass('inactive').addClass('active');

        this.currentPageDom = this.paginationContainer.find('.active');
        this.songListChange();
    };

    Pagination.prototype.prevPage = function () {
        if (this.currentPage <= 1) {
            return false;
        }

        this.currentPage--;
        this.currentPageDom.removeClass('active').addClass('inactive');
        this.currentPageDom.prev('.inactive').removeClass('inactive').addClass('active');

        this.currentPageDom = this.paginationContainer.find('.active');
        this.songListChange();
    };

    Pagination.prototype.fixPage = function (fixPageDom) {
        this.currentPage = fixPageDom.text();
        this.paginationContainer.find('.active').removeClass('active').addClass('inactive');
        fixPageDom.removeClass('inactive').addClass('active');

        this.currentPageDom = this.paginationContainer.find('.active');
        this.songListChange();
    };

    Pagination.prototype.eventBind = function () {
        var paginationContainer = this.paginationContainer;
        var self = this;

        paginationContainer.find('li').on('click', function () {
            if ($(this).hasClass('prev')) {
                self.prevPage();
            } else if ($(this).hasClass('next')) {
                self.nextPage();
            } else if ($(this).hasClass('inactive')) {
                self.fixPage($(this));
            }
        });
    };

    Pagination.prototype.songListChange = function () {
        var currentPage = this.currentPage;
        var pageSize = this.pageSize;
        var songContainer = this.songContainer;
        var songObjArr = this.songObjArr;

        songContainer.find('li a img.bgImg').each(function (index, dom) {
            var bgImg = songObjArr[(currentPage - 1) * pageSize + index].bgImg;
            var songId = songObjArr[(currentPage - 1) * pageSize + index]["song-id"];
            var reg = /..\//;

            $(dom).attr('src', bgImg.replace(reg, ''));
            $(dom).parents('li').attr('data-song-id', songId);
        });

    };

    window.Pagination = Pagination;
})(jQuery)
