var __gg = 0 ;
$(function () {
    $(".area").area();
    $("#start0").datetimepicker({
        format: 'yyyy-mm-dd',
        autoclose: true,
        todayBtn: true,
        minView: "month", //选择日期后，不会再跳转去选择时分秒
        language: 'zh-CN',
    }).on('changeDate', function(ev){
        $(".add-offer-form").data('bootstrapValidator').updateStatus('yucai[raw_time][0]', 'VALIDATING').validateField('yucai[raw_time][0]');
    }).on('click',function(ev){
        $("#start0").datetimepicker("setStartDate", $("#test0").val());
        $("#start0").datetimepicker("setEndDate", (new Date()));
    });
    $("#test0").datetimepicker({
        format: 'yyyy-mm-dd',
        autoclose: true,
        todayBtn: true,
        minView: "month", //选择日期后，不会再跳转去选择时分秒
        language: 'zh-CN'
    }).on('changeDate', function(ev){
        $(".add-offer-form").data('bootstrapValidator').updateStatus('yucai[sur_time][0]', 'VALIDATING').validateField('yucai[sur_time][0]');
    }).on('click',function(ev){
        $("#test0").datetimepicker("setStartDate", $("#start0").val());
        $("#test0").datetimepicker("setEndDate", (new Date()));
    });
    $("#end0").datetimepicker({
        format: 'yyyy-mm-dd',
        autoclose: true,
        todayBtn: true,
        minView: "month", //选择日期后，不会再跳转去选择时分秒
        language: 'zh-CN',
    }).on('changeDate', function(ev){
        $(".add-offer-form").data('bootstrapValidator').updateStatus('yucai[expiry_date][0]', 'VALIDATING').validateField('yucai[expiry_date][0]');
    }).on('click',function(ev){
        $("#end0").datetimepicker("setStartDate", (new Date()));
    });
    // $(".add-offer-form").offer();
    // $('#title').maxlength({
    //     alwaysShow: true,
    //     placement:"right",
    //     appendToParent:true
    // });
    // $(".title-length").html($('#title').val().length);
    // $('#title').on('keyup', function() {
    //     var str = $(this).val();
    //     var len = str.length;
    //     $(".title-length").html(len);
    // });

    function inti_input(_this){
        $(_this).bind("blur",function(){
            $(this).next().hide(500);
        });
        $(_this).bind("focus",function(){
            var hint= $(this).next();
            $(hint).show();
            $(hint).show().find("div.line").click(function() {
                $(_this).val($(this).html().trim());
                var name =$(_this).attr('name');
                $(".add-offer-form").data('bootstrapValidator').updateStatus(name, 'NOT_VALIDATED', null).validateField(name);

            })
        })
    }
    inti_input($(".pht-input"));
    inti_input($(".packing"));

    $(".add-offer-form").bootstrapValidator({
        message: '您填入的值不合法',
        excluded: ':hidden',
        fields: {
            contact: {
                message: '联系人不合法',
                validators: {
                    stringLength: {
                        max: 20,
                        message: '最多20个字符'
                    },
                }
            },
            contactphone: {
                message: '联系方式不合法',
                validators: {
                    regexp: {
                        regexp: /^(0?1\d{10})$|^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$|^400[016789]\d{6}$/,
                        message: '请输入正确的电话号码，400电话格式：4009990000，座机：021-60996240，手机：11位手机号'
                    }
                }
            },
            queren: {
                message: '必选项',
                validators: {
                    notEmpty: {
                        message: '请先同意信息发布规则'
                    }
                }
            },
        }
    });
    var __gg = 0;
    add_validator(__gg);
    function selectdata() {
        $("select").bind("change", function () {
            var _this = $(this).find("option:selected");
            $(this).find("option").removeAttr("selected");
            $(_this).attr("selected", "selected");
            $(this).val(_this.val());
        })
    }

    function setorder(){
        var len = $('[data-order="true"]').size();
        for(var i=0;i<len;i++){
            $('[data-order="true"]:eq('+i+')').html(i+1);

        }
    }
    //表格控制
    function add_validator(i) {
        $('.add-offer-form').bootstrapValidator('addField', 'yucai[package_no][' + i + ']', {
            validators: {
                notEmpty: {
                    message: '捆包号不能为空'
                },
                stringLength: {
                    max: 30,
                    message: '最多30个字符'
                },
            }
        });
        $('.add-offer-form').bootstrapValidator('addField', 'yucai[place][' + i + ']', {
            validators: {
                notEmpty: {
                    message: '产地不能为空'
                },
                stringLength: {
                    max: 20,
                    message: '最多20个字符'
                },
                regexp: {
                    regexp: /^[\u2E80-\u9FFF]+$/,
                    message: '请输入中文'
                },
            }
        });
        $('.add-offer-form').bootstrapValidator('addField', 'yucai[weight][' + i + ']', {
            validators: {
                notEmpty: {
                    message: '重量不能为空'
                },
                numeric: {
                    message: '必须为数字'
                },
                greaterThan: {
                    value: 0.0001,
                    message: '重量不能小于0.0001',
                    //inclusive:false,
                },
                lessThan: {
                    value: 99999.9999,
                    message: '重量不能大于99999.9999',

                },
                regexp: {
                    regexp: /^\d+(\.\d{0,4})?$/,
                    message: '最多四位小数 '
                },
            }
        });
        $('.add-offer-form').bootstrapValidator('addField', 'yucai[packing][' + i + ']', {
            validators: {
                notEmpty: {
                    message: '包装方式不能为空'
                },
                stringLength: {
                    max: 30,
                    message: '最多30个字符'
                },
                regexp: {
                    regexp: /^[\u2E80-\u9FFF]+$/,
                    message: '请输入中文'
                },
            }
        });
        $('.add-offer-form').bootstrapValidator('addField', 'yucai[material][' + i + ']', {
            validators: {
                notEmpty: {
                    message: '材料形态不能为空'
                },
            }
        });
        // $('.add-offer-form').bootstrapValidator('addField', 'yucai[assurance][' + i + ']', { 
        //     validators: {
        //         notEmpty: {
        //             message: '必选项'
        //         },
        //     }
        // });
       /* $('.add-offer-form').bootstrapValidator('addField', 'yucai[province1][' + i + ']', {
            validators: {
                notEmpty: {
                    message: '省不能为空'
                },
            }
        });*/
       /* $('.add-offer-form').bootstrapValidator('addField', 'yucai[city1][' + i + ']', {
            validators: {
                notEmpty: {
                    message: '市不能为空'
                },
            }
        });*/
        $('.add-offer-form').bootstrapValidator('addField', 'yucai[country1][' + i + ']', {
            validators: {
                notEmpty: {
                    message: '区域不能为空'
                },
            }
        });
        $('.add-offer-form').bootstrapValidator('addField', 'yucai[address][' + i + ']', {
            validators: {
                notEmpty: {
                    message: '地址不能为空'
                },
                stringLength: {
                    max: 30,
                    message: '最多30个字符'
                },
            }
        });
        $('.add-offer-form').bootstrapValidator('addField', 'yucai[length][' + i + ']', {
            validators: {
                notEmpty: {
                    message: '长度不能为空'
                },
               /* greaterThan: {
                    value: 0,
                    message: '填数值型大于0'
                }*/
               /* numeric: {
                    message: '只能输入数字',
                },
                regexp: {
                    regexp: /^\d+(\.\d{0,2})?$/,
                    message: '最多二位小数 '
                }*/
               /* greaterThan: {
                    value: 0,
                    inclusive:false,
                    message: '长度不能小于0'
                },
                regexp: {
                    regexp: /^\d+(\.\d{0,2})?$/,
                    message: '最多二位小数 '
                }*/
            }
        });
        $('.add-offer-form').bootstrapValidator('addField', 'yucai[width][' + i + ']', {
            validators: {
                notEmpty: {
                    message: '宽度不能为空'
                },
                greaterThan: {
                    value: 0,
                    message: '宽度不能小于0'
                },
                numeric: {
                    message: '只能输入数字',
                },
                regexp: {
                    regexp: /^\d+(\.\d{0,2})?$/,
                    message: '最多二位小数 '
                }
            }
        });
        $('.add-offer-form').bootstrapValidator('addField', 'yucai[height][' + i + ']', {
            validators: {
                notEmpty: {
                    message: '厚度不能为空'
                },
                greaterThan: {
                    value: 0,
                    message: '厚度不能小于0'
                },
                numeric: {
                    message: '只能输入数字',
                },
                regexp: {
                    regexp: /^\d+(\.\d{0,2})?$/,
                    message: '最多二位小数'
                },
            }
        });
        $('.add-offer-form').bootstrapValidator('addField', 'yucai[grade][' + i + ']', {
            validators: {
                notEmpty: {
                    message: '牌号不能为空'
                },
                stringLength: {
                    max: 30,
                    message: '最多30个字符'
                },
            }
        });
        $('.add-offer-form').bootstrapValidator('addField', 'yucai[tax_price][' + i + ']', {
            validators: {
                notEmpty: {
                    message: '单价不能为空'
                },
                numeric: {
                    message: '必须为数字'
                },
                greaterThan: {
                    value: 0,
                    inclusive:false,
                    message: '单价大于0'
                },
                regexp: {
                    regexp: /^\d+(\.\d{0,2})?$/,
                    message: '最多二位小数 '
                },
                lessThan: {
                    value: 500000.00,
                    message: '单价不能大于500000.00',

                },
            }
        });
        // $('.add-offer-form').bootstrapValidator('addField', 'yucai[quality][' + i + ']', {
        //     validators: {
        //         notEmpty: {
        //             message: '质量等级不能为空'
        //         },
        //     }
        // });
        $('.add-offer-form').bootstrapValidator('addField', 'yucai[raw_time][' + i + ']', {
            validators: {
                notEmpty: {
                    message: '原料生产日期不能为空'
                },
            }
        });
        $('.add-offer-form').bootstrapValidator('addField', 'yucai[sur_time][' + i + ']', {
            validators: {
                notEmpty: {
                    message: '余材生产日期不能为空'
                },
            }
        });
        $('.add-offer-form').bootstrapValidator('addField', 'yucai[expiry_date][' + i + ']', {
            validators: {
                notEmpty: {
                    message: '有效期不能为空'
                },
            }
        });
        $('.add-offer-form').bootstrapValidator('addField', 'yucai[mark][' + i + ']', {
            validators: {
                stringLength: {
                    max: 500,
                    message: '最多500字'
                },
            }
        });
    }

    $(function () {
        /*复制表格*/
        selectdata();
        $(document).on('click', '.copy_yc', function () {

            var adda = $(this).parent().find('a');
            var table_clo = $(this).parents('.yc_table').clone();
            if (adda.hasClass('copy_yc') && adda.hasClass('delete_yc')) {
                $(this).parents('.yc_det').append(table_clo);

            } else {
                $(this).parents('.yc_det').append(table_clo)
                    .find('.yc_table:last tr:first td:last').append('<br><a class="glyphicon glyphicon-minus text-gray delete_yc" title="删除"></a>');
            }
            var inputs=$(this).parents('.yc_det').find('.yc_table:last').find("input,textarea,select");
            var yctyp =$(this).parents('.yc_det').find('.yc_table:last').find(".yctype0");
            var clas  =$(this).parents('.yc_det').find('.yc_table:last').find(".area"+__gg);
            var start =$(this).parents('.yc_det').find('.yc_table:last').find("#start"+__gg);
            var test  =$(this).parents('.yc_det').find('.yc_table:last').find("#test"+__gg);
            var end   =$(this).parents('.yc_det').find('.yc_table:last').find("#end"+__gg);
            var leixing =$(this).parents('.yc_det').find('.yc_table:last').find(".leixing");
            var small =$(this).parents('.yc_det').find('.yc_table:last').find("small");
            __gg++;
            $(yctyp).attr("class","yctype"+__gg);
            $(clas).attr("class","area"+ __gg);
            $(start).prop("id","start"+ __gg);
            $(test).prop("id","test"+ __gg);
            $(end).prop("id","end"+ __gg);
            $(leixing).prop("class","col-sm-2 leixing"+ __gg);
            // $(pht).attr("class","form-control pht-input"+ __gg);
            $("#start"+ __gg).datetimepicker({
                format: 'yyyy-mm-dd',
                autoclose: true,
                todayBtn: true,
                minView: "month", //选择日期后，不会再跳转去选择时分秒
                language:'zh-CN'
            }).on('changeDate', function(ev){
                var name =$(this).attr('name');
                $(".add-offer-form").data('bootstrapValidator').updateStatus(name, 'VALIDATING').validateField(name);
            }).on('click',function(ev){
               // $("#start"+__gg).datetimepicker("setStartDate", $("#test"+__gg).val());
                $("#start"+__gg).datetimepicker("setEndDate", (new Date()));
            });
            $("#test"+ __gg).datetimepicker({
                format: 'yyyy-mm-dd',
                autoclose: true,
                todayBtn: true,
                minView: "month", //选择日期后，不会再跳转去选择时分秒
                language:'zh-CN'
            }).on('changeDate', function(ev){
                var name =$(this).attr('name');
                $(".add-offer-form").data('bootstrapValidator').updateStatus(name, 'VALIDATING').validateField(name);
            }).on('click',function(ev){
                $("#test"+__gg).datetimepicker("setStartDate", $("#start"+__gg).val());
                $("#test"+__gg).datetimepicker("setEndDate", (new Date()));
            });

            $("#end"+ __gg).datetimepicker({
                format: 'yyyy-mm-dd',
                autoclose: true,
                todayBtn: true,
                minView: "month", //选择日期后，不会再跳转去选择时分秒
                language:'zh-CN'
            }).on('changeDate', function(ev){
                var name =$(this).attr('name');
                $(".add-offer-form").data('bootstrapValidator').updateStatus(name, 'VALIDATING').validateField(name);
            }).on('click',function(ev){
                $("#end"+__gg).datetimepicker("setStartDate", (new Date()));
            });

            $(inputs).each(function (i, v) {
                var name = $(v).attr("name");
                name = name.replace(/\d+/g, __gg);
                $(v).attr('name', name);
            });

            $(small).each(function(i,v){
                $(v).remove();

            });

            selectdata();
            setorder();

            $('.delete_yc').click(function(){
                $(this).parents('.yc_table').remove();
                setorder();
                $(".add-offer-form").data('bootstrapValidator').disableSubmitButtons(false);
            });
            inti_input($(".machining .yc_table:last").find(".pht-input"));
            inti_input($(".machining .yc_table:last").find(".packing"));
            add_validator(__gg);
            $(".area" + __gg).area();

            KindEditor.ready(function (K) {
                window.editorText = K.create('textarea[name="body"]', {
                    uploadJson: oyy.settings.basePath + '/upload.php',
                    urlType: 'domain',
                    formatUploadUrl: false,
                    afterBlur: function () {
                        this.sync();
                        var str = $.trim(this.html());
                        if (str.length == 0) {
                            $(".surplus-details").addClass("has-error");
                            $(".surplus-details").find(".help-block").html("详细说明不能为空");
                        }
                        else {
                            $(".surplus-details").find(".help-block").html("");
                            $(".surplus-details").removeClass("has-error");
                        }
                    }
                });
                $('.upload-content').unbind('click');
                $('.upload-content').click(function () {
                    var $this = this;
                    var editor = K.editor({
                        filePostName : 'imgFile',
                        extraFileUploadParams:{fieldName:'imgFile',limitSize:1024*5,limitTypes:"jpg,png,jpeg"},
                        urlType : 'domain',
                        formatUploadUrl:false,
                        allowFileManager : false
                    });
                    editor.loadPlugin('image', function () {
                        editor.plugin.imageDialog({
                            showRemote: false,
                            clickFn: function (url) {
                                appendImage($this, url);
                                editor.hideDialog();
                            }
                        });
                    });
                });
            });
            //inti_input($(".machining .yc_table:last").find(".pht-input"));
            //材料形态
            var ycheight = $('.yctype' + __gg);
            ycheight.change(function () {
                var type = $(".zhonglei");
                var length=$(".length");
                if (ycheight.find("option:selected").val() == 'JL') {
                    $('.leixing').find('input').val("C");
                    $(type).find("option[value='FJYC']").show();
                    $(type).find("option[value='ZQGDYC']").show();
                    $(type).find("option[value='HQGDYC']").hide();
                   /* $('.leixing').find('input').val("C");
                    $('.leixing').find('input').attr("disabled", true);*/
                } else if(ycheight.find("option:selected").val() == 'BL'){
                    $('.leixing').find('input').val("");
                    $(type).find("option[value='FJYC']").hide();
                    $(type).find("option[value='ZQGDYC']").hide();
                    $(type).find("option[value='HQGDYC']").show();
                    //验证length为数字
                    /*$('.leixing').find('input').val("");
                    $('.leixing').find('input').attr("disabled", false);*/


                }
            });

        });
    })
    /*新增表格*/
    $(function () {
        $(document).on('click', '.add_yc', function () {
            var jg_con = $('#yc_con').html();
            __gg++;
            re = new RegExp("__len__", "g");
            jg_con = jg_con.replace(re, __gg);
            // jg_con= jg_con.replace('__len__',__gg);
            $(this).parent().prev('.yc_det').append(jg_con);

            setorder();
           /* $('.delete_yc').click(function () {
                $(this).parents('.yc_table').remove();
                setorder();
            });*/
            $('.delete_yc').click(function(){
                $(this).parents('.yc_table').remove();
                setorder();
                $(".add-offer-form").data('bootstrapValidator').disableSubmitButtons(false);
            });
            add_validator(__gg);
            $(".area" + __gg).area();
            $("#start" + __gg).datetimepicker({
                format: 'yyyy-mm-dd',
                autoclose: true,
                todayBtn: true,
                minView: "month", //选择日期后，不会再跳转去选择时分秒
                language: 'zh-CN'
            }).on('changeDate', function(ev){
                var name =$(this).attr('name');
                $(".add-offer-form").data('bootstrapValidator').updateStatus(name, 'VALIDATING').validateField(name);
            }).on('click',function(ev){
                $("#start"+__gg).datetimepicker("setStartDate", $("#test"+__gg).val());
                $("#start"+__gg).datetimepicker("setEndDate", (new Date()));
            });


            $("#test" + __gg).datetimepicker({
                format: 'yyyy-mm-dd',
                autoclose: true,
                todayBtn: true,
                minView: "month", //选择日期后，不会再跳转去选择时分秒
                language: 'zh-CN'
            }).on('changeDate', function(ev){
                var name =$(this).attr('name');
                $(".add-offer-form").data('bootstrapValidator').updateStatus(name, 'VALIDATING').validateField(name);
            }).on('click',function(ev){
                $("#test"+__gg).datetimepicker("setStartDate", $("#start"+__gg).val());
                $("#test"+__gg).datetimepicker("setEndDate", (new Date()));
            });

            $("#end" + __gg).datetimepicker({
                format: 'yyyy-mm-dd',
                autoclose: true,
                todayBtn: true,
                minView: "month", //选择日期后，不会再跳转去选择时分秒
                language: 'zh-CN'
            }).on('changeDate', function(ev){
                var name =$(this).attr('name');
                $(".add-offer-form").data('bootstrapValidator').updateStatus(name, 'VALIDATING').validateField(name);
            }).on('click',function(ev){
                $("#end"+__gg).datetimepicker("setStartDate", (new Date()));
            });

            KindEditor.ready(function (K) {
                window.editorText = K.create('textarea[name="body"]', {
                    uploadJson: oyy.settings.basePath + '/upload.php',
                    urlType: 'domain',
                    formatUploadUrl: false,
                    afterBlur: function () {
                        this.sync();
                        var str = $.trim(this.html());
                        if (str.length == 0) {
                            $(".surplus-details").addClass("has-error");
                            $(".surplus-details").find(".help-block").html("详细说明不能为空");
                        }
                        else {
                            $(".surplus-details").find(".help-block").html("");
                            $(".surplus-details").removeClass("has-error");
                        }
                    }
                });
                $('.upload-content').unbind('click');
                $('.upload-content').click(function () {
                    var $this = this;
                    var editor = K.editor({
                        filePostName : 'imgFile',
                        extraFileUploadParams:{fieldName:'imgFile',limitSize:1024*5,limitTypes:"jpg,png,jpeg"},
                        urlType : 'domain',
                        formatUploadUrl:false,
                        allowFileManager : false
                    });
                    editor.loadPlugin('image', function () {
                        editor.plugin.imageDialog({
                            showRemote: false,
                            clickFn: function (url) {
                                appendImage($this, url);
                                editor.hideDialog();
                            }
                        });
                    });
                });
            });
            inti_input($(".machining .yc_table:last").find(".pht-input"));
            inti_input($(".machining .yc_table:last").find(".packing"));
            //材料形态
            var ycheight = $('.yctype' + __gg);
            ycheight.change(function () {
                var type = $(".zhonglei");
                var length=$(".length");
                if (ycheight.find("option:selected").val() == 'JL') {
                    $('.leixing').find('input').val("C");
                    $(type).find("option[value='FJYC']").show();
                    $(type).find("option[value='ZQGDYC']").show();
                    $(type).find("option[value='HQGDYC']").hide();
                    //$('.leixing').find('input').attr("disabled", true);

                } else if(ycheight.find("option:selected").val() == 'BL'){
                    $('.leixing').find('input').val("");
                    $(type).find("option[value='FJYC']").hide();
                    $(type).find("option[value='ZQGDYC']").hide();
                    $(type).find("option[value='HQGDYC']").show();

                    //$('.leixing').find('input').attr("disabled", false);

                }
            });

        });
    })

    /*材料形态*/
    $(function () {

        var ycheight = $('.yctype' + __gg);
        ycheight.change(function () {
            var length=$(".length");
            if (ycheight.find("option:selected").val() == 'JL') {
                $('.leixing').find('input').val("C");
                $('.leixing').find('input').attr("disabled", true);
            } else {
                $('.leixing').find('input').val("");
                $('.leixing').find('input').attr("disabled", false);
            }
        })
        $('#con-more').click(function () {
            var more = $(this).prevAll('.address-con');
            $(this).prevAll('.address-con').toggle();
            if (more.is(':hidden')) {
                $(this).find('span').html('更多地址');
                $(this).addClass('addri').removeClass('addri1');
            } else {
                $(this).find('span').html('收起地址');
                $(this).removeClass('addri').addClass('addri1');
            }
        })
    })
    //编辑时
    $(".spec-stocks").find(".spec-stock-item").each(function () {
        var key = $(this).attr("rel");
        var name = $(this).find(".name").html();
        $('.add-offer-form').bootstrapValidator('addField', 'spec[' + key + '][stock]', {
            validators: {
                notEmpty: {
                    message: name + '的可售数量不能为空'
                },
                integer: {
                    message: name + '可售数量必须为有效的整数'
                },
                greaterThan: {
                    value: 1,
                    message: name + '可售数量不能小于1'
                }
            }
        });
    });
    $(".prices-items").find(".price-item").each(function () {
        var key = $(this).attr("rel");
        //加验证
        $('.add-offer-form').bootstrapValidator('addField', 'price[' + key + '][min]', {
            validators: {
                notEmpty: {
                    message: '起订量不能为空'
                },
                integer: {
                    message: '起订量必须为有效的整数'
                },
                greaterThan: {
                    value: 1,
                    message: '起订量不能小于1'
                }
            }
        });
        $('.add-offer-form').bootstrapValidator('addField', 'price[' + key + '][price]', {
            validators: {
                notEmpty: {
                    message: '余材价格不能为空'
                },
                numeric: {
                    message: '余材价格输入不符合规则'
                },
                greaterThan: {
                    value: 0,
                    message: '余材价格不能小于0'
                },
                lessThan: {
                    value: 999999999,
                    message: '余材价格不能大于999999999'
                }
            }
        });
    });
    $(".spec-prices").find(".spec-price-item").each(function () {
        var key = $(this).attr("rel");
        var name = $(this).find(".name").html();
        $('.add-offer-form').bootstrapValidator('addField', 'spec[' + key + '][price]', {
            validators: {
                notEmpty: {
                    message: name + '的单价不能为空'
                },
                numeric: {
                    message: name + '的价格输入不合法'
                },
                greaterThan: {
                    value: 0,
                    message: name + '的价格不能小于0'
                },
                lessThan: {
                    value: 999999999,
                    message: name + '的价格不能大于999999999'
                }
            }
        });
        $('.add-offer-form').bootstrapValidator('addField', 'spec[' + key + '][stock1]', {
            validators: {
                notEmpty: {
                    message: name + '的可售数量不能为空'
                },
                integer: {
                    message: name + '的可售数量必须为有效的整数'
                },
                greaterThan: {
                    value: 1,
                    message: name + '的可售数量不能小于1'
                }
            }
        });
    });
    $("#btn-save").click(function () {
        /********属性**/
        if (check_attr() === false) {
            return false;
        }
        //库存/无规格
        if ($("#stock").is(':visible')) {
            $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'stock', true);
        }
        else {
            $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'stock', false);
        }
        //最小起订量
        if ($("#moq").is(':visible')) {
            $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'moq', true);
        }
        else {
            $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'moq', false);
        }
        var type = $("price-type").val();
        if (type == 1) {
            $(".spec-stocks").find(".spec-stock-item").each(function () {
                $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'spec[' + $(this).attr("rel") + '][stock]', true);
            });
            $(".spec-prices").find(".spec-price-item").each(function () {
                $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'spec[' + $(this).attr("rel") + '][price]', false);
                $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'spec[' + $(this).attr("rel") + '][stock1]', false);
            });
            $(".prices-items").find(".price-item").each(function () {
                $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'price[' + $(this).attr("rel") + '][min]', true);
                $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'price[' + $(this).attr("rel") + '][price]', true);
            });
        }
        else if (type == 2) {
            $(".spec-prices").find(".spec-price-item").each(function () {
                $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'spec[' + $(this).attr("rel") + '][price]', true);
                $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'spec[' + $(this).attr("rel") + '][stock1]', true);
            });
            //数量报价
            $(".prices-items").find(".price-item").each(function () {
                $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'price[' + $(this).attr("rel") + '][min]', false);
                $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'price[' + $(this).attr("rel") + '][price]', false);
            });
            //库存
            $(".spec-stocks").find(".spec-stock-item").each(function () {
                $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'spec[' + $(this).attr("rel") + '][stock]', false);
            });
        }
        //图片
        var isHasImage = false;
        $(".upload-content").find("input").each(function () {
            if ($(this).val().length > 0) {
                isHasImage = true;
            }
        });
        if (!isHasImage) {
            $(".offer-images").addClass('has-error');
            $(".offer-images").find('.help-block').html("图片不能为空");
            return false;
        }
        //详细说明
        var bodyText = $.trim(editorText.html());
        if (bodyText.length == 0) {
            $(".surplus-details").addClass('has-error');
            $(".surplus-details").find('.help-block').html("详细信息不能为空");
            return false;
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
function appendImage(e, url) {
    var img = '<img src="' + url + '" width="113px" height="100px">';
    img += '<span class="iem posi-abso" onclick="deleteImg(this)"></span>';
    var hidden = '<input type="hidden" name="images[]" value="' + url + '">';
    $(e).html(img + hidden);
    $(e).parents(".offer-images").removeClass("has-error");
    $(e).parents(".offer-images").find(".help-block").empty();
}
function deleteImg(item, event) {
    var src = oyy.settings.basePath + "/assets/image/oyys/yc-pic3.jpg";
    $(item).prev().attr("src", src);
    $(item).next().val("");
    $(item).remove();
    event = event || window.event;
    event.stopPropagation();
}

function removeMe(e) {
    var p = $(e).parents(".added-attr");
    $(p).remove();
    check_attr();
}
//删除价格区间
function removePrice(e) {
    var p = $(e).parents(".price-item");
    var key = $(p).attr("rel");
    var lastE = $(p).prev();
    var del = $(lastE).find(".del-price");
    $('.add-offer-form').bootstrapValidator('removeField', 'price[' + key + '][min]');
    $('.add-offer-form').bootstrapValidator('removeField', 'price[' + key + '][price]');
    $(del).show();
    $(p).remove();
}
function removeSpec(e, key) {
    //var specE = $(e).prev();
    //var name = $(specE).attr("name");
    //var key = $(specE).attr("rel");
    //删除库存
    $(".spec-stock-item").each(function () {
        if ($(this).attr("rel") == key) {
            $(this).remove();
            $('.add-offer-form').bootstrapValidator('removeField', 'spec[' + key + '][stock]');
        }
    });
    //删除报价
    $(".spec-price-item").each(function () {
        if ($(this).attr("rel") == key) {
            $(this).remove();
            $('.add-offer-form').bootstrapValidator('removeField', 'spec[' + key + '][price]');
            $('.add-offer-form').bootstrapValidator('removeField', 'spec[' + key + '][stock1]');
        }
    });
    //删除自己
    var p = $(e).parents(".added-spec");
    $(p).remove();
    checkSpec();
}
function setSpec(e) {
    var value = $.trim($(e).val());
    var name = $(e).attr("name");
    var key = $(e).attr("rel");
    if (value.length > 0) {
        //库存
        setStock(key, value);
        //价格
        setPrice(key, value);
    }
    else {
        //库存
        delStock(key);
        //价格
        delPrice(key);
    }
    checkSpec();
}
function setStock(key, name) {
    //添加库存
    var specStocksE = $(".add-offer-form").find(".spec-stocks");
    var curlE = $(specStocksE).find("tr[rel=" + key + "]");
    var length = $(curlE).length;
    if (length == 0) {
        var specStockStr = "<tr class=\"spec-stock-item\" rel=\"{_key_}\"> \
                        <td class=\"name\"> \
                          {_name_} \
                        </td> \
                        <td style=\"text-align: center;\"> \
                          <input type=\"text\" maxlength=10 class=\"form-control input-sm\" name=\"spec[{_key_}][stock]\"> \
                        </td> \
                      </tr>";
        specStockStr = specStockStr.replace(/{_key_}/g, key);
        specStockStr = specStockStr.replace(/{_name_}/g, name);
        //加验证
        $(specStocksE).append(specStockStr);
        $('.add-offer-form').bootstrapValidator('addField', 'spec[' + key + '][stock]', {
            validators: {
                notEmpty: {
                    message: name + '的可售数量不能为空'
                },
                integer: {
                    message: name + '可售数量必须为有效的整数'
                },
                greaterThan: {
                    value: 1,
                    message: name + '可售数量不能小于1'
                }
            }
        });
    }
    else {
        //更新
        $(curlE).find(".name").html(name);
    }
}
function delStock(key) {
    $(".spec-stock-item").each(function () {
        if ($(this).attr("rel") == key) {//enableFieldValidators
            $('.add-offer-form').bootstrapValidator('removeField', 'spec[' + key + '][stock]');
            //$('.add-offer-form').bootstrapValidator('enableFieldValidators', 'spec['+key+'][stock]',false);
            $(this).remove();
        }
    });
}
function setStockTotal() {
    var total = 0;
    $(".spec-prices .st").each(function () {
        total += parseInt($(this).val());
    });
    $(".total-stock").html(total);
}
function checkAttr(e) {
    var cusAttrE = $(".item-attr .custom-attr .cus-attr");
    cusAttrE.removeClass("active");
    $(e).addClass("active");
    var value = $(e).val();
    var attrs = [];
    var cusAttrs = [];
    var attrsE = $(".item-attr .attr-its");
    $(attrsE).each(function () {
        attrs.push($(this).attr("for"));
    });
    var cusAttrE = $(".item-attr .custom-attr .cus-attr");
    $(cusAttrE).each(function () {
        if (!$(this).hasClass("active")) {
            var v = $(this).val();
            if (v.length > 0) {
                cusAttrs.push(v);
            }
        }
    });
    var newAttrs = $.merge(attrs, cusAttrs);
    console.log(newAttrs);
    if ($.inArray(value, newAttrs) != -1) {
        oyy.message("您输入的属性已经存在");
        $(e).val("");
    }
}
function setPrice(key, name) {
    var specPriceE = $(".add-offer-form").find(".spec-prices");
    var curlE = $(specPriceE).find("tr[rel=" + key + "]");
    var length = $(curlE).length;
    if (length == 0) {
        var specPriceStr = " <tr class=\"spec-price-item\" rel=\"{_key_}\"> \
          <td class=\"name\">{_name_}</td> \
          <td><input type=\"text\" maxlength=9 class=\"form-control input-sm\" name=\"spec[{_key_}][price]\"></td> \
          <td><input type=\"text\" maxlength=10 onchange=\"setStockTotal()\" class=\"form-control input-sm st\" name=\"spec[{_key_}][stock1]\"></td> \
        </tr>";
        specPriceStr = specPriceStr.replace(/{_key_}/g, key);
        specPriceStr = specPriceStr.replace(/{_name_}/g, name);
        $(specPriceE).append(specPriceStr);
        $('.add-offer-form').bootstrapValidator('addField', 'spec[' + key + '][price]', {
            validators: {
                notEmpty: {
                    message: name + '的单价不能为空'
                },
                numeric: {
                    message: name + '的价格输入不合法'
                },
                greaterThan: {
                    value: 0,
                    message: name + '的价格不能小于0'
                },
                lessThan: {
                    value: 999999999,
                    message: name + '的价格不能大于999999999'
                }
            }
        });
        $('.add-offer-form').bootstrapValidator('addField', 'spec[' + key + '][stock1]', {
            validators: {
                notEmpty: {
                    message: name + '的可售数量不能为空'
                },
                integer: {
                    message: name + '的可售数量必须为有效的整数'
                },
                greaterThan: {
                    value: 1,
                    message: name + '的可售数量不能小于1'
                }
            }
        });
    }
    else {
        //更新
        $(curlE).find(".name").html(name);
    }
}
function delPrice(key) {
    $(".spec-price-item").each(function () {
        if ($(this).attr("rel") == key) {//enableFieldValidators
            $('.add-offer-form').bootstrapValidator('removeField', 'spec[' + key + '][price]');
            $('.add-offer-form').bootstrapValidator('removeField', 'spec[' + key + '][stock1]');
            //$('.add-offer-form').bootstrapValidator('enableFieldValidators', 'spec['+key+'][price]',false);
            //$('.add-offer-form').bootstrapValidator('enableFieldValidators', 'spec['+key+'][stock1]',false);
            $(this).remove();
        }
    });
}
function checkSpec() {
    $('.add-offer-form').data('bootstrapValidator').disableSubmitButtons(false);
    var isEmpty = true;
    $(".spec-input").each(function () {
        var value = $.trim($(this).val());
        if (value.length > 0) {
            isEmpty = false;
        }
    });
    if (isEmpty) {
        $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'stock', true);
        $(".nospec-price-dis").show();
        $(".spec-price-dis").hide();
        $(".num-price-dis").hide();

        $(".price-type-dis").hide();

        //按照余材数量报价
        $('input[name="priceType"]').each(function () {
            if ($(this).val() == 1) {
                $(this).click();
            }
        });
    }
    else {
        $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'stock', false);
        //判断是否是按照规格报价
        if ($("input[name='priceType']:checked").val() == 1) {
            $(".num-price-dis").show();
        }
        else {
            $(".spec-price-dis").show();
        }
        if ($("input[name='tradeMode']:checked").val() == 1) {
            $(".price-type-dis").show();//需判断是否选择了询价
        }
        $(".nospec-price-dis").hide();
        //$(".spec-price-dis").hide();
    }

}
KindEditor.ready(function (K) {
    window.editorText = K.create('textarea[name="body"]', {
        uploadJson: oyy.settings.basePath + '/upload.php',
        urlType: 'domain',
        formatUploadUrl: false,
        afterBlur: function () {
            this.sync();
            var str = $.trim(this.html());
            if (str.length == 0) {
                $(".surplus-details").addClass("has-error");
                $(".surplus-details").find(".help-block").html("详细说明不能为空");
            }
            else {
                $(".surplus-details").find(".help-block").html("");
                $(".surplus-details").removeClass("has-error");
            }
        }
    });
    $('.upload-content').click(function () {
        var $this = this;
        var editor = K.editor({
            filePostName : 'imgFile',
            extraFileUploadParams:{fieldName:'imgFile',limitSize:1024*5,limitTypes:"jpg,png,jpeg"},
            urlType : 'domain',
            formatUploadUrl:false,
            allowFileManager : false
        });
        editor.loadPlugin('image', function () {
            editor.plugin.imageDialog({
                showRemote: false,
                clickFn: function (url) {
                    appendImage($this, url);
                    editor.hideDialog();
                }
            });
        });
    });
});
$.fn.offer = function () {
    var _self = this;
    var addAttrE = $(_self).find(".add-attr");
    var addSpecE = $(_self).find(".add-spec");
    var unitE = $(_self).find(".unit");
    var customAttrs = $(_self).find(".custom-attr");
    var customSpec = $(_self).find(".custom-spec");
    var priceTypeE = $(_self).find(".price-type");
    var priceRegionSet = $(_self).find(".price-region-set");
    var specPriceSet = $(_self).find(".spec-price-set");

    var nospecPriceDis = $(_self).find(".nospec-price-dis");
    var specPriceDis = $(_self).find(".spec-price-dis");
    var numPriceDis = $(_self).find(".num-price-dis");
    var priceTypeDis = $(_self).find(".price-type-dis");
    var unitSelect = $(_self).find(".unit-select");
    var addPrice = $(_self).find(".add-price");
    var priceItems = $(_self).find(".prices-items");
    var moq = $(_self).find(".moq");
    var tradingStyleE = $(_self).find(".trading-style");

    customAttrs.add = function () {
        var count = $(this).find(".added-attr").length;
        if (count < 10) {
            var attrStr = "<div class=\"form-inline margin-bottom-md added-attr\">\
              <div class=\"col-sm-3 control-label\"> \
                <label class=\"sr-only\">属性名称</label> \
                <input type=\"text\"  onkeyup=\"check_attr()\" onblur=\"checkAttr(this)\" class=\"form-control\" name=\"attrs[{_key_}][name]\" maxlength=10 placeholder=\"属性名称\"> \
              </div> \
              <div class=\"form-group pad-top-7\"> \
                <label class=\"sr-only\">属性值</label> \
                <input type=\"text\" class=\"form-control\" name=\"attrs[{_key_}][value]\" maxlength=20 placeholder=\"属性值\"> \
              </div> \
              <button type=\"button\" class=\"btn btn-link mag-top-7\" onclick=\"removeMe(this)\">删除</button> \
            </div>";
            attrStr = attrStr.replace(/{_key_}/g, count);
            $(this).append(attrStr);
        }
    }
    customSpec.add = function () {
        var count = $(this).find(".added-spec").length;
        if (count < 9) {
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

            specStr = specStr.replace(/{_key_}/g, (count + 1));
            $(this).append(specStr);
        }
    }
    $(addAttrE).click(function () {
        customAttrs.add();
    });
    $(addSpecE).click(function () {
        customSpec.add();
    });
    $(priceTypeE).change(function () {
        var val = $(this).val();
        if (val == 1) {
            //按照数量报价
            //库存
            $(".spec-stocks").find(".spec-stock-item").each(function () {
                $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'spec[' + $(this).attr("rel") + '][stock]', true);
            });
            //规格报价
            $(".spec-prices").find(".spec-price-item").each(function () {
                $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'spec[' + $(this).attr("rel") + '][price]', false);
                $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'spec[' + $(this).attr("rel") + '][stock1]', false);
            });
            //最小起订量
            $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'moq', false);
            //数量报价
            $(".prices-items").find(".price-item").each(function () {
                $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'price[' + $(this).attr("rel") + '][min]', true);
                $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'price[' + $(this).attr("rel") + '][price]', true);
            });
            $(specPriceSet).hide();
            $(priceRegionSet).show();
            $(specPriceDis).hide();
            $(moq).hide();
            $(numPriceDis).show();
        }
        else if (val == 2) {
            //按照规格报价
            //规格报价
            $(".spec-prices").find(".spec-price-item").each(function () {
                $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'spec[' + $(this).attr("rel") + '][price]', true);
                $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'spec[' + $(this).attr("rel") + '][stock1]', true);
            });
            //最小起订量
            $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'moq', true);
            //数量报价
            //数量报价
            $(".prices-items").find(".price-item").each(function () {
                $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'price[' + $(this).attr("rel") + '][min]', false);
                $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'price[' + $(this).attr("rel") + '][price]', false);
            });
            //库存
            $(".spec-stocks").find(".spec-stock-item").each(function () {
                $('.add-offer-form').bootstrapValidator('enableFieldValidators', 'spec[' + $(this).attr("rel") + '][stock]', false);
            });
            $(priceRegionSet).hide();
            $(specPriceSet).show();
            $(specPriceDis).show();
            $(moq).show();
            $(numPriceDis).hide();
        }
    });
    $(unitSelect).change(function () {
        var value = $(this).val();
        if (value == 0) {
            value = "";
        }
        $(unitE).html(value);
    });
    priceItems.add = function () {
        //先验证
        var lastE = $(this).find(".price-item").last();
        var lastKey = $(lastE).attr("rel");
        var lastMinE = $(lastE).find("input[name='price[" + lastKey + "][min]']");
        var lastPriceE = $(lastE).find("input[name='price[" + lastKey + "][price]']");
        var lastMin = $.trim($(lastMinE).val());
        var lastPrice = $.trim($(lastPriceE).val());
        if (lastMin.length == 0) {
            $(lastMinE).focus();
            return false;
        }
        else if (!/^(?:-?(?:0|[1-9][0-9]*))$/.test(lastMin)) {
            $(lastMinE).focus();
            return false;
        }
        if (lastPrice.length == 0) {
            $(lastPriceE).focus();
            return false;
        }
        else if (!(!isNaN(parseFloat(lastPrice)) && isFinite(lastPrice))) {
            $(lastPriceE).focus();
            return false;
        }
        var count = $(this).find(".price-item").length;
        if (count < 3) {
            var unit = $(".unit-select").val();
            var del = $(this).find(".del-price");
            $(del).hide();
            var str = "<tr class=\"price-item\" rel={_key_}> \
                      <td> \
                          <span>起订量</span> \
                          <input type=\"text\" class=\"form-control input-sm\" onblur=\"checkMin(this)\" \
                            name=\"price[{_key_}][min]\" maxlength=10> \
                          <span class=\"unit\">{_unit_}</span> \
                          <span>以上</span> \
                      </td> \
                      <td> \
                          <input type=\"text\" class=\"form-control input-sm\" onblur=\"checkPrice(this)\" \
                            name=\"price[{_key_}][price]\" maxlength=9> \
                          <span>元/</span> \
                          <span class=\"unit\">{_unit_}</span> \
                          <button type=\"button\" class=\"btn btn-link del-price\" onclick=\"removePrice(this)\">删除</button> \
                      </td> \
                    </tr>";
            str = str.replace(/{_key_}/g, (count));
            str = str.replace(/{_unit_}/g, (unit));
            $(this).append(str);
            //加验证
            $('.add-offer-form').bootstrapValidator('addField', 'price[' + count + '][min]', {
                validators: {
                    notEmpty: {
                        message: '起订量不能为空'
                    },
                    integer: {
                        message: '起订量必须为有效的整数'
                    },
                    greaterThan: {
                        value: 1,
                        message: '起订量不能小于1'
                    }
                }
            });
            $('.add-offer-form').bootstrapValidator('addField', 'price[' + count + '][price]', {
                validators: {
                    notEmpty: {
                        message: '余材价格不能为空'
                    },
                    numeric: {
                        message: '余材价格输入不符合规则'
                    },
                    greaterThan: {
                        value: 0,
                        message: '余材价格不能小于0'
                    },
                    lessThan: {
                        value: 999999999,
                        message: '余材价格不能大于999999999'
                    }
                }
            });
        }
    }
    $(addPrice).click(function () {
        priceItems.add();
    });
    $(tradingStyleE).find("input[name='tradeMode']").change(function () {
        var type = $(this).val();
        if (type == 2) {
            $(priceTypeDis).hide();
            $(_self).find(".price-area").hide();
        }
        else {
            var isEmpty = true;
            $(_self).find(".spec-input").each(function () {
                var value = $.trim($(this).val());
                if (value.length > 0) {
                    isEmpty = false;
                }
            });
            if (!isEmpty) {
                $(priceTypeDis).show();
            }
            $(_self).find(".price-area").show();
        }
    });
}
function checkMin(e) {
    var min = $.trim($(e).val());
    var p = $(e).parents(".price-item");

    var preE = $(p).prev();
    var preKey = $(preE).attr("rel");
    var preMinE = $(preE).find("input[name='price[" + preKey + "][min]']");
    var preMin = parseInt($(preMinE).val());
    min = parseInt(min);
    if (!/^(?:-?(?:0|[1-9][0-9]*))$/.test(min)) {
        $(e).val("");
    }
    else if (min <= preMin) {
        $(e).val("");
    }
    var nextE = $(p).next();
    if (nextE.length > 0) {
        var nextKey = $(nextE).attr("rel");
        var nextMinE = $(nextE).find("input[name='price[" + nextKey + "][min]']");
        var nextMin = parseInt($(nextMinE).val());
        if (min >= nextMin) {
            $(e).val("");
        }
    }

}
function checkPrice(e) {
    var price = $.trim($(e).val());
    var p = $(e).parents(".price-item");
    var preE = $(p).prev();
    var preKey = $(preE).attr("rel");
    var prePriceE = $(preE).find("input[name='price[" + preKey + "][price]']");
    var prePrice = parseFloat($(prePriceE).val());
    price = parseFloat(price);
    if (!(!isNaN(parseFloat(price)) && isFinite(price))) {
        $(e).val("");
        return false;
    }
    else if (price >= prePrice) {
        $(e).val("");
    }
    var nextE = $(p).next();
    if (nextE.length > 0) {
        var nextKey = $(nextE).attr("rel");
        var nextPriceE = $(nextE).find("input[name='price[" + nextKey + "][price]']");
        var nextPrice = parseInt($(nextPriceE).val());
        if (price <= nextPrice) {
            $(e).val("");
        }
    }
}


function check_attr() {
    /*****属性是否有重复***/
    var has_error = 0;
    var obj = $(".custom-attr .added-attr");
    if (typeof(obj) != "undefined") {
        $(obj).each(function (i, v) {
            var name = $(v).find("input:eq(0)").val();
            var number = 0;
            if (name != "") {
                $(obj).each(function (i2, v2) {
                    var name2 = $(v2).find("input:eq(0)").val();
                    if (name == name2) {
                        number++;
                    }
                })
                if (number > 1) {
                    has_error++;
                }
            }
        })
    }
    if (has_error > 0) {
        $(".custom-attr").addClass('has-error');
        $(".custom-attr").find('.help-block').html("自定义属性不能有重复");
        return false;
    } else {
        $(".custom-attr").removeClass('has-error');
        $(".custom-attr").find('.help-block').html("");
        return true;
    }

}
