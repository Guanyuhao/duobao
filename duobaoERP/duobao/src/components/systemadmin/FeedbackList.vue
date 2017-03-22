<template>
	
	
	<div class="feedbacklist">
	
		<div class="row">
			<div class="col-lg-12">
				
                    <div class="panel panel-default">
                        <!--<div class="panel-heading">
  
								<button class="btn btn-default"><span class="glyphicon glyphicon-pencil">添加</button>
								
                        </div>-->
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>用户ID</th>
                                            <th>反馈</th>
                                            <th>注册时间</th>
                                            <th>手机号</th>
                                            <th>操作</th>
                                        </tr>
                                    </thead>
                                    <tbody id="feedbacklist-table">
                                        <tr>
                                            <td>87557</td>
                                            <td>jinliu</td>
                                            <td>2016-11-21 17:27:00</td>
                                            <td>12451324561</td>
                                            <td>                                       	
                                         		<button class="btn btn-default">标记完成</button>                                       	
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
	
	
	.feedbacklist .heading-inline{
		
		position: relative;
		
	}
	.feedbacklist .heading-inline .input-group{
		float: left;
		margin: 0 5px;
		width: 200px;
	}
	.feedbacklist .heading-inline .dropdown{
		float: left;
		margin:0 10px;
	}
	#feedbacklist-table td{
		line-height: 50px;
	}
</style>