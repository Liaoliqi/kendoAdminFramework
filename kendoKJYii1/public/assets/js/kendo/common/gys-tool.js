/**
     * 扩展基础类
     * 得到字符串的长度，包括中文和英文
     **/
String.prototype.charlen = function () {
    var arr = this.match(/[^\x00-\xff]/ig);
    return this.length + (arr == null ? 0 : arr.length);
}

/**
 * 扩展基础类
 * 格式化字符串${0} -> 参考printf %s
 **/
String.prototype.format = function () {
    var args = arguments;
    return this.replace(/\$\{(\d+)\}/g,
        function (m, i) {
            return args[i];
        });
}

/**
 * 扩展基础类
 * 字符串首尾去空格
 **/
String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "");
}

/**
 * 扩展基础类
 * 字符串包含字符串判断
 **/
String.prototype.contains = function (sub) {
    return this.indexOf(sub) != -1;
}

/**
 * 扩展基础类
 * 字符串比较大小
 **/
String.prototype.compare = function (b) {
    if (!b)
        return -1;

    if (this.length != b.length)
        return this.length - b.length;

    var i = 0;
    for (; i < this.length; i++) {
        var val = this.charCodeAt(i) - b.charCodeAt(i);
        if (val != 0)
            return val;
    }

    return 0;
}

/**
 * 扩展基础类
 * 替换字符
 **/
String.prototype.replaceLen = function (start, len, replaced) {
    if (!len)
        return this;

    if (start >= this.length)
        return this;

    var returnSeg = '';
    var returnSeg2 = '';
    var i = 0;
    for (; i < this.length; i++) {
        var c = this.charAt(i);
        if (i < start)
            returnSeg += c;

        if (i >= start + len)
            returnSeg2 += c;
    }

    return returnSeg + replaced + returnSeg2;
}

/**
 * 扩展基础类
 * 替换字符，这个在替换填入比较有用，比如***天***小时 替换为 <input />天<input />小时
 **/
String.prototype.replaceChar = function (target, replaced, start) {
    if (!target)
        return this;

    if (!start)
        start = 0;

    var returnVal = this.substring(0, start);
    var index = 0;
    for (var i = start; i < this.length; i++) {
        var c = this.charAt(i);
        target = typeof target == 'function' ? target.call(this, index) : target;
        if (c == target) {
            returnVal += typeof replaced == 'function' ? replaced.call(this, index) : replaced;
            while (i < this.length - 1 && this.charAt(i + 1) == c) {
                i++;
            }
            index++;
        } else {
            returnVal += c;
        }
    }

    return returnVal;
}

/**
 * 扩展基础类
 * 克隆复制（简单copy而已）
 **/
Array.prototype.clone = function () {
    var arr = [];
    var i = 0;
    for (; i < this.length; i++) {
        switch (typeof this[i]) {
            case 'object':
                var obj = {};
                for (key in this[i])
                    obj[key] = this[i][key];
                arr.push(obj);
                break;
            default:
                arr.push(this[i]);
                break;
        }
    }
    return arr;
}

/**
 * 扩展基础类
 * 清空
 **/
Array.prototype.clear = function () {
    this.splice(0, this.length);
}

/**
 * 扩展基础类
 * 数组包含元素
 **/
Array.prototype.contains = function (el) {
    var i;
    for (i = 0; i < this.length; i++) {
        if (this[i] == el)
            return true;
    }
    return false;
}

/**
 * 扩展基础类
 * 数组添加数组
 **/
Array.prototype.merge = function (arr) {
    if (arr) {
        var i;
        for (i = 0; i < arr.length; i++) {
            this.push(arr[i]);
        }
    }
}

/**
 * 扩展基础类
 * 根据值和属性获取到数组的对象下标
 **/
Array.prototype.indexOf = function (val, field) {
    var i = 0;
    for (; i < this.length; i++) {
        if (this[i] && (field ? this[i][field] == val : this[i] == val)) {
            return i;
        }
    }
    return -1;
}

/**
 * 扩展基础类
 * 最后一个下标
 **/
Array.prototype.lastIndexOf = function (val, field) {
    var i = 0;
    var max = -1;
    for (; i < this.length; i++) {
        if (this[i] && (field ? this[i][field] == val : this[i] == val)) {
            max = i;
        }
    }
    return max;
}

/**
 * 扩展基础类
 * 数组唯一
 **/
Array.prototype.unique = function (field) {
    var arr = [];

    var i = 0;
    for (; i < this.length; i++) {
        var val = field ? this[i][field] : this[i];
        var index = this.lastIndexOf(val, field);
        if (index == i)
            arr.push(this[i]);
    }

    return arr;
}

/**
 * 扩展基础类
 * 数组最大值
 **/
Array.prototype.max = function (field) {
    var result = -1;

    var i = 0;
    for (; i < this.length; i++) {
        var val = field ? this[i][field] : this[i];
        if (val > result)
            result = val;
    }

    return result;
}

/**
 * 扩展基础类
 * 数组最小值
 **/
Array.prototype.min = function (field) {
    var result = -1;

    var i = 0;
    for (; i < this.length; i++) {
        var val = field ? this[i][field] : this[i];
        if (val < result)
            result = val;
    }

    return result;
}

/**
 * 扩展基础类
 * 日期格式化
 **/
Date.prototype.format = function (pat) {
    var year = this.getFullYear();
    var month = this.getMonth() + 1;
    var day = this.getDate();
    var hour = this.getHours();
    var minute = this.getMinutes();
    var second = this.getSeconds();
    // 两位补齐
    month = month > 9 ? month : "0" + month;
    day = day > 9 ? day : "0" + day;
    hour = hour > 9 ? hour : "0" + hour;
    minute = minute > 9 ? minute : "0" + minute;
    second = second > 9 ? second : "0" + second;
    if (!pat) {
        pat = "yyyy-MM-dd";
    }
    pat = pat.replace(/yyyy/g, year);
    pat = pat.replace(/MM/g, month);
    pat = pat.replace(/dd/g, day);
    pat = pat.replace(/HH/gi, hour);
    pat = pat.replace(/mm/g, minute);
    pat = pat.replace(/ss/g, second);
    return pat;
}

// 减去时差的毫秒数（取决于使用的浏览器的locale设置）
Date.prototype.getTime2 = function () {
    //			return this.getTime();
    return this.getTime() - this.getTimezoneOffset() / 60 * 3600 * 1000;
}

// 日期相差天数
Date.prototype.diff = function (date) {
    return Math.ceil((this - date) / (1000 * 60 * 60 * 24));
}

// 日期加减计算
Date.prototype.add = function (days) {
    return new Date(this.getTime() + days * (1000 * 60 * 60 * 24));
}

// 日期加减计算
Date.prototype.addMonth = function (months) {
    var day = this.getDate();
    var month = this.getMonth() + 1;
    var year = this.getFullYear();
    month += months;
    if (month > 12) {
        year += Math.floor(month / 12);
        month = month % 12;
    }
    return Date.parse(month + '/' + day + '/' + year);
}

// 解析字符串，以默认 pat = "yyyy-MM-dd"的格式，而不是MM/dd/yyyy
Date.parse2 = function (str, pat) {
    if (str == null || str == '')
        return new Date();
    var rstr = str.replace(/(\d{4})([-\./])(\d{1,2})\2(\d{1,2})/, "$3/$4/$1");
    return new Date(Date.parse(rstr));
}

// 解析字符串，json date obj
// 减去时差的毫秒数（取决于使用的浏览器的locale设置）
Date.parse3 = function (obj) {
    //			return new Date(obj.time);
    return new Date(obj.time - new Date().getTimezoneOffset() / 60 * 3600 * 1000);
    //			var str = obj.year + '-' + (obj.month + 1) + '-' + obj.date + ' ' + 
    //				obj.hours + ':' + obj.minutes + ':' + obj.seconds;
    //			return Date.parse2(str);
}


// 格式化数字比如：15.001取两位->15
Number.prototype.toFormat = function (fractionDigits) {
    var f_x = parseFloat(this);
    if (isNaN(f_x)) {
        alert('function:toFormat->parameter error');
        return false;
    }
    var num = new Number(f_x);
    return parseFloat(num.toFixed(fractionDigits));

}

//获取元素名称例：#id->id
function GetElement(v) {
    if (v != null && typeof v != 'undefined' && v.length > 0) {
        if (v.substr(0, 1) == "#") {
            return v.substr(1, v.length - 1);
        }
    }

    return v;
}
Number.prototype.toXFormat = function (fractionDigits) {
    var f_x = parseFloat(this).toFixed(fractionDigits);
    if (isNaN(f_x)) { return f_x; }
    else { return parseFloat(f_x); }
}
Number.prototype.toWFormat = function () {
    //debugger;
    var f_x = parseFloat(this).toFixed(3);
    if (isNaN(f_x)) {
        alert('function:toFormat->parameter error');
        return false;
    }
    if (f_x < parseFloat(this)) {
        f_x = parseFloat(parseFloat(f_x)+ parseFloat(0.001)).toFixed(3);
        var num = new Number(f_x);
        return num;
    }
    else {
        return f_x;
    }
}


// 解决浏览器版本小数取小数位数问题(比如：0.00546取两为有时出现0.00)
//Number.prototype.toFixed = function (fractionDigits) {
//    var f = parseInt(fractionDigits) || 0;
//    if (f < -20 || f > 100) {
//        throw new RangeError("Precision of " + f + " fractional digits is out of range");
//    }
//    var x = Number(this);
//    if (isNaN(x)) {
//        return "NaN";
//    }
//    var s = "";
//    if (x < 0) {
//        s = "-";
//        x = -x;
//    }
//    if (x >= Math.pow(10, 21)) {
//        return s + x.toString();
//    }
//    var m;
//    // 10. Let n be an integer for which the exact mathematical value of 
//    // n ÷ 10^f - x is as close to zero as possible. 
//    // If there are two such n, pick the larger n.
//    n = Math.round(x * Math.pow(10, f));

//    if (n == 0) {
//        m = "0";
//    }
//    else {
//        // let m be the string consisting of the digits of the decimal representation of n (in order, with no leading zeroes).
//        m = n.toString();
//    }
//    if (f == 0) {
//        return s + m;
//    }
//    var k = m.length;
//    if (k <= f) {
//        var z = Math.pow(10, f + 1 - k).toString().substring(1);
//        m = z + m;
//        k = f + 1;
//    }
//    if (f > 0) {
//        var a = m.substring(0, k - f);
//        var b = m.substring(k - f);
//        m = a + "." + b;
//    }
//    return s + m;
//}

//重写toFixed方法
Number.prototype.toFixed = function (fractionDigits) {
    return MathRound(this, fractionDigits, false);
}
//----------------------------------------------------------------------------------------
//----------------------isfiveup==true ：四舍五入上舍入（默认）----------------------------
//----------------------isfiveup==false：四舍六入五成双-----------------------------------
//----------------------------------------------------------------------------------------
function MathRound(number, precision, isfiveup) {
    var result = "";
    if (isNaN(number)) {
        throw "NaN";
    }
    precision = ((isNaN(precision) || precision < 0) ? 0 : Math.floor(precision));
    if (precision > 20) {
        throw new RangeError("Precision of " + precision + " fractional digits is out of range");
    }
    isfiveup = ((typeof isfiveup == "undefined" || isfiveup != false) ? true : false);//默认是true：“五上舍入”

    //计算
    var multiplier = Math.pow(10, precision),
        number_abszoom = Math.abs(number) * (multiplier * 10),//多乘“1”位，消除精度后一位“0.5变0.4999...”的情况
        number_absmod = (number_abszoom % 10),
        number_zoominteger = Math.floor(number_abszoom / 10);//取整

    var result_number = 0;
    if (isfiveup) {
        number_absmod = Math.floor(number_absmod);//上舍入仅仅只考虑精度后一位
    }
    if (number_absmod > 5) {
        result_number = (number_zoominteger + 1) / multiplier;
    } else if (number_absmod < 5) {
        result_number = number_zoominteger / multiplier;
    } else {
        if (isfiveup) {//上舍入：区分正负数的上入
            result_number = (number_zoominteger + (number > 0 ? 1 : 0)) / multiplier;
        } else {//五成双：前一位成双判断
            result_number = (number_zoominteger % 2 === 0 ? number_zoominteger : number_zoominteger + 1) / multiplier;
        }
    }
    if (number < 0) {
        result_number = -1 * result_number;
    }
    //格式化结果字符串
    if (precision > 0) {
        var result_format = result_number.toString().split(".");
        var format_1 = result_format[0];
        var format_2 = (result_format.length > 1 ? result_format[1] : "");
        if (format_2.length < precision) {
            format_2 = (format_2 + "00000000000000000000").substr(0, precision);
        }
        result = format_1 + "." + format_2;
    }
    else {
        result = result_number.toString();
    }

    return result;
}

//千分符号金额，主要用于显示
Number.prototype.formatMoney = function (places, symbol, thousand, decimal) {
    places = !isNaN(places = Math.abs(places)) ? places : 2;
    symbol = symbol !== undefined ? symbol : "";
    thousand = thousand || ",";
    decimal = decimal || ".";
    var number = this,
        negative = number < 0 ? "-" : "",
        i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
};

//日期格式化显示
Date.prototype.format = function (format) {
    var o = {
        "M+": this.getMonth() + 1, //month
        "d+": this.getDate(), //day
        "h+": this.getHours(), //hour
        "m+": this.getMinutes(), //minute
        "s+": this.getSeconds(), //second
        "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
        "S": this.getMilliseconds() //millisecond
    }
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
    (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) if (new RegExp("(" + k + ")").test(format))
        format = format.replace(RegExp.$1,
        RegExp.$1.length == 1 ? o[k] :
        ("00" + o[k]).substr(("" + o[k]).length));
    return format;
}
