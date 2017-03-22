$(function(){
    $(".form-horizontal").bootstrapValidator({
        message: '您填入的值不合法',
        fields:{
            /*tongyi: {
                message: '请先同意信息发布规则',
                validators: {
                    notEmpty: {
                        message: '请先同意信息发布规则'
                    },
                }
            },*/
           /* title: {
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
            },*/
            valid_time: {
                message: '询单有效期',
                validators: {
                    /*notEmpty: {
                        message: '询单有效期不能为空'
                    },  */
                }
            },
			
			 address: {
                message: '收货地',
                validators: {
                    /*notEmpty: {
                        message: '收货地不能为空'
                    },  */
                }
            },
			 
			 delivery_city: {
                message: '提货区域',
                validators: {
                    /*notEmpty: {
                        message: '提货区域不能为空'
                    },  */
                }
            },

			delivery_time: {
                message: '交货期',
                validators: {
                   /* notEmpty: {
                        message: '交货期时间不能为空'
                    },  */
                }
            },
			
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
            },
        }
    });
});

function add_Validator(){
	  $(".table_clone_tr").each(function(i,v){											
        //加验证
        $('.form-horizontal').bootstrapValidator('addField', 'buy_piece['+i+'][factory]', {
            validators: {
                notEmpty: {
                    message: '产地名称不能空'
                },
            }
        });
		
		$('.form-horizontal').bootstrapValidator('addField', 'buy_piece['+i+'][variety]', {
            validators: {
                notEmpty: {
                    message: '品种不能空'
                },
            }
        });
		$('.form-horizontal').bootstrapValidator('addField', 'buy_piece['+i+'][steel_grade]', {
            validators: {
                notEmpty: {
                    message: '钢种不能空'
                },
            }
        });
		
		$('.form-horizontal').bootstrapValidator('addField', 'buy_piece['+i+'][spec]', {
            validators: {
                notEmpty: {
                    message: '规格不能空'
                },
            }
        });
		 
		
		$('.form-horizontal').bootstrapValidator('addField', 'buy_piece['+i+'][numbers]', {
                validators: {
                   
                    greaterThan:{
                        value:0,
                        message: '数量不能小于0'
                    }
                }
            });
			
		$('.form-horizontal').bootstrapValidator('addField', 'buy_piece['+i+'][weight]', {
                validators: {
                    notEmpty: {
                        message: '重量不能为空'
                    },
                     
                    greaterThan:{
                        value:0,
                        message: '重量不能小于0',
						inclusive:false,
                    }
                }
            });
		  /*$('.form-horizontal').bootstrapValidator('addField', 'valid_time', {
			  validators: {
				  notEmpty: {
					  message: '询单有效期不能空'
				  },
			  }
		  });*/
		 /* $('.form-horizontal').bootstrapValidator('addField', 'delivery_time', {
			  validators: {
				  notEmpty: {
					  message: '要求交货期不能空'
				  },
			  }
		  });*/
 		select_cate(i);
    });
}


function check_enquiry(){
	var length=$("input[name='seller_id[]']:checked").length;
        if($("input[name='enquiry_type']:checked").val()==2 && length==0)  {
            $(".EnquiryType").addClass('has-error');
            $(".EnquiryType").find('.help-block').html("请先选择供应商");
            return false;
        }else{
			 $(".EnquiryType").removeClass('has-error');
            $(".EnquiryType").find('.help-block').html("");
			 return true;
		}
}

/*function save_form(){	

	$(".form-horizontal").data('bootstrapValidator').resetForm();
    $(".form-horizontal").data('bootstrapValidator').validate();
    var bool=$(".form-horizontal").data('bootstrapValidator').isValid();
    if(bool){		    //供应商的		
		if(!check_enquiry()){
		  return false;	
		}
		if(!check_delivery()){
			 return false;	
		}
		
	}else{
        var invalidFields = $(".form-horizontal").data('bootstrapValidator').getInvalidFields();
        $(invalidFields[0]).focus();
    }
	/****编辑器默认值*
	var placeholder_text=$('textarea[name="description"]').attr("placeholder");
	var placeholder_text_2=KindEditor.text('textarea[name="description"]');
	if(placeholder_text==placeholder_text_2){
		KindEditor.html('textarea[name="description"]',"");
		$('textarea[name="description"]').val("");
	}
	 
}*/

function check_delivery(){
	var delivery=$("[name='delivery']:checked ").val();
	var address=$("[name='address']").val();
	if(delivery==2 && address==""){
		$("#show_show_delivery_2").show();
		return false;	
	}else{
		$("#show_show_delivery_2").hide();
		return true;	
	}
	
}

$('#myLargeModalLabel').on('hide.bs.modal', function () {
	check_enquiry();
})

var len=0;
$(function(){
  len=$(".table_clone_tr").size();
  if(len==0){
  	add_size();
  }
  all_weight();
  add_Validator();
})


function _delete_tr(i){
	$("#tr_"+i).remove();
	i--;
	add_Validator();
	setorder();
}
/*******重新排序***/
 function setorder(){
           var len_1 = $('[data-order="true"]').size();
           for(var i=0;i<len_1;i++){
               $('[data-order="true"] :eq('+i+')').html(i+1);
           }
		   all_weight();
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
	//$("#all_weight").show();
	$(".all_weight").val(w_all);
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
function get_clone_tr(obj){
	var strHtml = '';
		strHtml+= '<tr class="table_clone_tr" id="tr_'+len+'">';
		strHtml+= '<td class="text-center" data-order="true">'+(len*1+1*1)+'</td>';
		strHtml+= '<td><div class="form-group"><input type="text" class="form-control" name="buy_piece['+len+'][factory]" placeholder="如：宝钢" value="{{factory}}"></div></td>'
		strHtml+= '<td><div class="form-group"><input type="text" class="form-control" name="buy_piece['+len+'][variety]" value="{{variety}}"></div></td>'
		strHtml+= '<td><div class="form-group"><input type="text" class="form-control" name="buy_piece['+len+'][steel_grade]" value="{{steel_grade}}" placeholder="如：DC01"></div></td>'
		strHtml+= '<td><div class="form-group"><input type="text" class="form-control" name="buy_piece['+len+'][spec]" value="{{spec}}" placeholder="如：0.5*200*300mm" ></div></td>'
		strHtml+= '<td><div class="form-group"><input placeholder="如：100张" maxlength="16"  class="form-control text-right" type="text" name="buy_piece['+len+'][numbers]" value="{{numbers}}"></div></td>'
		strHtml+= '<td><div class="form-group"><input onkeyup="all_weight()" placeholder="如：9.999"  type="text" class="form-control weigt_material" value="{{weight}}" name="buy_piece['+len+'][weight]"></div></td>';
		strHtml+=' <td> <a href="javascript:void(0);" class="glyphicon glyphicon-plus text-primary" onclick="add_size()"></a>';
		if(len>0){
			strHtml+='<a href="javascript:void (0);" class="glyphicon glyphicon-minus text-warning margin-left-lg" onclick="_delete_tr('+len+')"></a>';
		}
		strHtml+='</td>';
	//modal
	strHtml+= '</tr>';
	if(typeof(obj)=="undefined"){
        obj={};
    }else{
		if(typeof(obj.numbers)!="undefined"){
			obj.numbers=getNumList(obj.numbers);
		}
	}
	var render = template.compile(strHtml);
	var compiledRendered = render(obj);
    return compiledRendered;
}

function add_size(obj){
	if(typeof(obj)=="undefined"){
        obj={};
    }
	var clone_tr= get_clone_tr(obj);
	$("#table_clone").before(clone_tr);
	len+=1;
	add_Validator();
	setorder();
}

/********时间加一天*****/
var ma = [['1','3','5','7','8','10'],['4','6','9','11']];
function pasDate(da) {
var yp = da.indexOf('年'),
mp = da.indexOf('月'),
dp = da.indexOf('日');
var y = da.substr(0,yp),
m = da.substr(yp + 1,mp - yp - 1),
d = da.substr(mp + 1,dp - mp - 1);
return [y,m,d];
}
//判断数组a是否存在在元素n
function check(n,a) {
for(var i = 0,len = a.length;i < len;i++) {
if(a[i] == n) {
return true;
}
}
return false;
}
//闰?年?
function isLeap(y) {
return ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0) ? true : false;
}
//实现加减f：'1'加，'0'减
function trans(o,f) {
var d = o.split('-');
var l = isLeap(d[0]);
if(f == '1') {
if((check(d[1],ma[0]) && (d[2] == '31')) || (check(d[1],ma[1]) && (d[2] == '30')) ||
(d[1] == '2' && d[2] == '28' && !l) || (d[1] == '2' && d[2] == '29' && l)) {
return d[0] + '-' + (d[1] * 1 + 1) + '-' + 1;
} else if(d[1] == '12' && d[2] == '31') {
return (d[0] * 1 + 1) + '-' + '1-1';
} else {
return d[0] + '-' + d[1] + '-' + (d[2] * 1 + 1);
}
} else if(f == '0') {
if(check(d[1] - 1,ma[0]) && (d[2] == '1')) {
return d[0] + '-' + (d[1] - 1) + '-' + '31';
} else if(check(d[1] - 1,ma[1]) && (d[2] == '1')) {
return d[0] + '-' + (d[1] - 1) + '-' + '30';
} else if(d[1] == '1' && d[2] == '1') {
return (d[0] - 1) + '-' + '12-31';
} else if(d[1] == '3' && d[2] == '1' && !l) {
return d[0] + '-' + '2-28';
} else if(d[1] == '3' && d[2] == '1' && l) {
return d[0] + '-' + '2-29';
} else {
return d[0] + '-' + d[1] + '-' + (d[2] - 1);
}
} else {
return;
}
}

/********************日期************************/
!function(){
	laydate.skin('molv');//切换皮肤，请查看skins下面皮肤库
	//laydate({elem: '#demo'});//绑定元素
}();
//日期范围限制
var end = {
	elem: '#end',
	format: 'YYYY-MM-DD',
	min: laydate.now(), //设定最小日期为当前日期
	max: '2099-06-16', //最大日期
	istime: true,
	istoday: true,
	init: false,
	choose: function(datas){
		//  end.min = datas; //开始日选好后，重置结束日的最小日期
		start.max = datas //将结束日的初始值设定为开始日
		//$('.form-horizontal').bootstrapValidator('updateStatus', 'raw_come_time', 'VALID');
		$("#save-tpl-form").data('bootstrapValidator').updateStatus("delivery_time", 'NOT_VALIDATED', null).validateField("delivery_time");
	}
};
var myDate = new Date();
var now_time=myDate.getHours()+1 + ":00:00";
var start = {
	elem: '#valid_time',
	format: 'YYYY-MM-DD hh:mm:ss',
	min: laydate.now()+" "+now_time,
	max: '2099-06-16',
	istime: true,
	istoday: false,
	init: false,
	choose: function(datas){
		trans_date=datas.split(" ");
		var mindate=trans(trans_date[0],'1');
		end.min = datas; //结束日选好后，充值开始日的最大日期
		end.start = mindate
		// $('.form-horizontal').bootstrapValidator('updateStatus', 'expected_complete_time', 'VALID');
		$("#save-tpl-form").data('bootstrapValidator').updateStatus("valid_time", 'NOT_VALIDATED', null).validateField("valid_time");
	}
};
laydate(start);
laydate(end);



function show_delivery(v){
	$("[name='delivery']").eq(v-1).attr("checked","checked");
	if(v==2){
		$("#delivery_div").show();
		$(".seller_address").hide();
	//	$(".form-horizontal").data('bootstrapValidator').updateStatus("delivery_province_select", 'NOT_VALIDATED', null);
	}else{
		$("#delivery_div").hide();
		$(".seller_address").show();
		//$(".form-horizontal").data('bootstrapValidator').updateStatus("address", 'NOT_VALIDATED', null);
	}
	// $(".form-horizontal").data('bootstrapValidator').disableSubmitButtons(false);
}
/******************************地址维护***************************************************/
function edit_address(i){
	$("#new_address").show();
	$("#new_address_id").val(i);
	if(i>0){
		var obj=$(".address_"+i);
		var address=$(obj).attr("address");
		var area_id=$(obj).attr("area_id");
		var zip_code=$(obj).attr('zip_code');
		$("#area_id_1").val(area_id);
		$("#address_1").val(address);
		$("#zip_code").val(zip_code);

	}else{
		$("#area_id_1").val("");
		$("#address_1").val("");
		$("zip_code").val("");
	}
	$('#receipt').modal('show');
	$(".area").area();
	 //stopPropagation(e);
}

function select_address(i){
	if(!(i>0)){
		return ;	
	}
	var obj=$(".address_"+i);
	var province=$(obj).attr("province");
	var city=$(obj).attr("city");
	var county=$(obj).attr("county");
	var full_address=$(obj).attr("full_address");
	var area_id=$(obj).attr("area_id");
	var id=obj.attr('value');
	var user_id=$("#user_id").val();
	var user_num=$("#num").val();
	var address=$(obj).attr('address');
	$("#province").val(province);
	$("#city").val(city);
	$("#county").val(county);
	$("#address").val(address);
	$("#area_id").val(area_id);
	$("#address_id").val(id);
	$("#address_show").text(full_address);
	$.getJSON("/helper/piece/user_receiver",{action:"default",id:i,user_id:user_id,user_num:user_num});
}


function save_address(){
	var province=$("[name='province1'] option:selected").text();
	var city=$("[name='city1'] option:selected").text();
	var country=$("[name='country1'] option:selected").text();
	var area_id=$("[name='country1']").val();
	var setting_contacts=$("[name='setting_contacts']").val();
	var setting_phone=$("[name='setting_phone']").val();
	var address=$("#address_1").val();
	var edit_id=id=$("#new_address_id").val();
	var full_address=province+city+country+address;
	var address_id=$("#address_id").val();
	var user_id=$("#user_id").val();
	var user_num=$("#num").val();
	var CompanyId=$("#CompanyId").val();
	var zip_code=$("#zip_code").val();
	if(province=="" || area_id=="" ||address==""){
	  oyy.message("请填写收货地址");	
	  return false;	
	}
	if(address_id==id){
		$("[name='address']").val(full_address);
		$("#address_show").text(full_address);
		$("#province").val(province);
		$("#city").val(city);
		$("#country").val(country);
		$("#area_id").val(area_id);
		$("#address_id").val(address_id);
	}
	if($("[name='address']").val()==""){
		$("[name='address']").val(full_address);
		$("#address_show").text(full_address);
	}
	/***新增**/
	$.getJSON("/helper/piece/user_receiver",{action:'add',zip_code:zip_code,CompanyId:CompanyId,user_id:user_id,user_num:user_num,province:province,city:city,country:country,area_id:area_id,address:address,id:id,phone:setting_phone,contact:setting_contacts},function(data){
		 var id=data.data.id;
		 var html='<div class="form-group address-b address_list_one margin-bottom-sm address_'+id+'"  class="address_'+id+'"  province="'+province+'"  city="'+city+'" address="'+address+'" county="'+country+'"  full_address="'+full_address+'"  area_id="'+area_id+'" address_id="'+address_id+'"  value="'+id+'"><div style=" width:320px; float:left; line-height:30px;">'+full_address+'</div><div class="fd-left"><div class="fd-left" style="line-height:30px;">&nbsp;&nbsp;&nbsp;<a href="#this" onclick="select_address('+id+')" class="text-primary">设为默认地址</a></div><div class="fd-left" style="line-height:30px;">&nbsp;&nbsp; <a href="#this" onclick="edit_address('+id+')" class="text-primary">编辑</a></div><div style="line-height:30px;" class="fd-left">&nbsp;&nbsp; <a href="#this" onclick="del_address('+id+')" class="text-primary">删除</a></div></div></div>';
		if(edit_id>0){
			$("#one_"+edit_id).html(html);
		}else{ 
			html='<div  id="one_'+id+'">'+html+"</div>"+'<div class="clearfix"></div>';
			$("#address_list").append(html);
		}
		//$(".address_"+address_id).find("input").attr("checked","checked");
		$("#new_address").hide();
		count_address();
	})
	$('#receipt').modal('hide');
}

function count_address(){
	var address_l=$("#address_list").find(".address_list_one").size();
	if(address_l>=1){
		$("#con-more").show();
	}else{
		$("#con-more").hide();
	}
}



function del_address(i,UserId,CompanyId){
	$.getJSON("/helper/piece/user_receiver",{action:"del",id:i,CompanyId:CompanyId,UserId:UserId},function(data){
		if(data.error==0){
			$("#one_"+i).remove();
		}else{
			oyy.message("删除失败");
		}
		count_address();
	})
}

function stopPropagation(e) {  
    e = e || window.event;  
    if(e.stopPropagation) { //W3C阻止冒泡方法  
        e.stopPropagation();  
    } else {  
        e.cancelBubble = true; //IE阻止冒泡方法  
    }  
}  


 
 $(function(){
count_address();
$(".more-address").click(function(){
        if($(".more-address1").html()=="更多地址"){
            $(".more-address1").html("收起地址");
            $(".address-a").slideDown(); 
			$(this).parent().addClass("addri1");
         }
		 else if($(".more-address1").html()=="收起地址"){
		 $(".more-address1").html("更多地址");
		 $(".address-a").slideUp();
		 $(this).parent().removeClass("addri1");
		 }
		 
 })
 })

 
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

/*************分类*********/
function select_cate(i){
	var obj=$("[name='buy_piece["+i+"][variety]']");	
	$(obj).unbind("click");
	$(obj).bind("click",{catArray:catArray,obj:obj,i:i},function(){
		var html=$("#cate_content").find(".three-dong").clone();
		$(html).insertAfter(obj); 
		$(obj).next().fadeToggle("slow").kiddingMe(catArray,obj,dispBack,i);
	})
}


function dispBack(i,cate_id){
	  var name="buy_piece["+i+"][variety]";
      $("#save-tpl-form").data('bootstrapValidator').updateStatus(name, 'NOT_VALIDATED', null).validateField(name);
	  $("[name='buy_piece["+i+"][cate_id]']").val(cate_id);
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
    $(".form-horizontal").data('bootstrapValidator').updateStatus("delivery_city", 'NOT_VALIDATED', null).validateField("delivery_city");
	var area_id=$("[name='harea']").attr("data-id");
	$("[name='delivery_area_id']").val(area_id);
});*/