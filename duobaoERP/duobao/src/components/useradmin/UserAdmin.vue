<template>
	
	
	<div class="useradmin">
	
		<div class="row">
			<div class="col-lg-12">
				
                    <div class="panel panel-default">
                        <div class="panel-heading">
  
								<div class="heading-inline clear">								
									<div class="input-group">
									  <span class="input-group-addon" >用户名称</span>
									  <input type="text" class="form-control" id="goodsname" style="width: 150px;">
									  
									</div>
									<div class="input-group">
									  <span class="input-group-addon" >用户ID</span>
									  <input type="text" class="form-control" id="issue" style="width: 150px;">								  
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
                                            <th>头像</th>
                                            <th>用户ID</th>
                                            <th>用户名</th>
                                            <th>注册时间</th>
                                            <th>用户消费金额</th>
                                            <th>余额</th>
                                            <th>操作</th>
                                        </tr>
                                    </thead>
                                    <tbody id="useradmin-table">
                                        <tr>
                                            <td><img src="http://p.zhangkongshidai.cn/avatar/170217/e01264729c53e14b722e97e009bd3d5693387979.jpg" style="width:50px;height:50px;" /></td>
                                            <td>133802</td>
                                            <td>今生无悔f1ee68</td>
                                            <td>2017-02-17 16:40:59</td>
                                            <td></td>
											<td>0</td>
                                            <td>                                       	
                                         		<button class="btn btn-default">用户订单数据</button> 
                                            	<button class="btn btn-default">用户参与商品</button>                                        	
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
	
	
	.useradmin .heading-inline{
		
		position: relative;
		
	}
	.useradmin .heading-inline .input-group{
		float: left;
		margin: 0 5px;
		width: 200px;
	}
	.useradmin .heading-inline .dropdown{
		float: left;
		margin:0 10px;
	}
	#useradmin-table td{
		line-height: 50px;
	}
</style>