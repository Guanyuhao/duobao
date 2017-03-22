<template>
	
	
	<div class="robotwinlist">
	
		<div class="row">
			<div class="col-lg-12">
				
                    <div class="panel panel-default">
                        <div class="panel-heading">
  
								<div class="heading-inline clear">								
									<div class="input-group">
									  <span class="input-group-addon" >商品名称</span>
									  <input type="text" class="form-control" id="goodsname" style="width: 150px;">
									  
									</div>
									<div class="input-group">
									  <span class="input-group-addon" >期号</span>
									  <input type="text" class="form-control" id="issue" style="width: 150px;">								  
									</div>
                                    <div class="input-group">
									  <span class="input-group-addon" >用户ID</span>
									  <input type="text" class="form-control" id="issue" style="width: 150px;">								  
									</div>
									<div class="dropdown">
									  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
									   	<span id="statu">{{statu}}</span>
									    <span class="caret"></span>
									  </button>
									  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
									    <li><a href="javascript:;">状态</a></li>
									    <li><a href="javascript:;">未发货</a></li>
									    <li><a href="javascript:;">已发货</a></li>
									    <li><a href="javascript:;">确认收货</a></li>
									    <li><a href="javascript:;">待采购</a></li>                                        								    								    
									  </ul>
									</div>
									<button class="btn btn-default" >搜索</button>
								</div>
								
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>图片</th>
                                            <th>商品名称</th>
                                            <th>商品期号</th>
                                            <th>用户ID</th>
                                            <th>用户名称</th>
                                            <th>中奖时间</th>
                                            <th>购买人次</th>
                                            <th>绑定的地址</th>
                                            <th>邮编-电话</th>
                                            <th>操作</th>
                                        </tr>
                                    </thead>
                                    <tbody id="robotwinlist-table">
                                        <tr>
                                            <td><img src="http://oeq597wy9.bkt.clouddn.com/duobao1483170996" style="width:50px;height:50px;" /></td>
                                            <td>全国通用移动/联通/电信30元 手机话费充值卡</td>
                                            <td>67436</td>
                                            <td>115055</td>
                                            <td>奋斗~阿华7308e9</td>
                                            <td>5</td>
                                            <td>2017-02-20 09:37:28</td>
                                            <td>山西-晋中市-昔阳县- 乐平镇西南沟村-毛兴华</td>
                                            <td>18635437781</td>
                                            <td>
                                            	<span>是否选发货地址</span>                                       	
                                         
                                            	<button class="btn btn-default"><span class="glyphicon glyphicon-pencil">发货</span></button>
                                            	<button class="btn btn-default"><span class="glyphicon glyphicon-pencil">虚拟发货</span></button>
                                            	<button class="btn btn-default"><span class="glyphicon glyphicon-pencil">马甲用户发帖</span></button>                                                                     	                                                                      	
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                
                                <div class="table-pagination">
									
									<nav aria-label="Page navigation">
										<div class="table-pagination-left">
										当前第 1 - 20条　共计 153条
										</div>
									  <ul class="pagination">
									  	<li><a href="#">首页</a></li>
									    <li>
									      <a href="#" aria-label="Previous">
									        <span aria-hidden="true">&laquo;</span>
									      </a>
									    </li>
									    <li><a href="#">1</a></li>
									    <li><a href="#">2</a></li>
									    <li><a href="#">3</a></li>
									    <li><a href="#">4</a></li>
									    <li><a href="#">5</a></li>
									    <li>
									      <a href="#" aria-label="Next">
									        <span aria-hidden="true">&raquo;</span>
									      </a>
									    </li>
									    <li><a href="#">尾页</a></li>
									  </ul>
									</nav>
									
								</div>
                                
                            </div>
                            <!-- /.table-responsive -->
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
			</div>
	</div>
</template>

<script>
	module.exports = {
		data:function(){
			return{
				statu:"未确认收获地址"
			}
		},
		methods:{
			changestatu:function(that){
				//预留更改逻辑
			}
		}
	}
</script>

<style>
	
	
	.robotwinlist .heading-inline{
		
		position: relative;
		
	}
	.robotwinlist .heading-inline .input-group{
		float: left;
		margin: 0 5px;
		width: 200px;
	}
	.robotwinlist .heading-inline .dropdown{
		float: left;
		margin:0 10px;
	}
	#robotwinlist-table tr td{
		line-height: 50px;
	}
</style>