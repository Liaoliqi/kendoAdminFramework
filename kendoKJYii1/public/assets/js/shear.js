 $(function(){
    $("#save-tpl-form").bootstrapValidator({
       // container: 'tooltip',
        message: '您填入的值不合法',
       /* feedbackIcons: {
            valid: 'glyphicon glyphicon-XX',
            invalid: 'glyphicon glyphicon-XX',
            validating: 'glyphicon glyphicon-XX'
        },*/
        fields:{
           /* tongyi: {
                message: '请先同意信息发布规则',
                validators: {
                    notEmpty: {
                        message: '请先同意信息发布规则'
                    },
                }
            },*/
			title: {
                message: '标题不合法',
                validators: {
                    notEmpty: {
                        message: '标题不能为空'
                    },
					stringLength: {
                        min: 1,
                        max: 30,
                        message: '标题必须在1到30个字之内'
                    }
                }
            },
           /* warehouse_name: {
                validators: {
                    notEmpty: {
                        message: '原料仓库名不能为空'
                    },
                    stringLength: {
                        min: 1,
                        max: 15,
                        message: '原料仓库名15个字符内'
                    }
                }
            },*/
          /*  warehouse_address: {
                validators: {
                    notEmpty: {
                        message: '原料仓库地址不能为空'
                    }
                }
            },*/
           /* raw_from: {
                message: '原料所在地',
                validators: {
                    notEmpty: {
                        message: '请选择原料所在地'
                    },
                }
            },*/
			/*enquiry_type:{
				message: '询价方式',
                validators: {
                    notEmpty: {
                        message: '请选择询价方式'
                    },
					callback: {
                        message: '请选择询价供应商',
                        callback: function(value, validator) {
                           var length=$("#company_list").find("input[name='seller_id[]']:checked").length;
							var length_1=$("#company_list_1").find("input[name='seller_id_3[]']:checked").length;
							var value=$("[name='enquiry_type']:checked").val();
							$("#jg_company_name").hide();
							if(value==2 && length==0 ){
								return false;
							}else if(value==3 && length_1==0 ){
								return false;
							}else if(value==3 && length_1>0){
								$("#jg_company_name").show();
							 }
							 return true;
                        }
                    }
                }
			},*/
            
           /* valuation_method: {
                message: '计价方式',
                validators: {
                    notEmpty: {
                        message: '计价方式不能为空'
                    },

                }
            },*/
           /* accounts_method: {
                message: '费用结算方式',
                validators: {
                    notEmpty: {
                        message: '费用结算方式'
                    },

                }
            },
            raw_come_time: {
                message: '原料预入库日期',
                validators: {
                    notEmpty: {
                        message: '原料预入库日期不能为空'
                    },

                }
            },*/
             
            /*expected_complete_time: {
                message: '要求加工完成日期',
                validators: {
                    notEmpty: {
                        message: '要求加工完成日期'
                    },

                }
            },*/
			setting_contacts: {
                message: '联系人',
                validators: {
                    notEmpty: {
                        message: '联系人不能为空'
                    },  
                }
            },
			 setting_phone: {
                message: '电话号码',
                validators: {
                    notEmpty: {
                        message: '电话号码不能为空'
                    },  
					regexp: {
                        regexp: /^(0?1\d{10})$|^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$|^400[016789]\d{6}$/,
                        message: '请输入正确的电话号码，400电话格式：4009990000，座机：021-60996240，手机：11位手机号'
                    }
                }
            }
           
        }
    });
 })
 /**************库存导入*********/
var kucun_list={};
$(function(){
    $("#modal_content_button").click(function(){
        var input=$(".modal_content_button").find("input");
        var select_=$(".modal_content_button").find("select");
        var post_data={};
        $(input).each(function(i,v){
            var value=$(v).val();
            var name=$(v).attr("name");
            post_data[name]=value;
        })
        $(select_).each(function(i,v){
            var value=$(v).val();
            var name=$(v).attr("name");
            post_data[name]=value;
        })
        $.getJSON("/helper/shear/process_add_kucun",post_data,function(data){
            var source=$("#kucun_list_script").html();
			Render_data={'items':data};
			var render = template.compile(source);
			var compiledRendered = render(Render_data);
            $("#kucun_list").html(compiledRendered);
            kucun_list=data;
			$('#stockTable').dataTable(
				   {
              //跟数组下标一样，第一列从0开始，这里表格初始化时，第四列默认降序
				   'bSort':false,
				   'iDisplayLength':5,
             	 }
			);
        })
        return false;
    })
})

var checkbox_ids={};
function check_all(obj){
    var inputs = $(".checkbox_id");
    $(obj).prop('checked') ? inputs.prop('checked',true):inputs.prop('checked',false);
	set_checkbox_ids();
}

function set_checkbox_ids(){
	$(".checkbox_id").each(function(i,v){
		var id=$(v).val();
		//console.log(id+":"+$(v).prop('checked'));
		if($(v).prop('checked')){
			checkbox_ids[id]=1;
		}else{
			checkbox_ids[id]=0;
		}
	})
}


function comfim_kucun(){
    var inputs = $(".checkbox_id");
    var k=0;
    var data={};
	//console.log(checkbox_ids);
/*    $(checkbox_ids).each(function(id,v){
			console.log(v);
        if(v==1){
            data[i]=kucun_list[id];
            k++;
        }
    })*/
	$.each(checkbox_ids,function(id,v){
		//console.log(id+":"+v);
	 	if(v==1){
            data[id]=kucun_list[id];
            k++;
        }
	})
    if(k==0){
        oyy.message("至少选择一种原料");
        return false;
    }
    clear_clone_tr();
    $.each(data,function(i,v){
		//add_size(v);
		var r=no_has_in(v.package_no);
		if(r){
	 		 add_size(v);
		}
    })
    $('#kucun').modal('hide');
    all_weight();
}

function no_has_in(material_v){
//	var arr = [ "xml", "html", "css", "js" ];  
	//return $.inArray(material_v, arr); 
	var arr=new Array();
	var material=$(".material_input");
	if($(material).length>0){
		$.each(material,function(i,v){
			var value=$(v).val();
			if(value!=""){
				arr.push(value);		
			}	
		})
	}
	var r=$.inArray(material_v,arr);
	//console.log(r);
	if(r==-1){//存在
			return true;
	}else{
		return false;	
	}
	
}
/******导入信息的时候，把多余的删除掉***/
function clear_clone_tr(){
    var clone_tr=$(".table_clone_tr");
	var l=$(clone_tr).length;
	$(".table_clone_tr").remove();
	return;
    $(clone_tr).each(function(){
        var input=$(this).find("input[type='text']");
        bool="";
        $(input).each(function(i,v){
            var value=$(v).val();
            if(value==""){
                bool+="0";
            }
        })
        if(bool.length>3){
            $(this).remove();
        }
    })
}



/******重量总计***/
function all_weight(){
	 var w_all=0;
	$(".weigt_material").each(function(i,v){
        var w=$(v).val();
        if(w>0){
            //console.log(w+"大于0");
            w_all+=Number(w);
        }
    })
	if(!(w_all>0)){
		w_all=0;
	}else{
		w_all=w_all.toFixed(4);
	}
	$("#all_weight").show();
	$("#all_weight").find("strong").html(w_all);
}


 /**********加原卷信息*****/
function add_size(obj){
	if(typeof(obj)=="undefined"){
        obj={};
    }
	var clone_tr= get_clone_tr(obj);
	   $('#material_div').before(clone_tr);
	   add_validator(len);
	   setorder();
       len++;
	   all_weight();
}

 


function setorder(){
           var len = $('[data-order="true"]').size();
           for(var i=0;i<len;i++){
               $('[data-order="true"] :eq('+i+')').html(i+1);
           }
		   $(".table_clone_tr").eq(0).find(".glyphicon-minus").hide();
   }
   
/****原卷信息加验证**/
function add_validator(i){
    $('.form-horizontal').bootstrapValidator('addField', 'material['+i+'][package_no]', {
        validators: {
            notEmpty: {
                message: '捆包号不能为空'
            },
        }
    });
    $('.form-horizontal').bootstrapValidator('addField', 'material['+i+'][spec]', {
        validators: {
            notEmpty: {
                message: '规格不能为空'
            },
        }
    });
    $('.form-horizontal').bootstrapValidator('addField', 'material['+i+'][cat_name]', {
     validators: {
     notEmpty: {
     message: '不能为空'
     },
     }
     });

    $('.form-horizontal').bootstrapValidator('addField', 'material['+i+'][steel_grade]', {
        validators: {
            notEmpty: {
                message: '不能为空'
            },
        }
    });
	
	$('.form-horizontal').bootstrapValidator('addField', 'material['+i+'][product]', {
        validators: {
            notEmpty: {
                message: '成品信息不能为空'
            },
        }
    });
    $('.form-horizontal').bootstrapValidator('addField', 'material['+i+'][weight]', {
        validators: {
            notEmpty: {
                message: '重量不能空'
            },
            numeric:{
                message: '必须为数字'
            },
            greaterThan:{
                value:0,
                message: '不能小于0',
				inclusive:false,
            },
			regexp: {
                      regexp: /^\d+(\.\d{0,4})?$/,
                      message: '最多四位小数 '
            }
        }
    });
   /* $('.form-horizontal').bootstrapValidator('addField', 'expected_complete_time', {
        validators: {
            notEmpty: {
                message: '要求加工时间不能为空'
            },
        }
    });*/
    
	select_cate(i);

}


function getNumList(nums){  
		if(typeof(nums)!="undefined" && nums!="" && typeof(nums) !="number"){
			var reg = /[1-9][0-9.]*/g;  
			var numList = nums.match(reg);  
			if(numList == null)  
			   return "";  
			else  
			  return numList.join(',');  
		}else if( typeof(nums) =="number"){
			return nums;
		}else{
			return ""; 
		}     
 }

/**************原卷信息**********/
function get_clone_tr(obj){
    //var origin_place_div=$("#origin_place_div").html();
	var clone_tr='<tr class="table_clone_tr"><td class="text-center" data-order="true">'+(len*1+1*1)+'</td>'
    clone_tr+='<td><div class="form-group"><input type="text" maxlength="30" value="{{package_no}}" placeholder="如：123456" class="form-control material_input" value="" name="material['+len+'][package_no]"></div> </td>';
    clone_tr+='<td><div class="form-group"><input type="hidden" maxlength="30" placeholder="" class="form-control" value="{{cat_id}}" name="material['+len+'][cat_id]"><input type="text" maxlength="30" class="form-control" readonly="readonly" name="material['+len+'][cat_name]"  value="{{cat_name}}" placeholder=""></div></td>';
    clone_tr+='<td><div class="form-group"><input type="text" maxlength="30" class="form-control" name="material['+len+'][steel_grade]" placeholder="如：DC01"  value="{{steel_grade}}"></div></td>';
    clone_tr+='<td><div class="form-group"><input type="text" maxlength="20" class="form-control" name="material['+len+'][spec]" placeholder="如：0.5*1250*c" value="{{spec}}"></div> </td>';
    clone_tr+='<td><div class="form-group"><input type="text" onblur="all_weight()" onkeyup="all_weight()" maxlength="8" class="form-control weigt_material" name="material['+len+'][weight]" value="{{weight}}" placeholder="如：9.999" ></div></td>';
    clone_tr+='<td><div class="form-group"><input type="text" maxlength="20"  class="form-control" name="material['+len+'][origin_place]"  placeholder="如：宝钢" value="{{origin_place}}"></div></td>';
	//clone_tr+='<td><div class="form-group"><input type="text" maxlength="8"  class="form-control input-md" name="material['+len+'][numbers]" value="{{numbers}}"></div></td>';
	clone_tr+='<td><div class="form-group"><textarea type="text"   placeholder="如：0.5*（120*10+50单靠）；其中4条切120*120/500张每包" class="form-control material_textarea" onblur="pack_up(this)" onfocus="pull_open(this)"  name="material['+len+'][product]" >{{product}}</textarea></div></td>';
    clone_tr+='<td class="text-center"> ';
    //clone_tr+='<a href="javascript:void (0);" class="btn btn-default" onclick="return jiagong('+len+')">我要加工</a>';
	
	clone_tr+='<a href="javascript:void (0);" class="glyphicon glyphicon-plus text-primary" onclick="add_size()" ></a></a>';
	if(len>0){
    clone_tr+='<a href="javascript:void (0);" class="glyphicon glyphicon-minus text-warning" onclick="del_jiagong(this)" attr="'+len+'"></a>';
	}
    clone_tr+=' </td></tr>';
    if(typeof(obj)=="undefined"){
        obj={};
    }else{
		if(typeof(obj.weight)!="undefined"){
			obj.weight=getNumList(obj.weight);
		}	
	}
	var render = template.compile(clone_tr);
	var compiledRendered = render(obj);
    return compiledRendered;

}

/******成品信息**/
function pack_up(obj){//收起
	var height=Number($(obj).height())+11;
	//console.log(height);
	$(obj).attr("height",height);
	$(obj).css("height","31px");	
	
}
function pull_open(obj){//展开
	var h=$(obj).attr("height");
	if(typeof(h)=="undefined" || Number(h)<31){
		h="31px";
	}
	$(obj).css("height",h);
	$(obj).autosize();
}

/************删除一个原卷信息*****/
function del_jiagong(obj){
        $(obj).parent().parent().remove();
        $("#save-tpl-form").data('bootstrapValidator').disableSubmitButtons();
        all_weight();
		setorder();
}

var len = Number($('[data-order="true"]').size());
$(function(){
    /*******初始化****/
    var _len = $('[data-order="true"]').size();
    if(_len==0){
        add_size();
		//var clone_tr= get_clone_tr();
       // $('#material_div').before(clone_tr);
        //len++;
    }
	setorder();
	all_weight();
    for(var i=0;i<Number(len);i++){
        add_validator(i);
    }
})


/*****提交表单*****/
function submit_form(obj){

    // var l=$(process_material_product).size();
    $("#save-tpl-form").data('bootstrapValidator').resetForm();
    $("#save-tpl-form").data('bootstrapValidator').validate();
    var bool=$("#save-tpl-form").data('bootstrapValidator').isValid();
    if(bool){
        $("#save-tpl-form").data('bootstrapValidator').disableSubmitButtons(false);
      	//$("#save-tpl-form").find("[type='submit']").attr("type","button");
	    /* if(!checkEnquiryType()){
            return false;
        } */
		disable(obj);
    }
	else{
        var invalidFields = $("#save-tpl-form").data('bootstrapValidator').getInvalidFields();
        $(invalidFields[0]).focus();
    }
	
	
}



function disable(obj){
	$(obj).val("提交中...");
	//$(obj).attr("disabled","disabled");
	$(obj).attr("for_click",$(obj).attr("onclick"));
	$(obj).removeAttr("onclick");
	$(obj).attr("onclick","return false")
}

function enable(obj){
	$(obj).val("确认发布");
	$(obj).removeAttr("disabled");
	$(obj).attr("onclick",$(obj).attr("for_click"));
}




/*************************************编辑器*******************************************/	
$(function(){
	var placeholder_text=$('textarea[name="description"]').attr("placeholder");
	placeholder_html='<span style="color:#ABABAB;">'+placeholder_text+'</span>';
		KindEditor.ready(function(K) {
		   // var editor = K.create('textarea[name="description"]');
			var editor = K.create('textarea[name="description"]',{
			 //uploadJson : oyy.settings.basePath+'/upload.php',
			  urlType : 'domain',
			  pasteType:1,
				formatUploadUrl:false,
				afterBlur: function(){
					this.sync();
					if(this.text()==""){
						this.html(placeholder_html);
					} 	
					var max_count=800;
					var word_count=this.count();
					if(word_count>max_count){
						var word=this.html();
						this.html(word.substr(0, max_count));
						oyy.message("补充说明字数不能超过800个字符");
					}
					
				},
				afterFocus: function(){
					var description=this.html();
					content=description.replace(placeholder_html,"");
					this.html(content);
					this.sync();
				},	
				afterCreate: function(){
					if(this.text()==""){
						this.html(placeholder_html);
					} 
					this.sync();
				},	
				
				items:['title', 'fontname', 'fontsize', 'forecolor', 'hilitecolor', 'bold','removeformat','symbol','less', 'greater','image'],	//
			});
			//KindEditor.html('textarea[name="description"]',placeholder_html);
			$(".ke-container-default").removeAttr("style");
			//alert( placeholder_html);
		});
		
		
		
		$("#save-tpl-form").submit(function(){
			KindEditor.sync('textarea[name="description"]');
    		var description=$('textarea[name="description"]').val();
			var placeholder_text=$('textarea[name="description"]').attr("placeholder")
			placeholder_html='<span style="color:#ABABAB;">'+placeholder_text+'</span>';
			content=description.replace(placeholder_html, "");
			KindEditor.html('textarea[name="description"]',content);
			$('textarea[name="description"]').val(content);
		})
		
		
})	
	/*var placeholder_text_attr=$('textarea[name="description"]').attr("placeholder");
	placeholder_html='<span style="color:#ABABAB;">'+placeholder_text_attr+'</span>';
	var placeholder_text=$('textarea[name="description"]').val();
	if(placeholder_text==placeholder_html){
		alert(placeholder_text);
			$('textarea[name="description"]').val("");
			alert($('textarea[name="description"]').val());
	}*/
/********************日期************************/
!function(){
    laydate.skin('molv');//切换皮肤，请查看skins下面皮肤库
    //laydate({elem: '#demo'});//绑定元素
}();
var end = {
    elem: '#end',
    format: 'YYYY-MM-DD',
    min: laydate.now(),
    max: '2099-06-16',
    istime: true,
    istoday: false,
	init: false,
    choose: function(datas){
     //   start.max = datas; //结束日选好后，充值开始日的最大日期
       // $('.form-horizontal').bootstrapValidator('updateStatus', 'expected_complete_time', 'VALID');
	   $("#save-tpl-form").data('bootstrapValidator').updateStatus("expected_complete_time", 'NOT_VALIDATED', null).validateField("expected_complete_time");
    }
};
laydate(end);

var m_stock_time = {
    elem: '#m_stock_time',
    format: 'YYYY-MM-DD',
    min: '1970-01-01',
    max: '2099-06-16',
    istime: true,
    istoday: false,
	init: false,
    choose: function(datas){
    }
};
laydate(m_stock_time);


/*************分类*********/
function select_cate(i){
	var obj=$("[name='material["+i+"][cat_name]']");	
	$(obj).unbind("click");
	$(obj).bind("click",{catArray:catArray,obj:obj,i:i},function(){
		var html=$("#cate_content").find(".three-dong").clone();
		$(html).insertAfter(obj); 
		$(obj).next().fadeToggle("slow").kiddingMe(catArray,obj,dispBack,i);
	})
}


function dispBack(i,cate_id){
	  var name="material["+i+"][cat_name]";
      $("#save-tpl-form").data('bootstrapValidator').updateStatus(name, 'NOT_VALIDATED', null).validateField(name);
	  $("[name='material["+i+"][cate_id]']").val(cate_id);
	  $(".three-dong").hide();
} 
$.fn.kiddingMe = function (obj,item,callback,back_i) {
    var _self = this;
    var _first = $(this).find(".lb_1");
    var _second = $(this).find(".lb_2");
    var _close = $(this).find(".hy-x");
    var _delete = $(this).find("a");
    _self.init = function (){
        var strHtml = '';
        $(obj).each(function (i) {
            strHtml += '<div  class="listItem" data-id="' + this.id+ '"  data-value="' + this.text+ '" data-index="' + i + '">' + this.text;
            strHtml += '<span class="glyphicon glyphicon-menu-right fd-right"></span></div>';

        })
        if (_first.html() != "")return;
        _first.html(strHtml);
    }
    _self.init();
    _first.find("div").click(function () {
        $(this).addClass("hasselected").siblings().removeClass("hasselected");
        var _index = $(this).attr("data-index");
        var strHtml = "";
        $(obj[_index].child).each(function () {
            strHtml += '<div  class="listItem" data-value="' + this.text + '" data-id="' + this.id + '" >' + this.text;
            strHtml += '<span></span></div>';
        })
        _second.html(strHtml).clicked();
    })
    _second.clicked=function(){
        $(this).find("div").click(function () {
            $(this).addClass("hasselected").siblings().removeClass("hasselected");
            item.val($(this).attr("data-value")).next().val($(this).attr("data-id"));
			var cate_id=$(this).attr("data-id");
            $(_self).fadeOut("slow");
             callback(back_i,cate_id);
        })
    }
    _delete.click(function () {
        item.val("").next().val("");
        $(_self).hide();
        callback(back_i);
        $(_self).find(".hasselected").removeClass("hasselected");

    })
    _close.click(function (){
        $(_self).hide();
        callback(back_i);
    })   	
}	
	
	
/*****原料*
$(Iput).on("cityClose",function(){
    $("#save-tpl-form").data('bootstrapValidator').updateStatus("raw_from", 'NOT_VALIDATED', null).validateField("raw_from")
});*/