/*! 全局适用 */
$(function () {
    loginPanel();

    /**
     *  返回顶部代码
     * */
    $(".backtop").click(function () {
        $("body,html").animate({
            scrollTop:0
        },700)
    });
    $(document).scroll(function () {
        var curScroll = ($(window).height())/2; //获取当前窗口的可视高度 减半
        if( $(document).scrollTop() > curScroll ) { //当滚动条滚动超过一半时，显示返回顶部
            $(".backtop").css({
                opacity:1,
                display:"block"
            });
        } else if($(document).scrollTop() <= curScroll && $(document).scrollTop() > 0) {
            $(".backtop").css({
                opacity:0,
                display:"none"
            });
        }
    });

});

/**
 * 表单验证
 */

function checkPassword() {
    var pass1 = $("#form-password-1");
    var pass2 = $("#form-password-2");
    if(pass1.val() != pass2.val()) {
        $("#form-tip-pw").html("<span>两次输入的密码不匹配!</span>"); //提示
        pass1.focus();
    } else {
        $("#form-tip-pw").html("");
    }
}
/**
 * 登陆注册弹出层
 */
function loginPanel() {
    //导航标签卡
    var $navItems = $(".login-nav-item");
    $navItems.click(function (){
        var curIndex = $(this).index();
        tagChange(curIndex);

    });

    //置顶导航条上的登陆注册按钮动作
    $("#js-nav-reg").click(function () {
        showPanel();
        tagChange(0);
    });
    $("#js-nav-log").click(function () {
        showPanel();
        tagChange(1);
    });
    //点击空白区域关闭
    $(".login-panel-wrapp").click(function (event) {
        var e = window.event || event;
        if ( e.stopPropagation ) { //如果提供了事件对象，则这是一个非IE浏览器
            e.stopPropagation();
        } else {
            //兼容IE的方式来取消事件冒泡
            window.event.cancelBubble = true;
        }
        hidePanel();
    });

    //面板内登录按钮旁链接
    $("#link-login").click(function () {
        tagChange(1);
    });
    /*

    $("#link-reg").click(function () {
        tagChange(0);
    });

    */
    //关闭按钮
    $(".login-close").click(function () {
        hidePanel();
    });
    //面板导航卡切换
    function tagChange(index) {
        $(".login-panel").eq(index).addClass("active").siblings().removeClass("active");
        $navItems.eq(index).addClass("on").siblings().removeClass("on");
    }
    //显示面板
    function showPanel() {
        $(".login-panel-wrapp").css({
            "display":"block"
        });
        $(".login-panel-inner").removeClass("panel-hidden").addClass("panel-show");
    }
    //隐藏面板
    function hidePanel() {
        $(".login-panel-wrapp").css({
            "display":"none"
        });
        $(".login-panel-inner").removeClass("panel-show").addClass("panel-hidden");

    }

    /**
     * 登陆表单
     */
    $("#form-login-submit").click(function () {
        if($("#form-login :input[type=email]").val() == "admin@confusay.com" && $("#form-login :input[type=password]").val() == "admin") {
            alert("登陆成功");
            hidePanel();
            $(".top-nav-login").addClass("hidden");
            $(".login-info").removeClass("hidden");

        } else {
            alert("帐号或密码错误!");
            if(!$(".login-info").hasClass("hidden")) {
                $(".login-info").addClass("hidden");
            }
        }
        return false;
    })

}

