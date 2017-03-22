var province = {};
var area = {};
var pro_area = {};
$.fn.citySelector = function (province,area,pro_area,obj, e) {
    var province = province;
    var area = area;
    var obj = obj;
    var pro_area = pro_area;
    var e = e;
    var init = function (obj, e) {
        var ths = obj;
        var dal = '<div class="_citys"><span title="关闭" id="cColse" >×</span><ul id="_citysheng" class="_citys0"><li class="citySel">省份</li><li>城市</li><li>区县</li><a href="javascript:void (0)" class="text-primary padding-left-sm margin-left-lg" id="ce">清空选择</a><div id="_citys0" class="_citys1"></div><div style="display:none" id="_citys1" class="_citys1"></div><div style="display:none" id="_citys2" class="_citys1"></div></div>';
        Iput.show({id: ths, event: e, content: dal, width: "470"});
        $("#cColse").click(function () {
            // $("#hcity").val("");
            // $("#hproper").val("");
            // $("#harea").val("");
            //ths.value=null;
            Iput.colse();
        });
        $("#ce").click(function () {
            $("#hcity").val("");
            $("#hproper").val("");
            $("#harea").val("");
            ths.value="";
        });
        var tb_province = [];
        var b = province;
        for (var i = 0, len = b.length; i < len; i++) {
            tb_province.push('<a data-level="0" data-id="' + b[i]['id'] + '" data-name="' + b[i]['name'] + '">' + b[i]['name'] + '</a>');
        }
        $("#_citys0").append(tb_province.join(""));
        $("#_citys0 a").click(function () {
            var g = getCity($(this));
            $("#_citys1 a").remove();
            $("#_citys1").append(g);
            $("._citys1").hide();
            $("._citys1:eq(1)").show();
            $("#_citys0 a,#_citys1 a,#_citys2 a").removeClass("AreaS");
            $(this).addClass("AreaS");
            var lev = $(this).data("name");
            ths.value = $(this).data("name");
            $(".city").val($(this).data("name"));
            if (document.getElementById("hcity") == null) {
                var hcitys = $('<input>', {
                    type: 'hidden',
                    name: "hcity",
                    "data-id": $(this).data("id"),
                    id: "hcity",
                    val: lev
                });
                $(ths).after(hcitys);
            }
            else {
                $("#hcity").val(lev);
                $("#hcity").attr("data-id", $(this).data("id"));
            }
            $("#_citys1 a").click(function () {
                $("#_citys1 a,#_citys2 a").removeClass("AreaS");
                $(this).addClass("AreaS");
                var lev = $(this).data("name");
                var tempPid = $(this).data("pid");
                var tempId = $(this).data("id");
                if (document.getElementById("hproper") == null) {
                    var hcitys = $('<input>', {
                        type: 'hidden',
                        name: "hproper",
                        "data-id": tempId,
                        "data-pid": tempPid,
                        id: "hproper",
                        val: lev
                    });
                    $(ths).after(hcitys);
                }
                else {
                    $("#hproper").attr("data-id", $(this).data("id"));
                    $("#hproper").attr("data-pid", $(this).data("pid"));
                    $("#hproper").val(lev);
                }
                var bc = $("#hcity").val();
                ths.value = bc + "-" + $(this).data("name");
		  $(".city").val(bc + "-" + $(this).data("name"));
                var ar = getArea($(this));
                $("#_citys2 a").remove();
                if(ar == ''){
                	  var tempPname = '';
                	  var hproperPid = '';
                	  for(var i=0;i<pro_area.length;i++){
                       if(pro_area[i]['id'] == tempPid){
                       	  tempPname = pro_area[i]['name'];
                       	  hproperPid = pro_area[i]['pid'];
                       }
                    }
                    $("#hproper").attr("data-id",tempPid).attr("data-pid",hproperPid).val(tempPname);
                    if (document.getElementById("harea") != null) {
                        $("#harea").val(lev);
                        $("#harea").attr("data-id",tempId);

                    }else{
                    	  var hcitys = $('<input>', {
                            type: 'hidden',
                            name: "harea",
                            "data-id": tempId,
                            id: "harea",
                            val: lev
                        });
                        $(ths).after(hcitys);
                    }
                    Iput.colse();
                    return;
                }
                $("#_citys2").append(ar);
                $("._citys1").hide();
                $("._citys1:eq(2)").show();
                $("#_citys2 a").click(function () {
                    $("#_citys2 a").removeClass("AreaS");
                    $(this).addClass("AreaS");
                    var lev = $(this).data("name");
                    if (document.getElementById("harea") == null) {
                        var hcitys = $('<input>', {
                            type: 'hidden',
                            name: "harea",
                            "data-id": $(this).data("id"),
                            id: "harea",
                            val: lev
                        });
                        $(ths).after(hcitys);
                    }
                    else {
                        $("#harea").val(lev);
                        $("#harea").attr("data-id", $(this).data("id"));
                    }
                    var bc = $("#hcity").val();
                    var bp = $("#hproper").val();
                    ths.value = bc + "-" + bp + "-" + $(this).data("name");
                    $(".city").val(bc + "-" + bp + "-" + $(this).data("name"));
                    Iput.colse();
                });
            });
        });
        $("#_citysheng li").click(function () {
            $("#_citysheng li").removeClass("citySel");
            $(this).addClass("citySel");
            var s = $("#_citysheng li").index(this);
            $("._citys1").hide();
            $("._citys1:eq(" + s + ")").show();
        });
    }

    var getCity = function (obj) {
        var c = obj.data('id');
        var e = province;
        var f;
        var g = '';
        for (var i = 0, plen = e.length; i < plen; i++) {
            if (e[i]['id'] == parseInt(c)) {
                f = e[i]['city'];
                break
            }
        }
        for (var j = 0, clen = f.length; j < clen; j++) {
            g += '<a data-level="1" data-id="' + f[j]['id'] + '" data-pid="'+f[j]['pid']+'" data-name="' + f[j]['name'] + '" title="' + f[j]['name'] + '">' + f[j]['name'] + '</a>'
        }
        $("#_citysheng li").removeClass("citySel");
        $("#_citysheng li:eq(1)").addClass("citySel");
        return g;

    }

    var getArea = function (obj) {
        var c = obj.data('id');
        var e = area;
        var f = [];
        var g = '';
        for (var i = 0, plen = e.length; i < plen; i++) {
            if (e[i]['pid'] == parseInt(c)) {
                f.push(e[i]);
            }
        }
        for (var j = 0, clen = f.length; j < clen; j++) {
            g += '<a data-level="1" data-id="' + f[j]['id'] + '" data-name="' + f[j]['name'] + '" title="' + f[j]['name'] + '">' + f[j]['name'] + '</a>'
        }

        $("#_citysheng li").removeClass("citySel");
        $("#_citysheng li:eq(2)").addClass("citySel");
        return g;
    }
    init(obj, e);
}