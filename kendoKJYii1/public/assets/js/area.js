var fn_area_data={};
$.fn.area = function () {
    var _self = this;
    var province = _self.find(".province");
    var city = _self.find(".city");
    var county = _self.find(".county");
    var hideValue = _self.find(".hide-value");
	var get_area={};
   
    _self.setprovince = function(){
        var data = _self.getData(0);
		_self.setOption(0,province);
    }
	
    _self.setCity = function(pid){
		_self.setOption(pid,city);
    }
    _self.setcounty = function(pid){
		_self.setOption(pid,county);
    }
	
	_self.setOption=function(pid,object){
		if(fn_area_data[pid]){
			var data=fn_area_data[pid];
		}else{
			 var data = _self.getData(pid);
			 fn_area_data[pid]=data;
		}
        _self.setHtml(object,data,'请选择:');
	}
	
    _self.setHtml = function(select,data,defaultName){
        if(data != null){
			select.html("<option value=''>"+defaultName+"</option>");
            $.each(data, function (k, area) {
                select.append("<option value='"+area.id+"'>"+area.name+"</option>");
            });
        }
        else{
            select.append("<option value=''>"+defaultName+"</option>");
        }
    }
    _self.getData = function(pid){
		if(get_area[pid]){
			}
        var data = {};
        $.ajax({
            type: "post",
            async :false,
            dataType:'json',
            url: "/helper/area/render",
            data: {action:"getChilds",pid: pid},
            success: function (respose) {
                if(respose.success){
                    data = respose.data;
                }
            }
        }); 
		get_area[pid]=data;
        return data;
    }
    _self.getDataReverse = function(aid){
        var data = {};
        $.ajax({
            type: "post",
            async :false,
            dataType:'json',
            url: "/helper/area/render",
            data: {action:"getReverse",aid: aid},
            success: function (respose) {
                if(respose.success){
                    data = respose.data;
                }
            }
        });
        return data;
    }
    _self.init = function(){
        _self.setprovince();
        var aid = parseInt($.trim(hideValue.val()));
        if(aid != 0 && !isNaN(aid)){
            var data = _self.getDataReverse(aid);
            province.val(data.provinceID);
            province.trigger("change");
            city.val(data.cityID);
            city.trigger("change");
            county.val(data.countyID);
            county.trigger("change");
        }
    }
    province.change(function(){
        var pid = $(this).val();
        city.empty();
        county.empty();
        hideValue.val("");
        _self.setCity(pid);
        city.trigger("change");
    });
    city.change(function(){
        var pid = $(this).val();
        county.empty();
        hideValue.val("");
        _self.setcounty(pid);
        county.trigger("change");
    });
    county.change(function(){
        var id = $(this).val();
        hideValue.val(id);
    });
    _self.init();
    return _self;
}