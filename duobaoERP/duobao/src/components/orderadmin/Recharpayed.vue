<template>
	
	
	<div class="recharpayed">
	
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
									  <input type="text" class="form-control" id="user" style="width: 150px;">								  
									</div>
									<div class="input-group">
									  <span class="input-group-addon" >乐透订单ID</span>
									  <input type="text" class="form-control" id="letou" style="width: 150px;">								  
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
                                            <th>订单名</th>
                                            <th>用户ID</th>
                                            <th>用户</th>
                                            <th>大乐透订单</th>
                                            <th>金额</th>
                                            <th>时间</th>
                                            <th>操作</th>
                                        </tr>
                                    </thead>
                                    <tbody id="recharpayed-table">
                                        <tr>
                                            <td>cbBuy14875660844606bfc27q</td>
                                            <td>12646</td>
                                            <td>87557</td>
                                            <td></td>
                                            <td>1.00</td>                                 
                                            <td>2017-02-20 12:48:29</td>
                                            <td><button class="btn btn-default">退款</button></td>
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
	
	
	.recharpayed .heading-inline{
		
		position: relative;
		
	}
	.recharpayed .heading-inline .input-group{
		float: left;
		margin: 0 5px;
		width: 200px;
	}
	.recharpayed .heading-inline .dropdown{
		float: left;
		margin:0 10px;
	}
	#recharpayed-table td{
		line-height: 50px;
	}
</style>