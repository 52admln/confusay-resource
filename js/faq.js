/*! 问答区提交模块 */
$(function () {
    $("#qa-submit-tiwen").click(function (){
        if(($("#qa-submit-title").val() == "")||($("#qa-submit-content").val() == "")){
            alert("请输入内容!")
        } else {
            var formData = $("#qa-submit-title").val();
            $.ajax({
                type:"POST",
                url:"receive.php",
                data:{
                    type:'tiwen', //用来区分是提问的表单
                    content:formData
                },
                cache:false,
                success: function (data) {
                    $("#js-question-content").append(data);
                }
            });
        }
        return false;
    });
    $("#qa-submit-answer").click(function (){
        if($("#qa-submit-content").val() == ""){
            alert("请输入内容!")
        } else {
            var formData = $("#qa-submit-content").val();
            $.ajax({
                type:"POST",
                url:"../receive.php",
                data:{
                    type:'answer',//用来区分是回答的表单
                    content:formData
                },
                cache:false,
                success: function (data) {
                    $("#js-answer-content").append(data);
                }
            });
        }
        return false;
    })
});