<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta charset="utf-8"/>
    <meta name="renderer" content="webkit">
    <title>后台kendo框架</title>
    <meta name="description" content="欧冶加工管理平台"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
    <link rel="stylesheet" href="<?php echo $this->oyycssUrl ?>/kendo/Site.css"/>
    <link rel="stylesheet" href="<?php echo $this->oyycssUrl ?>/layout.css"/>
    <?php if($derma!="skin0.css"){ ?>
	<link rel="stylesheet" href="<?php echo $this->oyycssUrl ?>/skin/<?php echo $derma ?>"/>
    <?php } ?>
	<style type="text/css">
	::-webkit-scrollbar{  
		 width:8px;
	} 
	::-webkit-scrollbar-track{  
		background:#ccc;  
		border-radius:8px;
	} 
	::-webkit-scrollbar-thumb  
	{  
		border-radius: 8px;
		background-color: #aaa;  
	} 
    .left_line{
      height: 100%;
      overflow-y: scroll;
    }
    .k-panelbar{
      border:none;
    }
    .k-panelbar > li.k-state-default > .k-link{
      border:none;
      padding: 5px 20px;
    }
    .k-panelbar > li.k-state-active > .k-state-focused,.k-panelbar > li.k-state-default > .k-state-focused,.k-panel > li.k-state-default > .k-state-focused{
      box-shadow:none;
    }
    .k-panelbar{
      border: none;
    }
    .k-panelbar > li.k-state-default > .k-link span.menu-text{
      font-size:14px;
      padding-left:5px;
    }
    .k-panelbar .k-panel{
      padding:10px 0;
      border: 0;
    }
    .k-panel .k-panel > .k-item > .k-link{
      font-size:12px;
      padding-left: 38px;
    }
    .k-panelbar-expand{
      margin-right:5px;
    }
    .skin{
      width:600px;
      background:#fff;
      border:1px solid #ccc;
      border-radius:6px;
      position: absolute;
      left:50%;
      margin-left:-300px;
      top:30%;
      z-index: 99;
      box-shadow: 0px 5px 5px #ddd;
    }
    .line{
      width:500px;
      height:1px;
      background:#eee;
      margin:20px auto;
      box-shadow: 0px 1px 2px #eee;
    }
    .skin_color{
      padding:10px 0 10px 50px;
      overflow: hidden;
    }
    .skin_color span{
      width:36px;
      height:36px;
      background:#dedede;
      display:block;
      border-radius:3px;
      float:left;
      margin:0 55px 20px 0;
      position:relative;
      cursor:pointer;
    }
    .skin_color span.skin_color1{
      background:#293c55;
    }
    .skin_color span.skin_color2{
      background:#428bca;
    }
    .skin_color span.skin_color3{
          background:#06d995;
    }
    .skin_color span.skin_color4{
        background: -webkit-linear-gradient(#314871, #5b6b85);
        background: -o-linear-gradient(#314871, #5b6b85);
        background: -moz-linear-gradient(#314871, #5b6b85);
        background: linear-gradient(#314871, #5b6b85);
    }
    .skin_color span.skin_color5{
          background: -webkit-linear-gradient(#74635c, #e3d098);
          background: -o-linear-gradient(#74635c, #e3d098);
          background: -moz-linear-gradient(#74635c, #e3d098);
          background: linear-gradient(#74635c, #e3d098);
    }
    .skin_color span.skin_color6{
        background: -webkit-linear-gradient(#3c7294, #f5889d , #f6b63a);
        background: -o-linear-gradient(#3c7294, #f5889d , #f6b63a);
        background: -moz-linear-gradient(#3c7294, #f5889d , #f6b63a);
        background: linear-gradient(#3c7294, #f5889d , #f6b63a);
    }
    .skin_color span.skin_color7{
          background: -webkit-linear-gradient(#6d8d41, #bdc850);
          background: -o-linear-gradient(#6d8d41, #bdc850);
          background: -moz-linear-gradient(#6d8d41, #bdc850);
          background: linear-gradient(#6d8d41, #bdc850);
    }
     .skin_color span.skin_color8{
          background: -webkit-linear-gradient(#e69b04, #c26901);
          background: -o-linear-gradient(#e69b04, #c26901);
          background: -moz-linear-gradient(#e69b04, #c26901);
          background: linear-gradient(#e69b04, #c26901);
     }
     .skin_color span.skin_color9{
          background: -webkit-linear-gradient(#40417a, #d3d0fb);
          background: -o-linear-gradient(#40417a, #d3d0fb);
          background: -moz-linear-gradient(#40417a, #d3d0fb);
          background: linear-gradient(#40417a, #d3d0fb);
     }
    .skin_btn{
      overflow:hidden;
      padding:20px 0;
    }
    .skin_color span i{
      position:absolute;
      top:10px;
      left:10px;
      width: 16px;
      height:12px;
    }
    .skin_color span i.icon_sure{
      background:url(assets/css/images/sure.png);
    }
	</style>
</head>
<body style="overflow:visible;">

<div class="skin" style="display:none">
    <h3 class="text-center">站点皮肤设置</h3>
    <div class="line"></div>
    <div class="skin_color">
         <span class="event_logo skin_color0">
            <i class="close_logo" data-derma="skin0.css"></i>
        </span>
        <span class="event_logo skin_color1">
            <i class="close_logo" data-derma="skin1.css"></i>
        </span>
        <span class="event_logo skin_color2">
            <i class="close_logo" data-derma="skin2.css"></i>
        </span>
        <span class="event_logo skin_color3">
            <i class="close_logo" data-derma="skin3.css"></i>
        </span>
        <span class="event_logo skin_color4">
            <i class="close_logo" data-derma="skin4.css"></i>
        </span>
        <span class="event_logo skin_color5">
            <i class="close_logo" data-derma="skin5.css"></i>
        </span>
        <span class="event_logo skin_color6">
            <i class="close_logo" data-derma="skin6.css"></i>
        </span>
        <span class="event_logo skin_color7">
            <i class="close_logo" data-derma="skin7.css"></i>
        </span>
        <span class="event_logo skin_color8">
            <i class="close_logo" data-derma="skin8.css"></i>
        </span>
        <span class="event_logo skin_color9">
            <i class="close_logo" data-derma="skin9.css"></i>
        </span>
    </div>
    <div class="skin_btn text-center">
        <input class="btn btn-primary btn-sm" type="button" value="确定" onclick="on_click()">
        <input class="btn btn-default btn-sm" style="margin-left:25px;" type="button" value="取消" onclick="off_click()">
    </div>
</div>

<div class="toplayout">
    <div id="navbar" class="navbar navbar-default navbar-collapse">
            <div class="navbar-header pull-left">
                <a href="/kendo/kendo/index" class="navbar-brand">
                    <small>
                        <i class="fa logo-20"></i>
                        kendo后台框架
                    </small>
                </a>
            </div>
            <div class="navbar-buttons navbar-header pull-right  collapse navbar-collapse" role="navigation">
                <ul class="nav ace-nav">
                    <li class="light-blue">
                        <a data-toggle="dropdown" href="#" class="dropdown-toggle">
                            <img class="nav-user-photo" src="<?php echo $this->oyytoorUrl ?>assets/images/avatars/user.jpg"
                                 alt="Jason's Photo"/>
                                <span class="user-info">
                                    <small>Welcome,</small>
                                    admin
                                </span>

                            <i class="ace-icon fa fa-caret-down"></i>
                        </a>

                        <ul class="user-menu dropdown-menu-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">
                            <li>
                                <a href="#" onclick="openKenWindow('/dashboard/repassword', '修改密码', '35%', '35%',false,false);">
                                    <i class="ace-icon fa fa-cog"></i>
                                    修改密码
                                </a>
                            </li>
                            <li>
                                <a href="/logout">
                                    <i class="ace-icon fa fa-power-off"></i>
                                    安全退出
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" onclick="skin()">
                                    <i class="ace-icon glyphicon glyphicon-picture"></i>
                                    皮肤设置
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
     </div>
</div>
<div class="contentlayout">
    <div class="leftlayout">
        <div class="left_line">
            <ul id="left_panelbar">
                <?php foreach ($this->menu as $key => $menu): ?>
                        <?php foreach ($menu['items'] as $key => $menu1): ?>
                            <li>
                                <a>
                                    <i class="menu-icon fa <?php echo $menu1['icon'] ?>"></i>
                                    <span class="menu-text"> <?php echo $menu1['label'] ?> </span>
                                </a>
                                <?php if (!empty($menu1['items'])): ?>
                                    <ul>
                                        <?php foreach ($menu1['items'] as $key => $menu2): ?>
                                            <li id="<?php echo $menu2['label'] ?>">
                                                <a onclick="javascript:menuLinkToTab('<?php echo @$menu2['label'] ?>','/kendoAdminFramework/kendoKJYii1<?php echo @$menu2['url'] ?>')">
                                                    <?php if (!empty($menu2['items'])): ?><i class="menu-icon fa <?php echo $menu2['icon'] ?>"></i><?php endif; ?>
                                                    <span style="<?php if(!empty($menu2['items'])):?><?php endif;?>"><?php if (empty($menu2['items'])): ?>-&nbsp;&nbsp;&nbsp;<?php endif; ?><?php echo $menu2['label'] ?></span>
                                                </a>
                                                <b class="arrow"></b>
                                                <?php if (!empty($menu2['items'])): ?>
                                                    <ul>
                                                        <?php foreach ($menu2['items'] as $key => $menu3): ?>
                                                            <li id="<?php echo $menu3['label'] ?>">
                                                                <a href="#" onclick="javascript:menuLinkToTab('<?php echo $menu3['label'] ?>','<?php echo $menu3['url'] ?>')">
                                                                    <?php echo $menu3['label'] ?>
                                                                </a>
                                                                <b class="arrow"></b>
                                                            </li>
                                                        <?php endforeach; ?>
                                                    </ul>
                                                <?php endif; ?>
                                            </li>
                                        <?php endforeach; ?>
                                    </ul>
                                <?php endif; ?>
                            </li>
                        <?php endforeach; ?>
                <?php endforeach; ?>
            </ul>
        </div>
    </div>
    <div class="rightlayout">
        <div id="layoutTabstrip"></div>
    </div>
</div>

<script type="text/javascript">

    $("#left_panelbar").kendoPanelBar({
        expandMode: "multiple"
    });

    var isNewJquery = true;  //最新版本Jquery，tabstrip支持滑动效果
    var v_scrollable = {};
    if (!isNewJquery)
    {
        v_scrollable = false;
    }

    var tabStripElement = $("#layoutTabstrip").kendoTabStrip({
        animation: {
            open: { effects: "" },
        }, scrollable: v_scrollable
    });
    var tabStrip = tabStripElement.data("kendoTabStrip");
    //点击tab时，左边树选中相应tab的树节点
    var flag = true; //做一个标识，如果不需要关联左侧树，改为false即可
    if (flag) {
        $(tabStrip.tabGroup[0]).click(function (e) {
            var dom = e.target.closest("li");
            var index = $(dom).index(); //当前点击tab的索引
            //如果不是首页，将左侧菜单选中
            if (!$(dom).hasClass("k-first")) {
                var frame = $(tabStrip.contentElements[index]).find("iframe")[0];
                if (frame) {
                    var linkId = frame.id;
                    var panelBar = $("#left_panelbar").data("kendoPanelBar");
                    var selectLi = panelBar.element.find("li[id='" + linkId + "']");
                    panelBar.expand(selectLi.parents("li"));
                    panelBar.select(selectLi[0]);
                }
            }
        });
    }
    //首页面添加弹框方法，遮罩整个页面
    function topOpenKenWindow(contenturl, title, width, height,isCloseParentWindow) {
        if (typeof contenturl == "undefined" || $.trim(contenturl) == "")
            return false;
        var _contenturl = contenturl,
            _title = "标题", _width = "50%", _height = "60%";
        if (typeof title != "undefined" && $.trim(title) != "") _title = title;
        if (typeof width != "undefined" && $.trim(width) != "") _width = width;
        if (typeof height != "undefined" && $.trim(height) != "") _height = height;
        var isClose = true;
        if (typeof isCloseParentWindow != "undefined" && $.trim(isCloseParentWindow) != "")
            isClose = isCloseParentWindow;
        //这种情况主要处理的是弹框中再弹框（比如销售单双击页面右上角可以查询订单状态的窗口，不需要关闭上一窗口）
        if (isClose) {
            $(".__gys_auto_ken_window").closest(".k-window").remove();//关闭之前的弹框
        }
        var _div = $("<div style='display: none; overflow:hidden;' class='__gys_auto_ken_window'></div>");
        var kenWin = _div.kendoWindow({
            content: _contenturl,
            title: _title,
            width: _width,
            height: _height,
            actions: ["Refresh", "Close"],
            animation: false,
            resizable: false,
            modal: true,
            iframe: true
        }).data("kendoWindow");
        kenWin.center().open();
        _div.find("iframe").load(function () {
            var iframe = _div.find("iframe")[0].contentWindow;
            if (iframe != undefined) {
                var firstTextBox = $(iframe.document.body).find("input:visible").eq(0);
                firstTextBox.focus();
            }
        });
    }

    /*Tab操作*/
    function deleteTab(ImgObj) {
        tabStrip.remove($(ImgObj).closest("li").index());
        tabStrip.activateTab("li:last");
    }
    //提供Tab页面内部关闭
    function deleteCurrActvityTab() {
        if (window.parent != "undefind" && window.parent.location.href == window.top.location.href) {
            var currTab = $("#layoutTabstrip ul li.k-state-active");
            var prevTab = currTab.prev("li");
            tabStrip.remove(currTab.index());
            tabStrip.activateTab(prevTab);
        }
    }
    //关闭所有Tab页面
    function deleteAllTab() {
        if (window.parent != "undefind" && window.parent.location.href == window.top.location.href) {
            var firstTab = $("#layoutTabstrip .k-first");
            var currTab = $("#layoutTabstrip .k-tabstrip-items .k-state-default");
            var delTab = currTab.not(".k-first");//过滤首页
            tabStrip.remove(delTab);
            tabStrip.activateTab(firstTab);
        }
    }
    //收缩左边栏
    function changeLeftLayout(){
        var leftLayout=$('.leftlayout');
        var rightLayout=$('.rightlayout');
        var leftWidth=leftLayout.width();
        if(leftLayout.is(":hidden")){
            leftLayout.show();
            rightLayout.css('left',leftWidth);
            rightLayout.width(rightLayout.width()-leftWidth);
        }else{
            leftLayout.hide();
            rightLayout.css('width','100%');
            rightLayout.css('left',0);
        }
    }


    //closable：是否可以关闭
    //replaceable：是否打开替换
    function addTab(name, path, closable, replaceable) {
        var tabheaders = $(tabStrip.tabGroup[0]).find(".k-link");

        name = $.trim(name).replace(" ", "");
        path = $.trim(path);
        //通过path获取Tab的名称
        if (path == "" || path == "/") {
            return;
        }
        if (path.substr(0, 1) == "/") path = path.substr(1, path.length - 1);
        if (name == "") {
            var actualPath = path;
            var speIndex=actualPath.indexOf("?");
            if ( speIndex>= 0)
            {
                //防止某文件名是另外一文件名的一部分如：ProxyOrder与ProxyOrderSList
                actualPath = actualPath.substr(0, speIndex);
                //console.log(actualPath);
            }
            for (var i = 0; i < linkTabList.length; i++) {
                if (("/" + actualPath.toLowerCase())==("/" + $.trim(linkTabList[i].id).toLowerCase())) {
                    //if (("/" + path.toLowerCase()).indexOf("/" + $.trim(linkTabList[i].id).toLowerCase()) >= 0) {
                    name = $.trim(linkTabList[i].name);
                    break;
                }
            }
        }

        //获取Tab序列位置
        var gotab = -1;
        for (var i = 0; i < tabheaders.length; i++) {
            var headername = tabheaders[i].innerText;
            if (typeof headername == "undefined") headername = tabheaders[i].textContent;
            headername = $.trim(headername).replace(" ", "")
            if (name == headername) {
                gotab = i;
                break;
            }
        }

        if (typeof siteRoot == "undefined" || $.trim(siteRoot) == "") siteRoot = "/";
        if (siteRoot.substr(siteRoot.length - 1, 1) != "/") siteRoot = siteRoot + "/";
        if ((path.toLowerCase().indexOf("http://") != 0 && path.toLowerCase().indexOf("https://") != 0)
            && (siteRoot == "/" || ("/" + path).toLowerCase().indexOf(siteRoot.toLowerCase()) != 0)) {
            path = siteRoot + path;  //有缺陷
        }


        if (gotab < 0) {//添加新的Tab
            if (!isNewJquery && tabheaders.length > 8) {
                GysAlert({ content: "最多只能打开8个页面，请关闭部分页面后重试" });

                return;
            }

            tabStrip.append([{
                text: name + (closable == false ? "" : "&nbsp;<a class='tce-tab-close' onclick=\"deleteTab(this);\" ></a>"),
                encoded: false,
                content: "<iframe id='" + name + "' src='" + path + "' frameborder='0' width='100%' height='100%' scrolling='yes'></iframe>"
            }]);
            expandContentDivs(tabStripElement.children(".k-content").last());
            tabStripElement.children(".k-content").last().css('overflow-y','hidden');
            tabStrip.activateTab("li:last");
        }
        else {
            if (replaceable == true) {//重新加载Tab内容
                //var tophref = top.location.href;
                //if (tophref.substr(-1, 1) != "/") tophref = tophref + "/";
                var frameWin = $(tabStrip.contentElements[gotab]).find("iframe")[0].contentWindow;
                if (frameWin != null) frameWin.window.location.replace(path);
            }

            var tabToActivate = $(tabStrip.tabGroup[0]).find(".k-item[role=tab]")[gotab];
            tabStrip.activateTab(tabToActivate);
        }
    }
    //获取cookie
    function getCookie(name)
    {
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    }

    //菜单栏链接标签
    //callbackFun为调用当前活动页面的函数
    function menuLinkToTab(name, path, closable, closeIndex, callbackFun) {
        var checkLoginStatus = "<?php echo $this->createUrl('CheckLoginStatus');?>";
        $.ajax({
            url: checkLoginStatus,
            dataType: "json",
            type: "post",
            data:{},
            success: function (data) {
                addTab(name, path, closable, false);
                if (closeIndex >= 0) {
                    tabStrip.remove(closeIndex);
                }
                if (callbackFun != undefined && callbackFun != null) {
                    //获取当前活动页的iframe
                    var activeframe = tabStripElement.find(".k-content.k-state-active>iframe");
                    if (activeframe.length > 0) {
                        var callback = eval("activeframe[0].contentWindow." + callbackFun);
                        if (typeof (callback) != "undefined") {
                            callback();
                        }
                    }
                }
                // if(data.stateKeyPrefix){
                //     var cookie=getCookie(data.stateKeyPrefix);
                //     if(cookie==null)
                //         window.location.replace('/login');
                //     else
                //         addTab(name, path, closable, false);
                //     if (closeIndex >= 0) {
                //         tabStrip.remove(closeIndex);
                //     }
                //     if (callbackFun != undefined && callbackFun != null) {
                //         //获取当前活动页的iframe
                //         var activeframe = tabStripElement.find(".k-content.k-state-active>iframe");
                //         if (activeframe.length > 0) {
                //             var callback = eval("activeframe[0].contentWindow." + callbackFun);
                //             if (typeof (callback) != "undefined") {
                //                 callback();
                //             }
                //         }
                //     }
                // }else{
                //     // window.location.replace('/login');
                // }
            },
            error: function (e) {
                // window.location.replace('/login');
            }
        });
    }

    //页面跳转到标签
    function pageLinkToTab(name, path, closable, closeIndex) {
        addTab(name, path, closable, true);
        if (closeIndex >= 0) {
            tabStrip.remove(closeIndex);
        }
    }

    function replaceTab(name, path) {
        var activeheader = $(tabStrip.tabGroup[0]).find("li.k-item.k-state-active");
        var gotab = activeheader.index();
        if (name != "") {
            activeheader.find(".k-link").html(name + "&nbsp;<a class='tce-tab-close' onclick=\"deleteTab(this);\" ></a>");
        }
        if (gotab >= 0) {
            var frameWin = $(tabStrip.contentElements[gotab]).find("iframe")[0].contentWindow;
            if (frameWin != null) frameWin.window.location.replace(path);
        }
    }
    // 16px are substracted to compensate for content div vertical paddings and borders
    function expandContentDivs(divs) {
        divs.height(tabStripElement.innerHeight() - tabStripElement.children(".k-tabstrip-items").outerHeight() - 16);
    }

    function refreshFrame() {
        var activeframe = tabStripElement.find(".k-content.k-state-active>iframe");
        var hrefUrl = $(activeframe[0]).attr("src");
        if (activeframe.length > 0) {
            if(hrefUrl.indexOf('?')>-1){
                var href = hrefUrl.substring(0,hrefUrl.indexOf('?')); //清除url后面的参数
                activeframe[0].contentWindow.location.replace(href);
            }else{
                activeframe[0].contentWindow.location.reload();
            }
        }
    }

    $(window).resize(function () {
        resizeAll();
    });

    function resizeAll() {
        setTimeout(function () {
            $(".contentlayout,.k-tabstrip-wrapper").height($(window).height() - $(".toplayout").height());
            $(".rightlayout").width($(".contentlayout").width() - $(".leftlayout").width() - 1);
            expandContentDivs(tabStripElement.children(".k-content"));
        }, 10);
    }
    //显示修改皮肤div
    function skin(){
        $(".close_logo").removeClass("icon_sure");
        $("[data-derma='<?php echo $derma ?>']").addClass("icon_sure");
        $('.skin').css('display','block');
    }
    function off_click(){
        $('.skin').css('display','none');
    }
    function on_click(){
        var derma=$(".icon_sure").data("derma");
        setCookie("derma",derma,365);
        window.parent.location.reload();
    }
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires+";path=/";
    }
    $(function () {
        menuLinkToTab("控制台", "/kendoAdminFramework/kendoKJYii1/kendo/kendo/dashboard", false);
        resizeAll();
        if (typeof siteRoot == "undefined" || $.trim(siteRoot) == "") siteRoot = "/";
        if (siteRoot.substr(siteRoot.length - 1, 1) != "/") siteRoot = siteRoot + "/";
        $("li[role='tab']").css('z-index',100);

        //隐藏左边栏
        $("#layoutTabstrip ul").eq(0).after("<span class='tobgsm' style='margin-right: 60px;z-index: 101;' onclick='javascript:changeLeftLayout(); return false;'><img src='<?php echo $this->oyytoorUrl ?>assets/images/tobigsm.png' title='收缩左边栏'> </span>");

        //关闭所有tab页
        $("#layoutTabstrip ul").eq(0).after("<span class='tobgsm' style='margin-right: 30px;z-index: 101;' onclick='javascript:deleteAllTab(); return false;'><img src='<?php echo $this->oyytoorUrl ?>assets/images/trash.png' title='删除所有标签页'> </span>");

        //添加刷新按钮
        $("#layoutTabstrip ul").eq(0).after("<span class='tobgsm' style='z-index: 101;' onclick='javascript:refreshFrame(); return false;'><img src='<?php echo $this->oyytoorUrl ?>assets/images/refresh_ico.png' title='刷新当前tab页'></span>");
        //皮肤修改
        $(".event_logo").click(function(){
            $(".close_logo").removeClass("icon_sure");
            $(this).children('i:first').addClass("icon_sure");
        });
    });

</script>
</body>
</html>