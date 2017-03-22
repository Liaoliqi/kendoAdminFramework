var oyy = oyy || { 'settings': {}, 'locale': {} };
$(function(){
    oyy._init_ = function(){
        
    }
    oyy._t = function (str, args, options) {
        return str;
    }
    oyy.confirm = function(message,type){
        var close = $('<a class="close" href="#">x</a>');
        var template ="<div class=\"mess-header\"> \
            <h1>提示</h1> \
          </div> \
          <div class=\"mess-body\"> \
            <div class=\"contents\">{_CONTENTS_}</div> \
          </div> \
          <div class=\"mess-footer\"></div>";

        var overlay = $('<div class="mess-overlay"></div>');
        var mess = $('<div class="mess"></div>');
        var content = '<span class="messType '+type+'"></span><p>'+message+'</p>';
        var ok = $('<a title="Confirm button" class="mbtn primary btn-margin">确定</a>');
        var cancel = $('<a title="Cancel" class="mbtn secondary">取消</a>');
        close.click(function(){
            overlay.remove();
            mess.remove();
            return false;
        });
        $(mess).html(template);
        $(mess).find(".contents").html(content);
        $(mess).prepend(close);
        $(mess).find(".mess-footer").append(ok);
        $(mess).find(".mess-footer").append(cancel);
        var height = $(window).height();
        var width = $(window).width();
        var messHeight = $(mess).height();
        messHeight = parseInt(messHeight/2);
        $(mess).css("top",(parseInt(height/2)-messHeight));
        $(mess).css("left",(parseInt(width/2)-180));
        $("body").append(overlay);
        $("body").append(mess);
    }
    oyy.message = function(message,type){
        var close = $('<a class="close" href="#">x</a>');
        var template ="<div class=\"mess-header\"> \
            <h1>提示</h1> \
          </div> \
          <div class=\"mess-body\"> \
            <div class=\"contents\">{_CONTENTS_}</div> \
          </div>";
        var overlay = $('<div class="mess-overlay"></div>');
        var mess = $('<div class="mess"></div>');
        var content = '<div class="type"></div><span class="messType '+type+'"></span><p>'+message+'</p>';
        close.click(function(){
            overlay.remove();
            mess.remove();
            return false;
        });
        $(mess).html(template);
        $(mess).find(".contents").html(content);
        $(mess).prepend(close);
        var height = $(window).height();
        var width = $(window).width();
        var messHeight = $(mess).height();
        messHeight = parseInt(messHeight/2);
        $(mess).css("top",(parseInt(height/2)-messHeight));
        $(mess).css("left",(parseInt(width/2)-180));
        $("body").append(overlay);
        $("body").append(mess);
    }
    $.fn.select = function(options){
        var _self = this;
        var title = $(_self).find('.title');
        var items = $(_self).find('.items');
        var item = $(items).find('.item');
        var val = $(_self).find('.val');

        _self.click(function(){
            
        });
        item.click(function(){
            
        });
    }
});