$(function(){
    $(".add-offer-form").offer();
    $('#title').maxlength({
        alwaysShow: true,
        placement:"right",
        appendToParent:true
    });
    $(".title-length").html($('#title').val().length);
    $('#title').on('keyup', function() {
        var str = $(this).val();
        var len = str.length;
        $(".title-length").html(len);
    });

    $(".add-offer-form").bootstrapValidator({
        message: '您填入的值不合法',
        excluded:':hidden',
        fields:{
            title: {
                message: '产品标题不合法',
                validators: {
                    notEmpty: {
                        message: '产品标题不能为空'
                    },
                    stringLength: {
                        min: 1,
                        max: 30,
                        message: '产品标题必须在1到30个字之内'
                    }
                }
            },
            stock: {
                enabled: true,
                message: '可售数量不合法',
                validators: {
                    notEmpty: {
                        message: '可售数量不能为空'
                    },
                    integer: {
                        message: '可售数量必须为有效的整数数字'
                    },
                    greaterThan:{
                        value:1,
                        message: '可售数量不能小于1'
                    }
                }
            },
            moq: {
                enabled: false,
                message: '最小起订量不合法',
                validators: {
                    notEmpty: {
                        message: '最小起订量不能为空'
                    },
                    integer: {
                        message: '最小起订量必须为有效的整数'
                    },
                    greaterThan:{
                        value:1,
                        message: '最小起订量不能小于1'
                    }
                }
            },
            'price[0][min]': {
                message: '起订量不合法',
                validators: {
                    notEmpty: {
                        message: '起订量不能为空'
                    },
                    integer: {
                        message: '起订量必须为有效的整数'
                    },
                    greaterThan:{
                        value:1,
                        message: '起订量不能小于1'
                    }
                }
            },
            'price[0][price]': {
                message: '产品价格不合法',
                validators: {
                    notEmpty: {
                        message: '产品价格不能为空'
                    },
                    numeric: {
                        message: '产品价格不符合规则'
                    },
                    greaterThan:{
                        value:0,
                        message: '产品价格不能小于0'
                    },
                    lessThan:{
                        value:999999999,
                        message: name+'的价格不能大于999999999'
                    }
                }
            },
        }
    });
    //编辑时
    $(".spec-stocks").find(".spec-stock-item").each(function(){
        var key = $(this).attr("rel");
        var name = $(this).find(".name").html();
        $('.add-offer-form').bootstrapValidator('addField', 'spec['+key+'][stock]', {
            validators: {
                notEmpty: {
                    message: name+'的可售数量不能为空'
                },
                integer: {
                    message: name+'可售数量必须为有效的整数'
                },
                greaterThan:{
                    value:1,
                    message: name+'可售数量不能小于1'
                }
            }
        });
    });
    $(".prices-items").find(".price-item").each(function(){
        var key = $(this).attr("rel");
        //加验证
        $('.add-offer-form').bootstrapValidator('addField', 'price['+key+'][number]', {
            validators: {
                notEmpty: {
                    message: '起订量不能为空'
                },
                integer: {
                    message: '起订量必须为有效的整数'
                },
                greaterThan:{
                    value:1,
                    message: '起订量不能小于1'
                }
            }
        });
         $('.add-offer-form').bootstrapValidator('addField', 'price['+key+'][price]', {
            validators: {
                notEmpty: {
                    message: '产品价格不能为空'
                },
                numeric: {
                    message: '产品价格输入不符合规则'
                },
                greaterThan:{
                    value:0,
                    message: '产品价格不能小于0'
                },
                lessThan:{
                    value:999999999,
                    message:'产品价格不能大于999999999'
                }
            }
        });
    });
    $(".spec-prices").find(".spec-price-item").each(function(){
        var key = $(this).attr("rel");
        var name = $(this).find(".name").html();
        $('.add-offer-form').bootstrapValidator('addField', 'spec['+key+'][price]', {
            validators: {
                notEmpty: {
                    message: name+'的单价不能为空'
                },
                numeric: {
                    message: name+'的价格输入不合法'
                },
                greaterThan:{
                    value:0,
                    message: name+'的价格不能小于0'
                },
                lessThan:{
                    value:999999999,
                    message: name+'的价格不能大于999999999'
                }
            }
        });
        $('.add-offer-form').bootstrapValidator('addField', 'spec['+key+'][stock1]', {
            validators: {
                notEmpty: {
                    message: name+'的可售数量不能为空'
                },
                integer: {
                    message: name+'的可售数量必须为有效的整数'
                },
                greaterThan:{
                    value:1,
                    message: name+'的可售数量不能小于1'
                }
            }
        });
    });
    $("#btn-save").click(function(){
        //库存/无规格
        if($("#stock").is(':visible')){
            $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'stock', true);
        }
        else{
            $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'stock', false);
        }
        //最小起订量
        if($("#moq").is(':visible')){
            $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'moq', true);
        }
        else{
            $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'moq', false);
        }
        var type = $("price-type").val();
        if(type == 1){
            $(".spec-stocks").find(".spec-stock-item").each(function(){
                $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'spec['+$(this).attr("rel")+'][stock]', true);
            });
            $(".spec-prices").find(".spec-price-item").each(function(){
                $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'spec['+$(this).attr("rel")+'][price]', false);
                $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'spec['+$(this).attr("rel")+'][stock1]', false);
            });
            $(".prices-items").find(".price-item").each(function(){
                $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'price['+$(this).attr("rel")+'][number]', true);
                $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'price['+$(this).attr("rel")+'][price]', true);
            });
        }
        else if(type == 2){
            $(".spec-prices").find(".spec-price-item").each(function(){
                $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'spec['+$(this).attr("rel")+'][price]', true);
                $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'spec['+$(this).attr("rel")+'][stock1]', true);
            });
            //数量报价
            $(".prices-items").find(".price-item").each(function(){
                $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'price['+$(this).attr("rel")+'][number]', false);
                $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'price['+$(this).attr("rel")+'][price]', false);
            });
            //库存
            $(".spec-stocks").find(".spec-stock-item").each(function(){
                $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'spec['+$(this).attr("rel")+'][stock]', false);
            });
        }
        //图片
       /* var isHasImage = false;
        $(".upload-content").find("input").each(function(){
            if($(this).val().length > 0){
                isHasImage = true;
            }
        });*/
       /* if(!isHasImage){
            $(".offer-images").addClass('has-error');
            $(".offer-images").find('.help-block').html("图片不能为空");
            return false;
        }*/
        //详细说明
       /* var bodyText = $.trim(editorText.html());
        if(bodyText.length ==0){
            $(".offer-details").addClass('has-error');
            $(".offer-details").find('.help-block').html("详细信息不能为空");
            return false;
        }*/
    });
    $('.range-max').change(function(){
        var max = $(this).val();
        var min = $(this).parent().find('.range-min').val();
        if(min.length > 0){
            min = parseFloat(min);
            max = parseFloat(max);
            $('.add-offer-form').bootstrapValidator('addField',$(this).attr('name'), {
                validators: {
                    greaterThan:{
                        inclusive:false,
                        value:min,
                        message: '范围必须大于'+min
                    }
                }
            });
            if(max <= min){
                //$(this).val('');
                //验证不通过
                $('.add-offer-form').data('bootstrapValidator').updateStatus($(this).attr('name'), 'INVALID', 'greaterThan');
            }
            else{
                $('.add-offer-form').data('bootstrapValidator').updateStatus($(this).attr('name'), 'VALID', 'greaterThan');
            }
        }
    });
    $('.range-min').change(function(){
        var min = $(this).val();
        var max = $(this).parent().find('.range-max').val();
        if(max.length > 0){
            min = parseFloat(min);
            max = parseFloat(max);
            $('.add-offer-form').bootstrapValidator('addField',$(this).attr('name'), {
                validators: {
                    lessThan:{
                        inclusive:false,
                        value:max,
                        message: '范围必须小于'+max
                    }
                }
            });

            if(max <= min){
                //$(this).val('');
                $('.add-offer-form').data('bootstrapValidator').updateStatus($(this).attr('name'), 'INVALID', 'lessThan');
            }
            else{
                $('.add-offer-form').data('bootstrapValidator').updateStatus($(this).attr('name'), 'VALID', 'lessThan');
            }
        }
    });
});
function utf8Length(string) {
    var utf8length = 0;
    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);
      if (c < 128) {
        utf8length++;
      }
      else if ((c > 127) && (c < 2048)) {
        utf8length = utf8length + 2;
      }
      else {
        utf8length = utf8length + 3;
      }
    }
    return utf8length;
}
function appendImage(e,url){
    var img = '<img src="'+url+'" width="113px" height="113px">';
    img+= '<span class="iem posi-abso" onclick="deleteImg(this)"></span>';
    var hidden = '<input type="hidden" name="images[]" value="'+url+'">';
    $(e).html(img+hidden);
    $(e).parents(".offer-images").removeClass("has-error");
    $(e).parents(".offer-images").find(".help-block").empty();
}
function deleteImg(item,event){
      var src = oyy.settings.assetsUrl+"/images/upload.jpg";
        $(item).prev().attr("src",src);
        $(item).next().val("");
        $(item).remove();
        event=event||window.event;
      event.stopPropagation();
}

function removeMe(e){
    var p = $(e).parents(".added-attr");
    $(p).remove();
}
//删除价格区间
function removePrice(e){
    var p = $(e).parents(".price-item");
    var key = $(p).attr("rel");
    var lastE = $(p).prev();
    var del = $(lastE).find(".del-price");

    $('.add-offer-form').data('bootstrapValidator').updateStatus('price['+key+'][number]', 'VALID', null);
    $('.add-offer-form').data('bootstrapValidator').updateStatus('price['+key+'][price]', 'VALID', null);
    //$('.add-offer-form').bootstrapValidator('removeField', 'price['+key+'][min]');
    //$('.add-offer-form').bootstrapValidator('removeField', 'price['+key+'][price]');
    $(del).show();
    $(p).remove();
}
function removeSpec(e,key){
    //var specE = $(e).prev();
    //var name = $(specE).attr("name");
    //var key = $(specE).attr("rel");
    //删除库存
    $(".spec-stock-item").each(function(){
        if($(this).attr("rel") == key){
            $(this).remove();
            $('.add-offer-form').bootstrapValidator('removeField', 'spec['+key+'][stock]');
        }
    });
    //删除报价
    $(".spec-price-item").each(function(){
        if($(this).attr("rel") == key){
            $(this).remove();
            $('.add-offer-form').bootstrapValidator('removeField', 'spec['+key+'][price]');
            $('.add-offer-form').bootstrapValidator('removeField', 'spec['+key+'][stock1]');
        }
    });
    //删除自己
    var p = $(e).parents(".added-spec");
    $(p).remove();
    checkSpec();
}
function setSpec(e){
    var value = $.trim($(e).val());
    var name = $(e).attr("name");
    var key = $(e).attr("rel");
    if(value.length > 0){
        //库存
        setStock(key,value);
        //价格
        setPrice(key,value);
    }
    else{
        //库存
        delStock(key);
        //价格
        delPrice(key);
    }
    checkSpec();
}

function checkAttr(e){
    var cusAttrE = $(".item-attr .custom-attr .cus-attr");
    cusAttrE.removeClass("active");
    $(e).addClass("active");
    var value = $(e).val();
    var attrs = [];
    var cusAttrs = [];
    var attrsE = $(".item-attr .attr-its");
    $(attrsE).each(function(){
        attrs.push($(this).attr("for"));
    });
     var cusAttrE = $(".item-attr .custom-attr .cus-attr");
    $(cusAttrE).each(function(){
        if(!$(this).hasClass("active")){
            var v = $(this).val();
            if(v.length > 0){
                cusAttrs.push(v);
            }
        }
    });
    var newAttrs = $.merge(attrs,cusAttrs);
    console.log(newAttrs);
    if($.inArray(value,newAttrs) != -1){
        oyy.message("您输入的属性已经存在");
        $(e).val("");
    }
}
function setStock(key,name){
    //添加库存
    var specStocksE = $(".add-offer-form").find(".spec-stocks");
    var curlE = $(specStocksE).find("tr[rel="+key+"]");
    var length = $(curlE).length;
    if(length == 0){
        var specStockStr = "<tr class=\"spec-stock-item\" rel=\"{_key_}\"> \
                        <td class=\"name\"> \
                          {_name_} \
                        </td> \
                        <td style=\"text-align: center;\"> \
                          <input type=\"text\" maxlength=10 class=\"form-control input-sm\" name=\"spec[{_key_}][stock]\"> \
                        </td> \
                      </tr>";
        specStockStr = specStockStr.replace(/{_key_}/g,key);
        specStockStr = specStockStr.replace(/{_name_}/g,name);
        //加验证
        $(specStocksE).append(specStockStr);
        $('.add-offer-form').bootstrapValidator('addField', 'spec['+key+'][stock]', {
            validators: {
                notEmpty: {
                    message: name+'的可售数量不能为空'
                },
                integer: {
                    message: name+'可售数量必须为有效的整数'
                },
                greaterThan:{
                    value:1,
                    message: name+'可售数量不能小于1'
                }
            }
        });
    }
    else{
        //更新
        $(curlE).find(".name").html(name);
    }
}
function delStock(key){
    $(".spec-stock-item").each(function(){
        if($(this).attr("rel") == key){//enableFieldValidators
            $('.add-offer-form').bootstrapValidator('removeField', 'spec['+key+'][stock]');
            //$('.add-offer-form').bootstrapValidator('enableFieldValidators', 'spec['+key+'][stock]',false);
            $(this).remove();
        }
    });
}
function setStockTotal(){
    var total = 0;
    $(".spec-prices .st").each(function(){
        total += parseInt($(this).val());
    });
    $(".total-stock").html(total);
}
function setPrice(key,name){
    var specPriceE = $(".add-offer-form").find(".spec-prices");
    var curlE = $(specPriceE).find("tr[rel="+key+"]");
    var length = $(curlE).length;
    if(length == 0){
        var specPriceStr = " <tr class=\"spec-price-item\" rel=\"{_key_}\"> \
          <td class=\"name\">{_name_}</td> \
          <td><input type=\"text\" maxlength=12 class=\"form-control input-sm\" name=\"spec[{_key_}][price]\"></td> \
          <td><input type=\"text\" maxlength=10 onchange=\"setStockTotal()\" class=\"form-control input-sm st\" name=\"spec[{_key_}][stock1]\"></td> \
        </tr>";
        specPriceStr = specPriceStr.replace(/{_key_}/g,key);
        specPriceStr = specPriceStr.replace(/{_name_}/g,name);
        $(specPriceE).append(specPriceStr);
        $('.add-offer-form').bootstrapValidator('addField', 'spec['+key+'][price]', {
            validators: {
                notEmpty: {
                    message: name+'的单价不能为空'
                },
                numeric: {
                    message: name+'的价格输入不合法'
                },
                greaterThan:{
                    value:0,
                    message: name+'的价格不能小于0'
                },
                lessThan:{
                    value:999999999,
                    message: name+'的价格不能大于999999999'
                }
            }
        });
        $('.add-offer-form').bootstrapValidator('addField', 'spec['+key+'][stock1]', {
            validators: {
                notEmpty: {
                    message: name+'的可售数量不能为空'
                },
                integer: {
                    message: name+'的可售数量必须为有效的整数'
                },
                greaterThan:{
                    value:1,
                    message: name+'的可售数量不能小于1'
                }
            }
        });
    }
    else{
        //更新
        $(curlE).find(".name").html(name);
    }
}
function delPrice(key){
    $(".spec-price-item").each(function(){
        if($(this).attr("rel") == key){//enableFieldValidators
            $('.add-offer-form').bootstrapValidator('removeField', 'spec['+key+'][price]');
            $('.add-offer-form').bootstrapValidator('removeField', 'spec['+key+'][stock1]');
            //$('.add-offer-form').bootstrapValidator('enableFieldValidators', 'spec['+key+'][price]',false);
            //$('.add-offer-form').bootstrapValidator('enableFieldValidators', 'spec['+key+'][stock1]',false);
            $(this).remove();
        }
    });
}
function checkSpec(){
    $('.add-offer-form').data('bootstrapValidator').disableSubmitButtons(false);
    var isEmpty = true;
    $(".spec-input").each(function(){
        var value = $.trim($(this).val());
        if(value.length > 0){
            isEmpty = false;
        }
    });
    if(isEmpty){
        $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'stock', true);
        $(".nospec-price-dis").show();
        $(".spec-price-dis").hide();
        $(".num-price-dis").hide();

        $(".price-type-dis").hide();

        //按照产品数量报价
        $('input[name="priceType"]').each(function(){
            if($(this).val() == 1){
                $(this).click();
            }
        });
    }
    else{
        $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'stock', false);
        //判断是否是按照规格报价
        if($("input[name='priceType']:checked").val() == 1){
            $(".num-price-dis").show();
        }
        else{
            $(".spec-price-dis").show();
        }
        if($("input[name='tradeMode']:checked").val() == 1){
            $(".price-type-dis").show();//需判断是否选择了询价
        }
        $(".nospec-price-dis").hide();
        //$(".spec-price-dis").hide();
    }

}
KindEditor.ready(function(K) {
    window.editorText = K.create('textarea[name="body"]',{
       /* uploadJson : oyy.settings.basePath+'/upload.php',
        filePostName : 'imgFile',
        extraFileUploadParams:{fieldName:'imgFile',limitSize:1024*5,limitTypes:"jpg,png"},
        urlType : 'domain',
        formatUploadUrl:false,*/
        afterBlur: function(){
            this.sync();
            var str = $.trim(this.html());
            if(str.length == 0){
                $(".offer-details").addClass("has-error");
                $(".offer-details").find(".help-block").html("详细说明不能为空");
            }
            else{
                $(".offer-details").find(".help-block").html("");
                $(".offer-details").removeClass("has-error");
            }
        }
    });
    $('.upload-content').click(function(){
        var $this = this;
        var editor= K.editor({
            //uploadJson : oyy.settings.basePath+'/upload.php',
            //filePostName : 'imgFile',
            //extraFileUploadParams:{fieldName:'imgFile',limitSize:1024*5,limitTypes:"jpg,png,jpeg"},
            //urlType : 'domain',
            //formatUploadUrl:false,
            //allowFileManager : false
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
    /*var uploadbutton = K.uploadbutton({
        button : K('.upload-content 1')[0],
        fieldName : 'imgFile',
        url : oyy.settings.basePath+'/upload.php',
        extraParams:{fieldName:'imgFile',limitSize:1024*5,limitTypes:"jpg,gif,pdf"},
        afterUpload : function(data) {
            if (data.error === 0) {
                alert(data.url);
            }
            else {
                alert(data.message);
            }
        }
    });
    uploadbutton.fileBox.change(function(e) {
        uploadbutton.submit();
    });*/
});
$.fn.offer = function(){
    var _self = this;
    var addAttrE        = $(_self).find(".add-attr");
    var addSpecE        = $(_self).find(".add-spec");
    var unitE           = $(_self).find(".unit");
    var customAttrs     = $(_self).find(".custom-attr");
    var customSpec      = $(_self).find(".custom-spec");
    var priceTypeE      = $(_self).find(".price-type");
    var priceRegionSet  = $(_self).find(".price-region-set");
    var specPriceSet    = $(_self).find(".spec-price-set");

    var nospecPriceDis  = $(_self).find(".nospec-price-dis");
    var specPriceDis    = $(_self).find(".spec-price-dis");
    var numPriceDis     = $(_self).find(".num-price-dis");
    var priceTypeDis    = $(_self).find(".price-type-dis");
    var unitSelect      = $(_self).find(".unit-select");
    var addPrice        = $(_self).find(".add-price");
    var priceItems      = $(_self).find(".prices-items");
    var moq             = $(_self).find(".moq");
    var tradingStyleE   = $(_self).find(".trading-style");

    customAttrs.add = function(){
        var count = $(this).find(".added-attr").length;
        if(count < 10){
            var attrStr = "<div class=\"form-inline margin-bottom-md added-attr\">\
              <div class=\"col-sm-3 control-label\"> \
                <label class=\"sr-only\">属性名称</label> \
                <input type=\"text\" class=\"form-control cus-attr\" onblur=\"checkAttr(this)\" name=\"attrs[{_key_}][name]\" maxlength=10 placeholder=\"属性名称\"> \
              </div> \
              <div class=\"form-group pad-top-7\"> \
                <label class=\"sr-only\">属性值</label> \
                <input type=\"text\" class=\"form-control\" name=\"attrs[{_key_}][value]\" maxlength=20 placeholder=\"属性值\"> \
              </div> \
              <button type=\"button\" class=\"btn btn-link mag-top-7\" onclick=\"removeMe(this)\">删除</button> \
            </div>";
            attrStr = attrStr.replace(/{_key_}/g,count);
            $(this).append(attrStr);
        }
    }
    customSpec.add = function(){
        var count = $(this).find(".added-spec").length;
        if(count < 9){
            var specStr = "<div class=\"form-group added-spec\"> \
              <label class=\"col-sm-2 control-label\"> \
                规格 \
              </label> \
              <div class=\"col-sm-4\"> \
                <input type=\"text\" onblur=\"setSpec(this)\" class=\"form-control spec-input\" maxlength=10 \
                name=\"spec[{_key_}][name]\" \
                rel={_key_} placeholder=\"规格名称\"> \
              </div> \
              <button type=\"button\" class=\"btn btn-link\" onclick=\"removeSpec(this,{_key_})\">删除</button> \
            </div>";

            specStr = specStr.replace(/{_key_}/g,(count+1));
            $(this).append(specStr);
        }
    }
    $(addAttrE).click(function(){
        customAttrs.add();
    });
    $(addSpecE).click(function(){
        customSpec.add();
    });
    $(priceTypeE).change(function(){
        var val = $(this).val();
        if(val == 1){
            //按照数量报价
            //库存
            $(".spec-stocks").find(".spec-stock-item").each(function(){
                $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'spec['+$(this).attr("rel")+'][stock]', true);
            });
            //规格报价
            $(".spec-prices").find(".spec-price-item").each(function(){
                $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'spec['+$(this).attr("rel")+'][price]', false);
                $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'spec['+$(this).attr("rel")+'][stock1]', false);
            });
            //最小起订量
            $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'moq', false);
            //数量报价
            $(".prices-items").find(".price-item").each(function(){
                $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'price['+$(this).attr("rel")+'][number]', true);
                $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'price['+$(this).attr("rel")+'][price]', true);
            });
            $(specPriceSet).hide();
            $(priceRegionSet).show();
            $(specPriceDis).hide();
            $(moq).hide();
            $(numPriceDis).show();
        }
        else if(val == 2){
            //按照规格报价
            //规格报价
            $(".spec-prices").find(".spec-price-item").each(function(){
                $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'spec['+$(this).attr("rel")+'][price]', true);
                $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'spec['+$(this).attr("rel")+'][stock1]', true);
            });
            //最小起订量
            $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'moq', true);
            //数量报价
            //数量报价
            $(".prices-items").find(".price-item").each(function(){
                $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'price['+$(this).attr("rel")+'][number]', false);
                $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'price['+$(this).attr("rel")+'][price]', false);
            });
            //库存
            $(".spec-stocks").find(".spec-stock-item").each(function(){
                $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'spec['+$(this).attr("rel")+'][stock]', false);
            });
            $(priceRegionSet).hide();
            $(specPriceSet).show();
            $(specPriceDis).show();
            $(moq).show();
            $(numPriceDis).hide();
        }
    });
    $(unitSelect).change(function(){
        var value = $(this).val();
        if(value == 0){
            value = "";
        }
        $(unitE).html(value);
    });
    priceItems.add = function(){
        //先验证
        var lastE = $(this).find(".price-item").last();
        var lastKey = $(lastE).attr("rel");
        var lastMinE = $(lastE).find("input[name='price["+lastKey+"][number]']");
        var lastPriceE = $(lastE).find("input[name='price["+lastKey+"][price]']");
        var lastMin = $.trim($(lastMinE).val());
        var lastPrice = $.trim($(lastPriceE).val());
        if(lastMin.length==0){
            $(lastMinE).focus();
            return false;
        }
        else if(! /^(?:-?(?:0|[1-9][0-9]*))$/.test(lastMin)){
            $(lastMinE).focus();
            return false;
        }
        if(lastPrice.length==0){
            $(lastPriceE).focus();
            return false;
        }
        else if(!(!isNaN(parseFloat(lastPrice)) && isFinite(lastPrice))){
            $(lastPriceE).focus();
            return false;
        }
        var count = $(this).find(".price-item").length;
        if(count<3){
            var unit = $(".unit-select").val();
            var del = $(this).find(".del-price");
            $(del).hide();
            var str = "<tr class=\"price-item\" rel={_key_}> \
                      <td> \
                          <span>起订量</span> \
                          <input type=\"text\" class=\"form-control input-sm\" onblur=\"checkMin(this)\" \
                            name=\"price[{_key_}][number]\" maxlength=10> \
                          <span class=\"unit\">{_unit_}</span> \
                          <span>以上</span> \
                      </td> \
                      <td> \
                          <input type=\"text\" class=\"form-control input-sm\" onblur=\"checkPrice(this)\" \
                            name=\"price[{_key_}][price]\" maxlength=12> \
                          <span>元/</span> \
                          <span class=\"unit\">{_unit_}</span> \
                          <button type=\"button\" class=\"btn btn-link del-price\" onclick=\"removePrice(this)\">删除</button> \
                      </td> \
                    </tr>";
            str = str.replace(/{_key_}/g,(count));
            str = str.replace(/{_unit_}/g,(unit));
            $(this).append(str);
            //加验证
            $('.add-offer-form').bootstrapValidator('addField', 'price['+count+'][number]', {
                validators: {
                    notEmpty: {
                        message: '起订量不能为空'
                    },
                    integer: {
                        message: '起订量必须为有效的整数'
                    },
                    greaterThan:{
                        value:1,
                        message: '起订量不能小于1'
                    }
                }
            });
             $('.add-offer-form').bootstrapValidator('addField', 'price['+count+'][price]', {
                validators: {
                    notEmpty: {
                        message: '产品价格不能为空'
                    },
                    numeric: {
                        message: '产品价格输入不符合规则'
                    },
                    greaterThan:{
                        value:0,
                        message: '产品价格不能小于0'
                    },
                    lessThan:{
                        value:999999999,
                        message: '产品价格不能大于999999999'
                    }
                }
            });
        }
    }
    $(addPrice).click(function(){
        priceItems.add();
    });
    $(tradingStyleE).find("input[name='tradeMode']").change(function(){
        var type = $(this).val();
        if(type == 2){
            $(priceTypeDis).hide();
            $(_self).find(".price-area").hide();
        }
        else{
            var isEmpty = true;
            $(_self).find(".spec-input").each(function(){
                var value = $.trim($(this).val());
                if(value.length > 0){
                    isEmpty = false;
                }
            });
            if(!isEmpty){
                $(priceTypeDis).show();
            }
            $(_self).find(".price-area").show();
        }
    });
}
function checkMin(e){
    var min = $.trim($(e).val());
    var p = $(e).parents(".price-item");

    var preE = $(p).prev();
    var preKey = $(preE).attr("rel");
    var preMinE = $(preE).find("input[name='price["+preKey+"][number]']");
    var preMin = parseInt($(preMinE).val());
    min = parseInt(min);
    if(! /^(?:-?(?:0|[1-9][0-9]*))$/.test(min)){
        $(e).val("");
        $('.add-offer-form').data('bootstrapValidator').revalidateField($(e));
    }
    else if(min <= preMin){
        //$(e).val("");
        //$('.add-offer-form').data('bootstrapValidator').revalidateField($(e));
        $('.add-offer-form').data('bootstrapValidator').updateMessage($(e).attr('name'), 'stringLength', '价格区间设置有误');
        $('.add-offer-form').data('bootstrapValidator').updateStatus($(e).attr('name'), 'INVALID', 'stringLength');
    }
    var nextE = $(p).next();
    if(nextE.length >0 ){
        var nextKey = $(nextE).attr("rel");
        var nextMinE = $(nextE).find("input[name='price["+nextKey+"][number]']");
        var nextMin = parseInt($(nextMinE).val());
        if(min >= nextMin){
            //$(e).val("");
            //$('.add-offer-form').data('bootstrapValidator').revalidateField($(e));
            $('.add-offer-form').data('bootstrapValidator').updateMessage($(e).attr('name'), 'stringLength', '价格区间设置有误');
            $('.add-offer-form').data('bootstrapValidator').updateStatus($(e).attr('name'), 'INVALID', 'stringLength');
        }
    }

}
function checkPrice(e){
    var price = $.trim($(e).val());
    var p = $(e).parents(".price-item");
    var preE = $(p).prev();
    var preKey = $(preE).attr("rel");
    var prePriceE = $(preE).find("input[name='price["+preKey+"][price]']");
    var prePrice = parseFloat($(prePriceE).val());
    price = parseFloat(price);
    if(!(!isNaN(parseFloat(price)) && isFinite(price))){
        $(e).val("");
        $('.add-offer-form').data('bootstrapValidator').revalidateField($(e));
        return false;
    }
    else if(price >= prePrice){
        //$(e).val("");
        //$('.add-offer-form').data('bootstrapValidator').revalidateField($(e));
        //updateMessage
        $('.add-offer-form').data('bootstrapValidator').updateMessage($(e).attr('name'), 'stringLength', '价格区间设置有误');
        $('.add-offer-form').data('bootstrapValidator').updateStatus($(e).attr('name'), 'INVALID', 'stringLength');
    }
    var nextE = $(p).next();
    if(nextE.length >0 ){
        var nextKey = $(nextE).attr("rel");
        var nextPriceE = $(nextE).find("input[name='price["+nextKey+"][price]']");
        var nextPrice = parseInt($(nextPriceE).val());
        if(price <= nextPrice){
            //$(e).val("");
            //$('.add-offer-form').data('bootstrapValidator').revalidateField($(e));
            $('.add-offer-form').data('bootstrapValidator').updateMessage($(e).attr('name'), 'stringLength', '价格区间设置有误');
            $('.add-offer-form').data('bootstrapValidator').updateStatus($(e).attr('name'), 'INVALID', 'stringLength');
        }
    }
}
