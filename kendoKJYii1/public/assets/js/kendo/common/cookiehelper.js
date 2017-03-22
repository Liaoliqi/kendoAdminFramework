

function addCookie(cookieName,cookieValue) {
    document.cookie = cookieName + "=" + escape(cookieValue);
}

function addCookieWithExpire(cookieName, cookieValue, expiressDate) {
    document.cookie = cookieName + "=" + escape(cookieValue) + ";expires=" + expiressDate.toGMTString();
}

function addCookieNeverExpire(cookieName, cookieValue) {
    var date = new Date();
    var expiresDays = 10;
    //将date设置为10天以后的时间 
    date.setTime(date.getTime() + expiresDays * 24 * 3600 * 1000);
    document.cookie = cookieName + "=" + escape(cookieValue) + ";expires=" + date.toGMTString();
}

function getCookie(cookieName)
{
    var strCookie = document.cookie;
    var arrCookie = strCookie.split(";");
    for (var i = 0; i < arrCookie.length; i++) {
        var arr = arrCookie[i].split("=");
        if (arr[0] == cookieName) return unescape(arr[1]);
    }
    return "";
}

function deleteCookie(cookieName) {
    var date = new Date();
    date.setTime(date.getTime() - 10000);
    document.cookie = cookieName + "=v;expires=" + date.toGMTString();
}

























