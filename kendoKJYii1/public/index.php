<?php
define('YII_DEBUG',true);
define('YII_TRACE_LEVEL',3);
define('UPLOAD_PATH',dirname(dirname(__FILE__))."/uploadfile/");
define('UPLOAD_PATH_NEED',dirname(dirname(__FILE__))."/public/uploadfile/");
define('WWW_PATH',dirname(dirname(__FILE__)));
require_once '../../framework-yii/oyy.php';
utf8();
$app = oyy_create_app();

Yii::app()->onBeginRequest = function($event)
{
    RequestLog::Log();
};

$app->run();