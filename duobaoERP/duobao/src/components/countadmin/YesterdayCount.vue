<template>
	
	
	<div class="yesterdaycount">
	
		<div class="row">
			<div class="col-lg-12">
				
                    <div class="panel panel-default">
                        <div class="panel-heading">
  
								<div class="heading-inline clear">								
									
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
                                            <th>ID</th>
                                            <th>用户ID</th>
                                            <th>一天的中奖金额</th>
                                            <th>一天的充值订单数</th>
                                            <th>一天的充值订单金额数</th>
                                            <th>一天的购买订单数</th>
                                            <th>一天的购买订单金额数</th>
                                            <th>时间</th>                                         
                                        </tr>
                                    </thead>
                                    <tbody id="yesterdaycount-table">
                                        <tr>                                           
                                            <td>87557</td>
                                            <td>4565</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>                                       	
                                         		2017-02-20                                        	
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
				statu:"排序方式有待输如"
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
	
	
	.yesterdaycount .heading-inline{
		
		position: relative;
		
	}
	.yesterdaycount .heading-inline .input-group{
		float: left;
		margin: 0 5px;
		width: 200px;
	}
	.yesterdaycount .heading-inline .dropdown{
		float: left;
		margin:0 10px;
	}
	#yesterdaycount-table td{
		line-height: 50px;
	}
</style>