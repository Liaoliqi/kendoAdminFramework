
//上传图片插件
function appendImage(e,url){
    var img = '<img src="'+url+'" width="113px" height="113px">';
    img+= '<span class="iem posi-abso" onclick="deleteImg(this)"></span>';
    var hidden = '<input type="hidden" name="images[]" value="'+url+'">';
    $(e).html(img+hidden);
    $(e).parents(".offer-images").removeClass("has-error");
    $(e).parents(".offer-images").find(".help-block").empty();
}
function deleteImg(item,event){
    var src = oyy.settings.basePath+"/assets/images/upload.jpg";
    $(item).prev().attr("src",src);
    $(item).next().val("");
    $(item).remove();
    event=event||window.event;
    event.stopPropagation();
}
KindEditor.ready(function(K) {
    window.editorText = K.create('textarea[id="editor"]',{
        allowImageRemote:false,
        afterBlur: function(){
            this.sync();
            var str = $.trim(this.html());
        }
    });
    $('.upload-content').click(function(){
        var $this = this;
        var editor= K.editor({
            allowImageRemote:false,
            filePostName : 'imgFile',
            extraFileUploadParams:{fieldName:'imgFile',limitSize:1024*5,limitTypes:"jpg,png,jpeg"},
            urlType : 'domain',
            formatUploadUrl:false,
            allowFileManager : false
        });
        editor.loadPlugin('image', function() {
            editor.plugin.imageDialog({
                showRemote : false,
                clickFn:function(url) {
                    appendImage($this,url);
                    editor.hideDialog();
                }
            });
        });
    });
});