<?php

class KendoController extends Controller
{
	public function actionIndex()
	{
		@$derma=$_COOKIE['derma']?$_COOKIE['derma']:"skin1.css";
		$this->render('index',array("derma"=>$derma));
	}
	//控制台
	public function actionDashboard(){
		$this->render('dashboard');
	}
	//检测登陆状态
	public function actionCheckLoginStatus(){
   		echo json_encode(array('stateKeyPrefix'=>true));
	}
}