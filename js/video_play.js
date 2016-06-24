$(function () {
    //获取URL,截取参数,更改视频链接
    var video_index = getUrlParam('index');
    changeSrc(video_index);


    var $video_items = $(".video-play-list li");
    $video_items.click(function() {
        var src = $(this).attr("src");
        $("#video-src").attr("src",src);
        $(this).addClass("active").siblings().removeClass("active");
        var title = $(this).html();
        $(".wrapper_content > h2").html(title);
    });
});
//获取url中的参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return decodeURI(r[2]); return null; //返回参数值
}

function changeSrc (index) {
    var $lists = $(".video-play-list li");
    //修改链接
    var cursrc = $lists.eq(index).attr("src");
    $("#video-src").attr("src",cursrc);
    //高亮当前
    $lists.eq(index).addClass("active").siblings().removeClass("active");
    //修改标题
    var title = $lists.eq(index).html();
    $(".wrapper_content > h2").html(title);
}