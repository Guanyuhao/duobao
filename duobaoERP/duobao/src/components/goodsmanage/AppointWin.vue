<template>
	
	
	<div class="appointwin">
	
		<div class="row">
			<div class="col-lg-12">
				
                    <div class="panel panel-default">
                        <!--<div class="panel-heading">
		
                        </div>-->
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>商品名称</th>
                                            <th>图片</th>
                                            <th>用户ID</th>
                                            <th>用户名</th>
                                            <th>状态</th>
                                            <th>操作</th>                                         
                                        </tr>
                                    </thead>
                                    <tbody id="appointwin-table">
                                        <tr>
                                            <td>99</td>   
                                            <td>张君雅小妹妹组合装12包 年货礼盒 零食大礼包</td>
                                            <td><img src="http://oeq597wy9.bkt.clouddn.com/duobao1482745448" style="width:50px;height:50px;" /></td>                                           
                                            <td>120993</td>
                                            <td>禾禾451a03</td>
                                            <td>未揭晓</td>
                                            <td>	                                           	
                                            	<button class="btn btn-default"><span class="glyphicon glyphicon-pencil">删除</span></button>                                        	
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
			
		}
	}
</script>

<style>
	
	
	.appointwin .heading-inline{
		
		position: relative;
		
	}
	.appointwin .heading-inline .input-group{
		float: left;
		margin: 0 5px;
		width: 200px;
	}
	.appointwin .heading-inline .dropdown{
		float: left;
		margin:0 10px;
	}
	#appointwin-table tr td{
		line-height: 50px;
	}
</style>