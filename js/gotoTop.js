/*返回顶部*/
//当页面加载完成
$(function(){
    //把函数挂载在windows上  暴露出去
    windows.gotoTop=function(options){
    //默认参数（看一眼）
    var defaults={
    bottom:'100px'
    }
    //参数合并
    var params=$.extend({},defaules,options)
    //准备结构
    var $gotoTopHtml=$('<div class="backToTop">....
    //写样式定位
    $gotoTopHtml.css({
        function (){

        }
    });
    
    //返回顶部的JS代码
    /*返回顶部*/
    //绑定事件
    $(document).scoll(function(){...
    })
    //返回顶部功能（动态添加的元素 需要使用事件委托，才能绑定事件）
    $('body').on('click','.backToTop',function(){...
    })
    //追加到页面的尾部
    $('body').append($gotoTopHtml)
    }
    })
    