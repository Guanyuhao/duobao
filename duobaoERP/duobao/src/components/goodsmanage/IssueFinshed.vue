<template>
	
	
	<div class="issuefinshed">
	
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
									<div class="dropdown">
									  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
									   	<span id="statu">{{statu}}</span>
									    <span class="caret"></span>
									  </button>
									  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
									    <li><a href="javascript:;">未确认收获地址</a></li>
									    <li><a href="javascript:;">未发货</a></li>
									    <li><a href="javascript:;">已发货</a></li>
									    <li><a href="javascript:;">确认收货</a></li>								    								    
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
                                            <th>商品总人数</th>
                                            <th>商品购买人数</th>
                                            <th>商品价格</th>
                                            <th>状态</th>
                                            <th>操作</th>
                                        </tr>
                                    </thead>
                                    <tbody id="issue-ed-table">
                                        <tr>
                                            <td><img src="http://oeq597wy9.bkt.clouddn.com/duobao1485166686" style="width:50px;height:50px;" /></td>
                                            <td>王老吉凉茶310ml x 24罐</td>
                                            <td>64353</td>
                                            <td>99</td>
                                            <td>99</td>
                                            <td>1.00</td>
                                            <td>未选收货地址</td>
                                            <td>
                                            	<span>{{statu}}</span>                                       	
                                         
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
				statu:"状态"
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
	
	
	.issuefinshed .heading-inline{
		
		position: relative;
		
	}
	.issuefinshed .heading-inline .input-group{
		float: left;
		margin: 0 5px;
		width: 200px;
	}
	.issuefinshed .heading-inline .dropdown{
		float: left;
		margin:0 10px;
	}
	#issue-ed-table tr td{
		line-height: 50px;
	}
</style>