/**
 *-------------------------体验显示-----------------------
 **/

/*提交*/
$(function(){
    $('#btn').click(function(){
        var html_str = $('#ttr').val();
        $(".result").html(html_str);
    });
    $("#clr").click(function(){
        var html_str = $('#ttr-hide').val();
        $("#ttr").val(html_str);
    })
});