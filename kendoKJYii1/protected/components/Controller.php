<?php
/**
 * Controller is the customized base controller class.
 * All controller classes for this application should extend from this base class.
 */
class Controller extends CController
{
	/**
	 * @var string the default layout for the controller view. Defaults to '//layouts/column1',
	 * meaning using a single column layout. See 'protected/views/layouts/column1.php'.
	 */
	public $layout=false;
	/**
	 * @var array context menu items. This property will be assigned to {@link CMenu::items}.
	 */
	public $menu=array();
	/**
	 * @var array the breadcrumbs of the current page. The value of this property will
	 * be assigned to {@link CBreadcrumbs::links}. Please refer to {@link CBreadcrumbs::links}
	 * for more details on how to specify this property.
	 */
	public $breadcrumbs=array();
    public $jsVersion = '1.2.2'; //js版本控制
    public $cssVersion = '1.2.1';//css版本控制
	public $oyycssUrl='/kendoAdminFramework/kendoKJYii1/public/assets/css';
	public $oyyjsUrl='/kendoAdminFramework/kendoKJYii1/public/assets/js';
	public $oyytoorUrl='/kendoAdminFramework/kendoKJYii1/public/';
	public function init()
    {
	  	$this->initScript();
        $menu = new OyyMenu;
        $this->menu = $menu->items;
        parent::init();
    }
     public function initScript()
    {
        $cs = Yii::app()->clientScript;
        $cs->registerCssFile($this->oyycssUrl . '/bootstrap.css');
        $cs->registerCssFile($this->oyycssUrl . '/font-awesome.css');
        $cs->registerCssFile($this->oyycssUrl . '/ace.css');

        $cs->registerScriptFile($this->oyyjsUrl . '/jquery.js', CClientScript::POS_HEAD);
        $cs->registerScriptFile($this->oyyjsUrl . '/oyy.js', CClientScript::POS_HEAD);

        $cssVersion = $this->cssVersion;
        $jsVersion = $this->jsVersion;
        //kendo css
        $cs->registerCssFile($this->oyycssUrl . '/kendo/kendo.common.min.css?v=' . $cssVersion);
        $cs->registerCssFile($this->oyycssUrl . '/kendo/kendo.default.min.css?v=' . $cssVersion);
        $cs->registerCssFile($this->oyycssUrl . '/kendo/kendo.rtl.min.css?v=' . $cssVersion);
        $cs->registerCssFile($this->oyycssUrl . '/kendo/kendo.index.css?v=' . $cssVersion);
        $cs->registerCssFile($this->oyycssUrl . '/dialog/ui-dialog.css?v=' . $cssVersion);

        //kendo js
        $cs->registerScriptFile($this->oyyjsUrl . '/kendo/kendo.web.min.js?v=' . $jsVersion, CClientScript::POS_HEAD);
        $cs->registerScriptFile($this->oyyjsUrl . '/kendo/cultures/kendo.culture.zh-CN.min.js?v=' . $jsVersion, CClientScript::POS_HEAD);
        $cs->registerScriptFile($this->oyyjsUrl . '/kendo/common/common-gys.js?v=' . $jsVersion, CClientScript::POS_HEAD);
        $cs->registerScriptFile($this->oyyjsUrl . '/kendo/common/common-ken.js?v=' . $jsVersion, CClientScript::POS_HEAD);
        $cs->registerScriptFile($this->oyyjsUrl . '/dialog/dialog.js?v=' . $jsVersion, CClientScript::POS_HEAD);
        $cs->registerScriptFile($this->oyyjsUrl . '/dialog/dialog-plus.js?v=' . $jsVersion, CClientScript::POS_HEAD);
        $cs->registerScriptFile($this->oyyjsUrl . '/kendo/common/gys-tool.js?v=' . $jsVersion, CClientScript::POS_HEAD);
        $cs->registerScriptFile($this->oyyjsUrl . '/bootstrap.js?v=' . $jsVersion, CClientScript::POS_HEAD);

        $cs->registerScriptFile($this->oyyjsUrl . '/kendo/jszip.min.js?v=' . $jsVersion, CClientScript::POS_HEAD);
    }
}