$(function () {
    slider();
    navbar();

    /**
     * 团队介绍
     * */

    $('.confusay-team').click(function(){
        if($(".team-intro").is(":hidden")){
            $(".team-intro").show(1000);
            var moveHeight = (Math.ceil($(document).scrollTop()/2))+$(document).scrollTop();
            $("body,html").animate({
                scrollTop:moveHeight
            },700);
            return false;
        }else{
            $(".team-intro").hide(1000);
            return false;
        }
    });
    /**
     * 团队介绍 个人简介
     * */
    $(".team-avatar-term").hover(function () {
        $(this).addClass("show").siblings().removeClass("show");
    },function () {
        $(".team-avatar-term").removeClass("show");
    });

});
/**
 * 轮播图
 * */
function slider() {
    var index = 0;
    var $loop_item = $(".js-loop-item"), //图片列表
        $loop_dot_item = $(".js-loop-dot-item"); //按钮
    var length = $loop_item.length;
    var timer;

    $loop_dot_item.click(function () {
        if ($(this).hasClass("on")) {
            return;
        }
        $(this).addClass("on").siblings().removeClass("on");
        index = $(this).index();
        go(index);
    });

    $(".loop-banner-list").hover(function(){
        clearTimeout(timer);
    },function () {
        timer = setTimeout(autogo, 3000);
    });
    //上一页
    $(".prev").click(function () {
        var curindex = $(".selected").index() -1; //获取当前的索引
        curindex = curindex<0?length -1:curindex; //判断时候超过图片数量的范围,如果超过则归位
        go(curindex);
        return false;
    });
    //下一页
    $(".next").click(function () {
        var curindex = $(".selected").index()+1;
        curindex = curindex>=length?0:curindex;
        go(curindex);
        return false;
    });
    //执行切换
    function go(index) {
        $loop_item.eq(index).addClass("selected").siblings().removeClass("selected");
        $loop_dot_item.eq(index).addClass("on").siblings().removeClass("on");
    }
    //自动换页
    function autogo() {
        if (index > length - 1) {
            index = 0;
        }
        go(index);
        index++;
        timer = setTimeout(autogo, 3000);
    }
    autogo();
}


/**
 * 导航条固定
 * */
function navbar() {
    var $navbar = $(".header");
    $(window).scroll(function () {
        var curScroll = $navbar.height() / 2; //获取导航条高度
        if ($(document).scrollTop() > 0) { //当滚动条滚动超过一半时，显示返回顶部
            $navbar.addClass("fixed").removeClass("static");
        } else if ($(document).scrollTop() == 0) {
            $navbar.addClass("static").removeClass("fixed");
        }
    })
}




