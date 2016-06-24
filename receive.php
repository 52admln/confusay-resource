<?php
//用来获取 提问页面表单内容,并且输出到页面中
if($_POST['type'] == 'tiwen') {
    $title = isset($_POST['content']) ? $_POST['content'] : '';
    $myTitle = '<li><div class="wenda-tag-img html-img fl"></div><div class="wenda-question fl"><div class="wenda-question-title"><a href="#">'.$title.'</a><span class="question-no">未解决</span></div>'. '<div class="wemda-question-from">来自 HTML5 · admin · '.date("Y年m月d日").' 提出</div></div><div class="wenda-quetion-btn fr"><a href="#">我来回答</a></div>'.'</li>';
    echo $myTitle;

}
//用来获取 回答页面表单内容,并且输出到页面中
if($_POST['type'] == 'answer') {
    $content = isset($_POST['content']) ? $_POST['content'] : '';
    $myContent = '<li><div class="wenda-answer-avatar fl"><img src="../images/avatar.png" height="40" width="40 "/></div><div class="wenda-answer-content fr"><div class="wenda-answer-inner">'. $content.'</div><div class="wenda-answer-info"><span>回答者:admin</span><span>时间: '.date("H:i:").'</span> </div></div></li>';
    echo $myContent;
}