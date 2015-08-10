/**
 * Created by Administrator on 2015/8/10.
 */
(function () {
    $(function () {
        function JoinUs (jobTypeList, jobTypeContentList) {
            this.jobTypeList = jobTypeList;
            this.jobTypeContentList = jobTypeContentList;
            this.initialize();
        };

        JoinUs.prototype.initialize = function () {
            this.jobTypeAnimation();
        };

        JoinUs.prototype.jobTypeAnimation = function () {
            var jobTypeList = this.jobTypeList;
            var jobTypeContentList = this.jobTypeContentList;

            jobTypeList.each(function (index, dom) {
                $(dom).on('click', function () {
                    $(this).next('div').slideToggle(200, 'linear');
                    $(this).next('div').find('div').slideDown(10, 'linear');
                });
            });

            jobTypeContentList.each(function (index, dom) {
                $(dom).on('click', function () {
                    $(this).next('div').slideToggle(100, 'linear');
                });
            });
        };

        window.JoinUs = JoinUs;
    });
})(jQuery)