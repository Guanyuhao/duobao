<template>
	
	<div class="header">
		
		<nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                
                <a class="navbar-brand" href="/">夺宝后台管理系统</a>
            </div>
            <!-- /.navbar-header -->
            <ul class="nav navbar-top-links navbar-right">
                <!-- /.dropdown -->
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="javascript:;">
                        <i class="fa fa-user fa-fw"></i>  <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-user">
                        <li><a href="#/user/info"><i class="fa fa-user fa-fw"></i> 个人信息</a>
                        </li>
                        <li><a href="#"><i class="fa fa-gear fa-fw"></i> 设置</a>
                        </li>
                        <li class="divider"></li>
                        <li><a href="#login"><i class="fa fa-sign-out fa-fw"></i> 注销</a>
                        </li>
                    </ul>
                    <!-- /.dropdown-user -->
                </li>
                <!-- /.dropdown -->
            </ul>
            <!-- /.navbar-top-links -->

            <div class="navbar-default sidebar" role="navigation">
                <div class="sidebar-nav navbar-collapse">
                    <ul class="nav in" id="side-menu">
                        <!--商品管理-->
                        <li>
                            <a href="#"><i class="fa fa-sitemap fa-fw"></i> 商品管理<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                                <li>
                                    <a href="javascript:;">操作商品  <span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level collapse">
                                        <li>
                                            <a href="#/releasegoods">发布商品</a>
                                        </li>
                                        <li>
                                            <a href="#/sellgoods">出售商品</a>
                                        </li>
                                        <li>
                                            <a href="#/shelfgoods">
                                                下架商品
                                            </a>
                                        </li>
                                    </ul>
                                    <!-- /.nav-third-level -->
                                </li>
                                
                                <li>
                                    <a href="#/goodsclass">商品分类</a>
                                </li>
                                <li>
                                    <a href="javascript:;">期号管理  <span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level collapse">
                                        <li>
                                            <a href="#/issuefinshed">未完成</a>
                                        </li>
                                        <li>
                                            <a href="#/issueunfinshed">已完成</a>
                                        </li>
                                    </ul>
                                    <!-- /.nav-third-level -->
                                </li>
                                <li>
                                    <a href="javascript:;">机器人下单  <span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level collapse">
                                        <li>
                                            <a href="#/robotconfig">下单配置</a>
                                        </li>
                                        <li>
                                            <a href="#/appointwin">指定用户中奖</a>
                                        </li>
                                    </ul>
                                    <!-- /.nav-third-level -->
                                </li>                               
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                        
                        <!--用户管理-->
                        <li>
                            <a href="#/useradmin"><i class="fa fa-sitemap fa-fw"></i> 用户管理<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                                <li>
                                    <a href="#/useradmin">用户管理 </a>
                                    
                                </li>
                                
                                <li>
                                    <a href="#/vestuser">马甲用户 </a>
                                </li>                                                            
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                        <!--订单管理-->
                        <li>
                            <a href="javascript:;"><i class="fa fa-sitemap fa-fw"></i> 订单管理<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                                <li>
                                    <a href="javascript:;">支付订单管理  <span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level collapse">
                                        <li>
                                            <a href="#/orderpayed">已支付</a>
                                        </li>
                                        <li>
                                            <a href="#/orderpay">未支付</a>
                                        </li>
                                    </ul>
                                    <!-- /.nav-third-level -->
                                </li>
                                
                                <li>
                                    <a href="#">充值订单管理 <span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level collapse">
                                        <li>
                                            <a href="#/recharpayed">已支付</a>
                                        </li>
                                        <li>
                                            <a href="#/recharpay">未支付</a>
                                        </li>
                                    </ul>
                                    <!-- /.nav-third-level -->
                                </li>
                                 <li>
                                    <a href="#">中奖管理 <span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level collapse">
                                        <li>
                                            <a href="#/winlist">中奖列表</a>
                                        </li>
                                        <li>
                                            <a href="#/robotwinlist">机器人列表</a>
                                        </li>
                                    </ul>
                                    <!-- /.nav-third-level -->
                                </li> 
                                
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                        <!--营销管理-->
                        <li>
                            <a href="javascript:;"><i class="fa fa-sitemap fa-fw"></i> 营销管理<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                                <li>
                                    <a href="#/banneradmin">Banner管理</a>
                                </li>
                                
                                <li>
                                    <a href="#/indexalert">首页弹窗管理</a>
                                </li>
                                <li>
                                    <a href="#/aciman">活动管理</a>
                                </li> 
                                <li>
                                    <a href="#/pushman">推送管理</a>
                                </li> 
                                <li>
                                    <a href="#">充值红包管理  <span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level collapse">
                                        <li>
                                            <a href="#/cardredpack">充值红包列表</a>
                                        </li>
                                        <li>
                                            <a href="#/giveredpack">赠送红包列表</a>
                                        </li>
                                    </ul>
                                    <!-- /.nav-third-level -->
                                </li>
                                 <li>
                                    <a href="#">中奖管理  <span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level collapse">
                                        <li>
                                            <a href="#/backnowaci">返现活动</a>
                                        </li>
                                        <li>
                                            <a href="#/backnowlist">返现中奖列表</a>
                                        </li>
                                    </ul>
                                    <!-- /.nav-third-level -->
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                        
                        <!--统计管理-->
                        <li>
                            <a href="#"><i class="fa fa-sitemap fa-fw"></i> 统计管理<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                                <li>
                                    <a href="#">用户  <span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level collapse">
                                        <li>
                                            <a href="#/usercount">用户统计</a>
                                        </li>
                                        <li>
                                            <a href="#/orderuser">下单用户统计</a>
                                        </li>
                                    </ul>
                                    <!-- /.nav-third-level -->
                                </li>
                                <li>
                                    <a href="#">订单  <span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level collapse">
                                        <li>
                                            <a href="#/buycount">购买订单统计</a>
                                        </li>
                                        <li>
                                            <a href="#/cardcount">充值订单统计</a>
                                        </li>
                                    </ul>
                                    <!-- /.nav-third-level -->
                                </li>
                                <li>
                                    <a href="#">图表  <span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level collapse">
                                        <li>
                                            <a href="#/figurecount">订单统计</a>
                                        </li>
                                        <li>
                                            <a href="#/goodscount">商品统计</a>
                                        </li>
                                    </ul>
                                    <!-- /.nav-third-level -->
                                </li>
                                <li>
                                    <a href="#/profitcount">利润统计 </a>
                                </li> 
                                <li>
                                    <a href="#/yesterdaycount">用户昨日消费统计 </a>
                                </li> 
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                        
                        <!--系统管理-->
                        <li>
                            <a href="#"><i class="fa fa-sitemap fa-fw"></i> 账号管理<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                                <li>
                                    <a href="#/adminlist">管理员 </a>                                  
                                </li>
                                
                                <li>
                                    <a href="#/feedbacklist">用户建议 </a>
                                </li>                                                            
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                        
                        
                    </ul>
                </div>
                <!-- /.sidebar-collapse -->
            </div>
            <!-- /.navbar-static-side -->
        </nav>

        <!--右边下容器-->
		<div id="page-wrapper" style="min-height: 395px;">
			
			<router-view class="child"></router-view>
			
			
		</div>
	</div>
	
</template>

<script>
    export default {
        data(){
            return{}
        }
    }
</script>
