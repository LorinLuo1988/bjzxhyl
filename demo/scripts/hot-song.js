/**
 * Created by Administrator on 2015/8/11.
 */
(function ($) {
    window.songObjArr = [
        {"bgImg": "../style/img/song-bg/rgmyn.jpg", "song-url": "http://d1qras9pgk1wz4.cloudfront.net/s3-1439280451698.m4a", "song-name": "十年", "song-id": "1"},
        {"bgImg": "../style/img/song-bg/rgmyn.jpg", "song-url": "http://d1qras9pgk1wz4.cloudfront.net/s3-1439280451698.m4a", "song-name": "十年", "song-id": "2"},
        {"bgImg": "../style/img/song-bg/rgmyn.jpg", "song-url": "http://d1qras9pgk1wz4.cloudfront.net/s3-1439280451698.m4a", "song-name": "十年", "song-id": "3"},
        {"bgImg": "../style/img/song-bg/rgmyn.jpg", "song-url": "http://d1qras9pgk1wz4.cloudfront.net/s3-1439280451698.m4a", "song-name": "十年", "song-id": "4"},
        {"bgImg": "../style/img/song-bg/rgmyn.jpg", "song-url": "http://d1qras9pgk1wz4.cloudfront.net/s3-1439280451698.m4a", "song-name": "十年", "song-id": "5"},
        {"bgImg": "../style/img/song-bg/rgmyn.jpg", "song-url": "http://d1qras9pgk1wz4.cloudfront.net/s3-1439280451698.m4a", "song-name": "十年", "song-id": "6"},
        {"bgImg": "../style/img/song-bg/rgmyn.jpg", "song-url": "http://d1qras9pgk1wz4.cloudfront.net/s3-1439280451698.m4a", "song-name": "十年", "song-id": "7"},
        {"bgImg": "../style/img/song-bg/rgmyn.jpg", "song-url": "http://d1qras9pgk1wz4.cloudfront.net/s3-1439280451698.m4a", "song-name": "十年", "song-id": "8"},
        {"bgImg": "../style/img/song-bg/rgmyn.jpg", "song-url": "http://d1qras9pgk1wz4.cloudfront.net/s3-1439280451698.m4a", "song-name": "十年", "song-id": "9"},
        {"bgImg": "../style/img/song-bg/rgmyn.jpg", "song-url": "http://d1qras9pgk1wz4.cloudfront.net/s3-1439280451698.m4a", "song-name": "十年", "song-id": "10"},
        {"bgImg": "../style/img/song-bg/rgmyn.jpg", "song-url": "http://d1qras9pgk1wz4.cloudfront.net/s3-1439280451698.m4a", "song-name": "十年", "song-id": "11"},
        {"bgImg": "../style/img/song-bg/rgmyn.jpg", "song-url": "http://d1qras9pgk1wz4.cloudfront.net/s3-1439280451698.m4a", "song-name": "十年", "song-id": "12"},
        {"bgImg": "../style/img/song-bg/rgmyn.jpg", "song-url": "http://d1qras9pgk1wz4.cloudfront.net/s3-1439280451698.m4a", "song-name": "十年", "song-id": "13"},
        {"bgImg": "../style/img/song-bg/rgmyn.jpg", "song-url": "http://d1qras9pgk1wz4.cloudfront.net/s3-1439280451698.m4a", "song-name": "十年", "song-id": "14"},
        {"bgImg": "../style/img/song-bg/rgmyn.jpg", "song-url": "http://d1qras9pgk1wz4.cloudfront.net/s3-1439280451698.m4a", "song-name": "十年", "song-id": "15"},
        {"bgImg": "../style/img/song-bg/rgmyn.jpg", "song-url": "http://d1qras9pgk1wz4.cloudfront.net/s3-1439280451698.m4a", "song-name": "十年", "song-id": "16"},
        {"bgImg": "../style/img/song-bg/rgmyn.jpg", "song-url": "http://d1qras9pgk1wz4.cloudfront.net/s3-1439280451698.m4a", "song-name": "十年", "song-id": "17"},
        {"bgImg": "../style/img/song-bg/rgmyn.jpg", "song-url": "http://d1qras9pgk1wz4.cloudfront.net/s3-1439280451698.m4a", "song-name": "十年", "song-id": "18"},
        {"bgImg": "../style/img/song-bg/iSing-star.png", "song-url": "http://d1qras9pgk1wz4.cloudfront.net/s3-1439258495449.m4a", "song-name": "红豆", "song-id": "19"},
        {"bgImg": "../style/img/song-bg/iSing-star.png", "song-url": "http://d1qras9pgk1wz4.cloudfront.net/s3-1439258495449.m4a", "song-name": "红豆", "song-id": "20"},
        {"bgImg": "../style/img/song-bg/iSing-star.png", "song-url": "http://d1qras9pgk1wz4.cloudfront.net/s3-1439258495449.m4a", "song-name": "红豆", "song-id": "21"},
        {"bgImg": "../style/img/song-bg/iSing-star.png", "song-url": "http://d1qras9pgk1wz4.cloudfront.net/s3-1439258495449.m4a", "song-name": "红豆", "song-id": "22"},
        {"bgImg": "../style/img/song-bg/iSing-star.png", "song-url": "http://d1qras9pgk1wz4.cloudfront.net/s3-1439258495449.m4a", "song-name": "红豆", "song-id": "23"},
        {"bgImg": "../style/img/song-bg/iSing-star.png", "song-url": "http://d1qras9pgk1wz4.cloudfront.net/s3-1439258495449.m4a", "song-name": "红豆", "song-id": "24"},
        {"bgImg": "../style/img/song-bg/iSing-star.png", "song-url": "http://d1qras9pgk1wz4.cloudfront.net/s3-1439258495449.m4a", "song-name": "红豆", "song-id": "25"},
        {"bgImg": "../style/img/song-bg/iSing-star.png", "song-url": "http://d1qras9pgk1wz4.cloudfront.net/s3-1439258495449.m4a", "song-name": "红豆", "song-id": "26"},
        {"bgImg": "../style/img/song-bg/iSing-star.png", "song-url": "http://d1qras9pgk1wz4.cloudfront.net/s3-1439258495449.m4a", "song-name": "红豆", "song-id": "27"},
        {"bgImg": "../style/img/song-bg/iSing-star.png", "song-url": "http://d1qras9pgk1wz4.cloudfront.net/s3-1439258495449.m4a", "song-name": "红豆", "song-id": "28"},
        {"bgImg": "../style/img/song-bg/iSing-star.png", "song-url": "http://d1qras9pgk1wz4.cloudfront.net/s3-1439258495449.m4a", "song-name": "红豆", "song-id": "29"},
        {"bgImg": "../style/img/song-bg/iSing-star.png", "song-url": "http://d1qras9pgk1wz4.cloudfront.net/s3-1439258495449.m4a", "song-name": "红豆", "song-id": "30"},
        {"bgImg": "../style/img/song-bg/iSing-star.png", "song-url": "http://d1qras9pgk1wz4.cloudfront.net/s3-1439258495449.m4a", "song-name": "红豆", "song-id": "31"},
        {"bgImg": "../style/img/song-bg/iSing-star.png", "song-url": "http://d1qras9pgk1wz4.cloudfront.net/s3-1439258495449.m4a", "song-name": "红豆", "song-id": "32"},
        {"bgImg": "../style/img/song-bg/iSing-star.png", "song-url": "http://d1qras9pgk1wz4.cloudfront.net/s3-1439258495449.m4a", "song-name": "红豆", "song-id": "33"},
        {"bgImg": "../style/img/song-bg/iSing-star.png", "song-url": "http://d1qras9pgk1wz4.cloudfront.net/s3-1439258495449.m4a", "song-name": "红豆", "song-id": "34"},
        {"bgImg": "../style/img/song-bg/iSing-star.png", "song-url": "http://d1qras9pgk1wz4.cloudfront.net/s3-1439258495449.m4a", "song-name": "红豆", "song-id": "35"},
        {"bgImg": "../style/img/song-bg/iSing-star.png", "song-url": "http://d1qras9pgk1wz4.cloudfront.net/s3-1439258495449.m4a", "song-name": "红豆", "song-id": "36"}
    ];
    window.songId = 1;
    var totalCount = songObjArr.length;
    var pageSize = 18;

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
            window.open('song-play/song-play.html', 'songPlay');
        });
    };

    window.hotSongObj = new HotSong(songObjArr);
})(jQuery)
