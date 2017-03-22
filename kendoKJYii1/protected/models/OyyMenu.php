<?php

class OyyMenu extends CComponent
{
    public $items;

    public function __construct()
    {
        $this->items = array(
            'dashboard' => array(
                'label' => '后台首页',
                'icon' => 'fa-desktop',
                'url' => '/dashboard',
                'module' => 'dashboard',
                'access' => 'dashboard',
                'items' => array(
                    'index' => array(
                        'label' => '首页菜单',
                        'icon' => 'fa-tachometer',
                        'module' => 'dashboard',
                        'access' => 'dashboard',
                        'items' => array(
                            'index' => array(
                                'label' => '控制台',
                                'icon' => 'fa-tachometer',
                                'module' => 'dashboard',
                                'access' => 'dashboard',
                                'url' => '/kendo/kendo/dashboard'
                            ),
                        ),
                    ),
                    //公司管理
                    'companylist' => array(
                        'label' => '企业管理',
                        'icon' => 'fa-desktop',
                        'module' => 'company',
                        'access' => 'company',
                        'items' => array(
                            'index' => array(
                                'label' => '公司列表',
                                'icon' => 'fa-file-o',
                                'url' => '/company/company/index',
                                'module' => 'company',
                                'access' => 'company_index',
                            ),
                            'auth' => array(
                                'label' => '公司审核',
                                'icon' => 'fa-file-o',
                                'url' => '/company/auth/index',
                                'module' => 'company',
                                'access' => 'auth_index',
                            ),
                            'apply' => array(
                                'label' => '认证申请',
                                'icon' => 'fa-file-o',
                                'url' => '/company/apply/index',
                                'module' => 'company',
                                'access' => 'apply_index',
                            ),
                            'aptitude' => array(
                                'label' => '认证审核',
                                'icon' => 'fa-file-o',
                                'url' => '/company/aptitude/index',
                                'module' => 'company',
                                'access' => 'aptitude_index',
                            ),
                            'completion' => array(
                                'label' => '企业补充信息',
                                'icon' => 'fa-file-o',
                                'url' => '/company/completion/index',
                                'module' => 'company',
                                'access' => 'completion_index',
                            ),
                           /* 'credentials' => array(
                                'label' => '证书管理',
                                'icon' => 'fa-file-o',
                                'url' => '/company/credentials/index',
                                'module' => 'company',
                                'access' => 'credentials_index',
                            ),*/
                            'contrast' => array(
                                'label' => '企业对照',
                                'icon' => 'fa-file-o',
                                'url' => '/company/contrast/index',
                                'module' => 'company',
                                'access' => 'contrast_index',
                            ),
                            'CloudChamber' => array(
                                'label' => '云仓仓库',
                                'icon' => 'fa-file-o',
                                'url' => '/company/CloudChamber/index',
                                'module' => 'company',
                                'access' => 'CloudChamber_index',
                            ),
//                            'ygj' => array(
//                                'label' => '云管家管理',
//                                'icon' => 'fa-file-o',
//                                'url' => '/company/ygj/index',
//                                'module' => 'company',
//                                'access' => 'ygj_index',
//                            ),
                            'crontab' => array(
                                'label' => '每日公司Excel',
                                'icon' => 'fa-file-o',
                                'url' => '/company/company/crontab',
                                'module' => 'company',
                                'access' => 'company_crontab',
                            ),
                            'DepositRefund' => array(
                                'label' => '保证金退回申请',
                                'icon' => 'fa-file-o',
                                'url' => '/company/DepositRefund/index',
                                'module' => 'company',
                                'access' => 'DepositRefund_index',
                            )
                        ),
                    ),
                    //公司管理end
                    //运营管理
                    'shangcheng' => array(
                        'label' => '交易管理',
                        'icon' => 'fa-calendar',
                        'module' => 'shoporder',
                        'access' => 'shoporder',
                        'url' => '/shoporder/shoporder/index',
                        'items' => array(
                            'index' => array(
                                'label' => '询单列表',
                                'icon' => 'fa-file-o',
                                'module' => 'shoporder',
                                'access' => 'asktobuy_index',
                                'url' => '/shoporder/asktobuy/index',
                            ),
                            'order' => array(
                                'label' => '订单列表',
                                'icon' => 'fa-file-o',
                                'module' => 'shoporder',
                                'access' => 'shoporder_index',
                                'url' => '/shoporder/shoporder/index',
                            ),
                            'shear' => array(
                                'label' => '询单跟踪',
                                'icon' => 'fa-file-o',
                                'module' => 'shoporder',
                                'access' => 'shear_index',
                                'url' => '/shoporder/shear/index',
                            ),
                            'ordertrack' => array(
                                'label' => '订单跟踪',
                                'icon' => 'fa-file-o',
                                'module' => 'shoporder',
                                'access' => 'ordertrack_index',
                                'url' => '/shoporder/ordertrack/index',
                            ),
                            'ordererror' => array(
                                'label' => '订单错误列表',
                                'icon' => 'fa-file-o',
                                'module' => 'shoporder',
                                'access' => 'ordererror_index',
                                'url' => '/shoporder/ordererror/index',
                            ),
                            'inquiryrecode' => array(
                                'label' => '询单推送记录',
                                'icon' => 'fa-file-o',
                                'module' => 'shoporder',
                                'access' => 'shear_recode',
                                'url' => '/shoporder/inquiry/index'
                            )
                        ),
                    ),
                    //产品
                    'product' => array(
                        'label' => '产品管理',
                        'icon' => 'fa-calendar',
                        'module' => 'product',
                        'access' => 'product',
                        'items' => array(
                            'list' => array(
                                'label' => '产品列表',
                                'icon' => 'fa-file-o',
                                'module' => 'product',
                                'access' => 'product_index',
                                'url' => '/product/product/index',
                            ),
                            'examine' => array(
                                'label' => '产品审核',
                                'icon' => 'fa-file-o',
                                'module' => 'product',
                                'access' => 'product_examine',
                                'url' => '/product/product/examine',
                            ),
                            'surplus' => array(
                                'label' => '余材列表',
                                'icon' => 'fa-file-o',
                                'module' => 'product',
                                'access' => 'surplus_index',
                                'url' => '/product/surplus/index',
                            ),
                            'surpluscategorymanage' => array(
                                'label' => '余材类别管理',
                                'icon' => 'fa-file-o',
                                'module' => 'product',
                                'access' => 'surpluscategorymanage_index',
                                'url' => '/product/surplus/management',
                            ),
                     /*       'surpluscategory' => array(
                                'label' => '余材类别',
                                'icon' => 'fa-file-o',
                                'module' => 'product',
                                'access' => 'surpluscategory_index',
                                'url' => '/product/surplus/category',
                            ),
                            'surplusdata' => array(
                                'label' => '余材数据',
                                'icon' => 'fa-file-o',
                                'module' => 'product',
                                'access' => 'surplusdata_index',
                                'url' => '/product/surplus/data',
                            ),*/
                          /*  'surplusexcel' => array(
                                'label' => '生成余材模板',
                                'icon' => 'fa-file-o',
                                'module' => 'product',
                                'access' => 'surplusexcel_index',
                                'url' => '/product/surplus/excel',
                            ),*/
                            /*'type' => array(
                                'label' => '产品分类',
                                'icon' => 'fa-file-o',
                                'module' => 'product',
                                'access' => 'type',
                                'url' => '/product/type/index',
                            ),*/
                        ),
                    ),
                    //加工能力
                    'ability' => array(
                        'label' => '能力管理',
                        'icon' => 'fa-calendar',
                        'module' => 'ability',
                        'access' => 'ability',
                        'items' => array(
                            'list' => array(
                                'label' => '能力列表',
                                'icon' => 'fa-file-o',
                                'module' => 'ability',
                                'access' => 'ability_index',
                                'url' => '/ability/ability/index',
                            ),
                            'type' => array(
                                'label' => '能力审核',
                                'icon' => 'fa-file-o',
                                'module' => 'ability',
                                'access' => 'abilityauth_index',
                                'url' => '/ability/abilityauth/index',
                            ),

                            'check' => array(
                                'label' => '检测能力审核',
                                'icon' => 'fa-file-o',
                                'module' => 'ability',
                                'access' => 'checkabilityauth_index',
                                'url' => '/ability/checkabilityauth/index',
                            ),
                            'addedability' => array(
                                'label' => '补充能力',
                                'icon' => 'fa-file-o',
                                'url' => '/process/processline/index?is_menu=1',
                                'module' => 'process',
                                'access' => 'processline_index',
                            ),
                        ),
                    ),
                    //日志管理
                    'auditinglog' => array(
                        'label' => '日志管理',
                        'icon' => 'fa-calendar',
                        'module' => 'auditinglog',
                        'access' => 'auditinglog',
                        'items' => array(
                            'auditingLogCompany' => array(
                                'label' => '企业审核日志',
                                'icon' => 'fa-file-o',
                                'url' => '/auditinglog/auditingloglist/companyLog',
                                'module' => 'auditinglog',
                                'access' => 'list_company',
                            ),
                            'auditingLogProduct' => array(
                                'label' => '产品审核日志',
                                'icon' => 'fa-file-o',
                                'url' => '/auditinglog/auditingloglist/productlog',
                                'module' => 'auditinglog',
                                'access' => 'list_product1',
                            ),
                            'auditinglog' => array(
                                'label' => '能力审核日志',
                                'icon' => 'fa-file-o',
                                'url' => '/auditinglog/auditingloglist/abilityLog',
                                'module' => 'auditinglog',
                                'access' => 'list_index',
                            ),
                            'checkauditinglog' => array(
                                'label' => '检测能力审核日志',
                                'icon' => 'fa-file-o',
                                'url' => '/auditinglog/auditingloglist/checkAbilityLog',
                                'module' => 'auditinglog',
                                'access' => 'list_index',
                            ),
                        ),
                    ),
                    'blocks' => array(
                        'label' => '广告管理',
                        'icon' => 'fa-calendar',
                        'module' => 'blocks',
                        'access' => 'blocks',
                        'items' => array(
                            'index' => array(
                                'label' => '广告',
                                'icon' => 'fa-file-o',
                                'module' => 'blocks',
                                'access' => 'blocks',
                                'url' => '/advert/advert/index',


                            ),
                            'index1' => array(
                                'label' => '区块列表（作废）',
                                'icon' => 'fa-file-o',
                                'module' => 'blocks',
                                'access' => 'blocks',
                                'url' => '/blocks/blocks/index',


                            ),

                            'group' => array(
                                'label' => '区块组（作废）',
                                'icon' => 'fa-file-o',
                                'module' => 'blocks',
                                'access' => 'blocksgroup',
                                'url' => '/blocks/blocksgroup/index',
                            ),
                        ),
                    ),

                    'material' => array(
                        'label' => '模具钢',
                        'icon' => 'fa-file-o',
                        'module' => 'material',
                        'access' => 'material',
                        'items' => array(
                            'index1' => array(
                                'label' => '模具钢类别',
                                'icon' => 'fa-file-o',
                                'module' => 'material',
                                'access' => 'materialnew_index',
                                'url' => '/material/materialnew/index'
                            ),
                            'data1' => array(
                                'label' => '模具钢数据',
                                'icon' => 'fa-file-o',
                                'module' => 'material',
                                'access' => 'datanew_index',
                                'url' => '/material/datanew/index'
                            ),
                            'tolerance' => array(
                                'label' => '模具钢公差',
                                'icon' => 'fa-file-o',
                                'module' => 'material',
                                'access' => 'tolerance_index',
                                'url' => '/material/tolerance/index'
                            ),
                            'price' => array(
                                'label' => '模具钢定价模型查询',
                                'icon' => 'fa-file-o',
                                'module' => 'material',
                                'access' => 'price_index',
                                'url' => '/material/price/index'
                            ),
                            'excel' => array(
                                'label' => '生成定价模型模板',
                                'icon' => 'fa-file-o',
                                'module' => 'material',
                                'access' => 'excel_index',
                                'url' => '/material/excel/index'
                            ),
//                            'excel_product' => array(
//                                'label' => '生成模具钢产品模板',
//                                'icon' => 'fa-file-o',
//                                'module' => 'material',
//                                'access' => 'excel_index_product',
//                                'url' => '/material/excel/index_product'
//                            ),
                        ),
                    ),

                    'rules' => array(
                        'label' => '规则管理',
                        'icon' => 'fa-calendar',
                        'module' => 'node',
                        'access' => 'node',
                        'items' => array(
                            'node' => array(
                                'label' => '文章管理',
                                'icon' => 'fa-file-o',
                                'module' => 'node',
                                'access' => 'node_index',
                                'url' => '/node/node/index',
                            ),
                            'nodeclassification' => array(
                                'label' => '文章分类',
                                'icon' => 'fa-file-o',
                                'module' => 'node',
                                'access' => 'nodeclassification_index',
                                'url' => '/node/nodeclassification/index',
                            ),
                            'notice' => array(
                                'label' => '公告管理',
                                'icon' => 'fa-file-o',
                                'module' => 'node',
                                'access' => 'notice_index',
                                'url' => '/node/notice/index',
                            ),
                            'noticecat' => array(
                                'label' => '公告分类',
                                'icon' => 'fa-file-o',
                                'module' => 'node',
                                'access' => 'noticecat_index',
                                'url' => '/node/noticecat/index',
                            ),
                        ),
                    ),

//                    'surplus' => array(
//                        'label' => '余材管理',
//                        'icon' => 'fa-calendar',
//                        'module' => 'surplus',
//                        'access' => 'surplus',
//                        'items' => array(
//                            'index' => array(
//                                'label' => '余材列表',
//                                'icon' => 'fa-file-o',
//                                'module' => 'surplus',
//                                'access' => 'surplus_index',
//                                'url' => '/surplus/surplus/index',
//                            ),
//                            'auth' => array(
//                                'label' => '余材审核',
//                                'icon' => 'fa-file-o',
//                                'module' => 'surplus',
//                                'access' => 'surplusauth_index',
//                                'url' => '/surplus/surplusauth/index',
//                            ),
//                            'sort' => array(
//                                'label' => '余材分类',
//                                'icon' => 'fa-file-o',
//                                'module' => 'surplus',
//                                'access' => 'surplussort_index',
//                                'url' => '/surplus/surplussort/index',
//                            ),
//                            'sortarr' => array(
//                                'label' => '余材组分类',
//                                'icon' => 'fa-file-o',
//                                'module' => 'surplus',
//                                'access' => 'surplussortarr_index',
//                                'url' => '/surplus/surplussortarr/index',
//                            ),
//                            'sortattribute' => array(
//                                'label' => '余材属性分类',
//                                'icon' => 'fa-file-o',
//                                'module' => 'surplus',
//                                'access' => 'surplussortattribute_index',
//                                'url' => '/surplus/surplussortattribute/index',
//                            ),
//                        ),
//                        //123
//                    ),

                    'process' => array(
                        'label' => '钢材加工',
                        'icon' => 'fa-calendar',
                        'module' => 'process',
                        'access' => 'process',
                        'items' => array(
                            'processordersettle' => array(
                                'label' => '结算跟踪',
                                'icon' => 'fa-file-o',
                                'url' => '/process/processordersettle/index',
                                'module' => 'process',
                                'access' => 'processordersettle_index',
                            ),
                            'processdissent' => array(
                                'label' => '异议跟踪',
                                'icon' => 'fa-file-o',
                                'url' => '/process/processdissent/index',
                                'module' => 'process',
                                'access' => 'processdissent_index',
                            ),
                            'maillist' => array(
                                'label' => '企业通讯录',
                                'icon' => 'fa-file-o',
                                'url' => '/process/maillist/index',
                                'module' => 'process',
                                'access' => 'maillist_index',
                            ),
                            'processability' => array(
                                'label' => '产线能力',
                                'icon' => 'fa-file-o',
                                'module' => 'process',
                                'access' => 'processline_index',
                                'url' => '/process/processline/index'
                            ),
                            /*'dfinquiry' => array(
                                'label' => '代发询价单',
                                'icon' => 'fa-file-o',
                                'module' => 'process',
                                'access' => 'line',
                                'url' => '/dfinquiry/inquiry/index'
                            ),*/
                            'inquiryrecode' => array(
                                'label' => '商机库记录',
                                'icon' => 'fa-file-o',
                                'module' => 'process',
                                'access' => 'inquiry_index',
                                'url' => '/inquiryrecode/inquiry/index'
                            ),
                        ),
                    ),
                    'statistics' => array(
                        'label' => '报表管理',
                        'icon' => 'fa-calendar',
                        'module' => 'statistics',
                        'access' => 'statistics',
                        'items' => array(
//                            'statistics' => array(
//                                'label' => '运营日报',
//                                'icon' => 'fa-file-o',
//                                'url' => '/statistics/index',
//                                'module' => 'statistics',
//                                'access' => 'index_index',
//                            ),
                            'statistics_week' => array(
                                'label' => '运营周报',
                                'icon' => 'fa-file-o',
                                'url' => '/statistics/indexWeek/index_week',
                                'module' => 'statistics',
                                'access' => 'indexweek_index',
                            ),
                            'statistics_month' => array(
                                'label' => '运营月报',
                                'icon' => 'fa-file-o',
                                'url' => '/statistics/indexMonth/index',
                                'module' => 'statistics',
                                'access' => 'indexmonth_index',
                            ),
                            'webrequest' => array(
                                'label' => '外部跳转',
                                'icon' => 'fa-file-o',
                                'url' => '/statistics/WebRequest/index',
                                'module' => 'statistics',
                                'access' => 'webrequest_index',
                            ),
                            'reportdownload' => array(
                                'label' => '报表下载',
                                'icon' => 'fa-file-o',
                                'url' => '/statistics/ReportDownload/index',
                                'module' => 'statistics',
                                'access' => 'report_download',
                            ),
                            'calendar' => array(
                                'label' => '节假日维护',
                                'icon' => 'fa-file-o',
                                'url' => '/statistics/calendar/index',
                                'module' => 'statistics',
                                'access' => 'calendar_index',
                            )
                        ),
                    ),

                    // 积分管理
                    'integral' => array(
                        'label' => '积分管理',
                        'icon' => 'fa-calendar',
                        'module' => 'integral',
                        'access' => 'integral',
                        'items' => array(
                            //规则
                            'rule' => array(
                                'label' => '规则列表',
                                'icon' => 'fa-file-o',
                                'module' => 'integral',
                                'access' => 'integral_index',
                                'url' => '/integral/integral/index',
                            ),
                            //积分履历
                            'record' => array(
                                'label' => '积分履历',
                                'icon' => 'fa-file-o',
                                'module' => 'integral',
                                'access' => 'integralrecord_index',
                                'url' => '/integral/integralrecord/index',
                            ),
                            //积分事件
                            'event' => array(
                                'label' => '积分事件',
                                'icon' => 'fa-file-o',
                                'module' => 'integral',
                                'access' => 'event_index',
                                'url' => '/integral/event/index',
                            ),
                            //积分修改
                            /*'edit' => array(
                                  'label' => '积分修改',
                                  'icon' => 'fa-file-o',
                                  'url' => '/integral/integraledit/index',
                             ),*/
                        ),
                    ),
                    //运营管理end
                    //系统管理
                    'settings' => array(
                        'label' => '系统配置',
                        'icon' => 'fa-pencil-square-o',
                        'module' => 'settings',
                        'access' => 'settings',
                        'items' => array(
                            'website' => array(
                                'label' => '网站配置',
                                'icon' => '',
                                'module' => 'website',
                                'access' => 'site_index',
                                'url' => '/website/site',
                            ),
//                            'stopip' => array(
//                                'label' => 'IP锁定',
//                                'icon' => '',
//                                'module' => 'stopip',
//                                'access' => 'stopip_index',
//                                'url' => '/stopip/stop',
//                            ),
//
//                            'provincecontrol' => array(
//                                'label' => '省份管理',
//                                'icon' => '',
//                                'module' => 'provincecontrol',
//                                'access' => 'province_index',
//                                'url' => '/provincecontrol/province/index',
//                            ),
                            'webconfig' => array(
                                'label' => '系统环境配置',
                                'icon' => '',
                                'module' => 'website',
                                'access' => 'env_index',
                                'url' => '/webconfig/webconfig/index',
                            ),
                            'admin' => array(
                                'label' => '账号列表',
                                'icon' => '',
                                'module' => 'website',
                                'access' => 'admin_index',
                                'url' => '/webconfig/admin/index',
                            ),
                            'groupmanage' => array(
                                'label' => '组织管理',
                                'icon' => '',
                                'module' => 'webconfig',
                                'access' => 'groupmanage_index',
                                'url' => '/webconfig/groupManage/index',
                            ),
                            'permissions' => array(
                                'label' => '权限列表',
                                'icon' => '',
                                'module' => 'webconfig',
                                'access' => 'permissions_index',
                                'url' => '/webconfig/permissionsList/index',
                            ),
                        ),
                    ),
                    'message' => array(
                        'label' => '消息管理',
                        'icon' => 'fa-picture-o',
                        'module' => 'message',
                        'access' => 'message',
                        'items' => array(
                            'bulksms' => array(
                                'label' => '短信群发',
                                'icon' => '',
                                'module' => 'message',
                                'access' => 'bulksms_index',
                                'url' => '/message/bulksms',
                            ),
                            'template' => array(
                                'label' => '消息模板',
                                'icon' => '',
                                'module' => 'message',
                                'access' => 'template_index',
                                'url' => '/message/template',
                            ),
                            'config' => array(
                                'label' => '内部推送',
                                'icon' => '',
                                'module' => 'message',
                                'access' => 'configure_index',
                                'url' => '/message/configure',
                            ),
                        ),
                    ),
                    'helper' => array(
                        'label' => '需求管理',
                        'icon' => 'fa-picture-o',
                        'module' => 'helper',
                        'access' => 'helper',
                        'items' => array(
                            'kefu' => array(
                                'label' => '客服需求列表',
                                'icon' => '',
                                'module' => 'helper',
                                'access' => 'need_kefu',
                                'url' => '/helper/need/kefu',
                            ),
                            'yunying' => array(
                                'label' => '运营需求列表',
                                'icon' => '',
                                'module' => 'helper',
                                'access' => 'need_yunying',
                                'url' => '/helper/need/yunying',
                            ),
                            'dfinquiry' => array(
                                'label' => '代发草稿管理',
                                'icon' => 'fa-file-o',
                                'module' => 'helper',
                                'access' => 'inquiry_index',
                                'url' => '/helper/inquiry/index'
                            )
                        ),
                    ),
                    //需求小助手end
                    //会员管理
                    'user' => array(
                        'label' => '会员管理',
                        'icon' => 'fa-file-o',
                        'module' => 'user',
                        'access' => 'user',
                        'items' => array(
                            'index' => array(
                                'label' => '会员列表',
                                'icon' => 'fa-file-o',
                                'module' => 'user',
                                'access' => 'user_index',
                                'url' => '/user/user/index'
                            ),
                            'auth' => array(
                                'label' => '变更审核',
                                'icon' => 'fa-file-o',
                                'module' => 'user',
                                'access' => 'user_index',
                                'url' => '/user/userchangeauth/index'
                            ),
                            /*'examine' => array(
                                'label' => '会员审核',
                                'icon' => 'fa-file-o',
                                'url' => '/user/examine/index'
                            ),*/
                            /* 'upload' => array(
                                 'label' => '会员导入',
                                 'icon' => 'fa-file-o',
                                 'module' => 'memberimport',
                                 'access' => 'memberimport',
                                 'url' => '/memberimport/memberimport/index'
                             ),*/
                        ),
                    ),
                    //会员管理end
                    //投诉管理
                    'complaint' => array(
                        'label' => '投诉管理',
                        'icon' => 'fa-file-o',
                        'module' => 'user',
                        'access' => 'complaint',
                        'items' => array(
                            'pool' => array(
                                'label' => '投诉池',
                                'icon' => 'fa-file-o',
                                'module' => 'user',
                                'access' => 'complaintpool_index',
                                'url' => '/user/complaintpool/index'
                            ),
                            'index' => array(
                                'label' => '投诉列表',
                                'icon' => 'fa-file-o',
                                'module' => 'user',
                                'access' => 'complaint_index',
                                'url' => '/user/complaint/index'
                            ),
                        ),
                    ),
                    //投诉管理end
                    //服务中心
//                    'service' => array(
//                        'label' => '服务中心',
//                        'icon' => 'fa-file-o',
//                        'module' => 'service',
//                        'access' => 'service',
//                        'items' => array(
//                            'index' => array(
//                                'label' => '问题列表',
//                                'icon' => 'fa-file-o',
//                                'module' => 'service',
//                                'access' => 'question_index',
//                                'url' => '/service/question/index'
//                            ),
//
//                        ),
//                    ),
                    'processHouseKeeper' => array(
                        'label' => '加工管家',
                        'icon' => 'fa-inbox',
                        'module' => 'housekeeper',
                        'access' => 'housekeeper',
                        'items' => array(
                            'housekeeper_order' => array(
                                'label' => '服务单管理',
                                'icon' => 'fa-vine',
                                'module' => 'housekeeper',
                                'access' => 'housekeeper_order',
                                'items'=>array(
                                    'transportService'=>array(
                                        'label' => '运输服务商管理',
                                        'icon' => 'fa-file-o',
                                        'module' => 'housekeeper',
                                        'access' => 'housekeeper_transportService_index',
                                        'url' => '/zProcessHouseKeeper/transportService/index'
                                    ),
                                    'documentaryService'=>array(
                                        'label' => '跟单服务商管理',
                                        'icon' => 'fa-file-o',
                                        'module' => 'housekeeper',
                                        'access' => 'housekeeper_documentaryService_index',
                                        'url' => '/zProcessHouseKeeper/documentaryService/index'
                                    ),
                                    'order'=>array(
                                        'label' => '加工管家服务单',
                                        'icon' => 'fa-file-o',
                                        'module' => 'housekeeper',
                                        'access' => 'housekeeper_order_index',
                                        'url' => '/zProcessHouseKeeper/order/index'
                                    ),
                                    'uniformSettleCustomer'=>array(
                                        'label' => '统结客户管理',
                                        'icon' => 'fa-file-o',
                                        'module' => 'housekeeper',
                                        'access' => 'housekeeper_uniformSettleCustomer_index',
                                        'url' => '/zProcessHouseKeeper/uniformSettleCustomer/index'
                                    ),
                                    'category'=>array(
                                        'label' => '加工管家品种',
                                        'icon' => 'fa-file-o',
                                        'module' => 'housekeeper',
                                        'access' => 'housekeeper_category_index',
                                        'url' => '/zProcessHouseKeeper/category/index'
                                    ),
                                    'categoryContrast'=>array(
                                        'label' => '加工管家品种对照',
                                        'icon' => 'fa-file-o',
                                        'module' => 'housekeeper',
                                        'access' => 'housekeeper_category_categoryContrast',
                                        'url' => '/zProcessHouseKeeper/category/categoryContrast'
                                    ),
                                ),
                            ),
                            'transportService' => array(
                                'label' => '运输服务管理',
                                'icon' => 'fa-file-archive-o',
                                'module' => 'housekeeper',
                                'access' => 'housekeeper_transportService',
                                'items'=>array(
                                    'transportOrder'=>array(
                                        'label' => '运输服务订单查询',
                                        'icon' => 'fa-file-o',
                                        'module' => 'housekeeper',
                                        'access' => 'housekeeper_transportOrder_index',
                                        'url' => '/zProcessHouseKeeper/transportOrder/index'
                                    ),
                                    'transportPrice'=>array(
                                        'label' => '价目表管理(运输)',
                                        'icon' => 'fa-file-o',
                                        'module' => 'housekeeper',
                                        'access' => 'housekeeper_transportPrice_index',
                                        'url' => '/zProcessHouseKeeper/transportPrice/index'
                                    ),
                                    'transportStatus'=>array(
                                        'label' => '运输状态设置',
                                        'icon' => 'fa-file-o',
                                        'module' => 'housekeeper',
                                        'access' => 'housekeeper_transportStatus_index',
                                        'url' => '/zProcessHouseKeeper/transportStatus/index'
                                    )
                                ),
                            ),
                            'documentaryService' => array(
                                'label' => '跟单服务管理',
                                'icon' => 'fa-steam-square',
                                'module' => 'housekeeper',
                                'access' => 'housekeeper_documentaryService',
                                'items'=>array(
                                    'documentaryOrder'=>array(
                                        'label' => '跟单服务单查询',
                                        'icon' => 'fa-file-o',
                                        'module' => 'housekeeper',
                                        'access' => 'housekeeper_documentaryOrder_index',
                                        'url' => '/zProcessHouseKeeper/documentaryOrder/index'
                                    ),
                                    'processFactoryService'=>array(
                                        'label' => '加工厂服务管理',
                                        'icon' => 'fa-file-o',
                                        'module' => 'housekeeper',
                                        'access' => 'housekeeper_processFactoryService_index',
                                        'url' => '/zProcessHouseKeeper/processFactoryService/index'
                                    ),
                                    'appUser'=>array(
                                        'label' => 'app使用人员管理',
                                        'icon' => 'fa-file-o',
                                        'module' => 'housekeeper',
                                        'access' => 'housekeeper_appUser_index',
                                        'url' => '/zProcessHouseKeeper/appUser/index'
                                    ),
                                    'appUserFactory'=>array(
                                        'label' => '加工厂跟单员管理',
                                        'icon' => 'fa-file-o',
                                        'module' => 'housekeeper',
                                        'access' => 'housekeeper_appUserFactory_index',
                                        'url' => '/zProcessHouseKeeper/appUserFactory/index'
                                    ),
                                    'documentaryPrice'=>array(
                                        'label' => '价目表管理(跟单)',
                                        'icon' => 'fa-file-o',
                                        'module' => 'housekeeper',
                                        'access' => 'housekeeper_documentaryPrice_index',
                                        'url' => '/zProcessHouseKeeper/documentaryPrice/index'
                                    ),
                                    'traceStatus'=>array(
                                        'label' => '跟单服务状态设置',
                                        'icon' => 'fa-file-o',
                                        'module' => 'housekeeper',
                                        'access' => 'housekeeper_traceStatus_index',
                                        'url' => '/zProcessHouseKeeper/traceStatus/index'
                                    )
                                ),
                            ),
                            'recycling' => array(
                                'label' => '废料回收管理',
                                'icon' => 'fa-recycle',
                                'module' => 'housekeeper',
                                'access' => 'housekeeper_recycling',
                                'items'=>array(
                                    'recyclingOrder'=>array(
                                        'label' => '废料回收单查询',
                                        'icon' => 'fa-file-o',
                                        'module' => 'housekeeper',
                                        'access' => 'housekeeper_recyclingOrder_index',
                                        'url' => '/zProcessHouseKeeper/recyclingOrder/index'
                                    ),
                                    'recyclingPrice'=>array(
                                        'label' => '价目表管理(废料)',
                                        'icon' => 'fa-file-o',
                                        'module' => 'housekeeper',
                                        'access' => 'housekeeper_recyclingPrice_index',
                                        'url' => '/zProcessHouseKeeper/recyclingPrice/index'
                                    )
                                ),
                            ),
                        ),
                    ),
                ),
            ),
        );
    }
}