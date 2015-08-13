/**
 * Created by Administrator on 2015/8/11.
 */
(function ($) {
    window.songObjArr = [];
    window.songId = 1;
    var totalCount = 0;
    var pageSize = 18;

    $.ajax('json/song-list.json', {
       success: function (response) {
           songObjArr = response;
           totalCount = songObjArr.length;
           window.hotSongObj = new HotSong(songObjArr);
       }
    });

    function HotSong  (songObjArr) {
        this.songObjArr = songObjArr;
    };

    HotSong.prototype.initialize = function (paginationContainer, songContainer) {
        this.paginationContainer = paginationContainer;
        this.songContainer = songContainer;
        this.eventBind();
        this.pagination = new window.Pagination(totalCount, pageSize, this.paginationContainer, this.songObjArr, this.songContainer);
    };

    HotSong.prototype.eventBind = function () {
        $('.hot-song .song-list li').on('click', function () {
            window.songId = $(this).attr('data-song-id');
            window.open('song-play.html', 'songPlay');
        });
    };
})(jQuery)
