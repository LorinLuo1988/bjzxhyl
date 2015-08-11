/**
 * Created by Administrator on 2015/8/11.
 */
(function ($) {
    var songObjArr = [{},{}];
    var totalCount = songObjArr.length;
    var pageSize = 18;

    var HotSong = function hotSong (songObjArr) {
        this.songObjArr = songObjArr;
    };

    HotSong.prototype.initialize = function (paginationContainer) {
        this.paginationContainer = paginationContainer;
        this.pagination = new window.Pagination(55, 18, this.paginationContainer, this.songObjArr);
    };

    window.hotSongObj = new HotSong();
})(jQuery)
