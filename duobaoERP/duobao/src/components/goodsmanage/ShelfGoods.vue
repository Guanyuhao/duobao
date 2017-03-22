<template>
	<div class="sellgoods ">		
		<div class="row">
			<div class="col-lg-12">
                    <div class="panel panel-default">
                        <!--<div class="panel-heading">
                            Kitchen Sink
                        </div>-->
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>商品ID</th>
                                            <th>图片</th>
                                            <th>商品名称</th>
                                            <th>商品总人次</th>
                                            <th>商品价格</th>
                                            <th>操作</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td><img src="http://oeq597wy9.bkt.clouddn.com/duobao1479290707" style="width: 50px;height: 50px;"></td>
                                            <td>Apple iPhone 7 128G 玫瑰金</td>
                                            <td>6088</td>
                                            <td>1.00</td>
                                            <td>
                                            	<button class="btn btn-default"><span class="glyphicon glyphicon-pencil">下架</span></button>                                        	
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td><img src="http://oeq597wy9.bkt.clouddn.com/duobao1479290707" style="width: 50px;height: 50px;"></td>
                                            <td>Apple iPhone 7 128G 玫瑰金</td>
                                            <td>6088</td>
                                            <td>1.00</td>

                                            <td>
                                            	<button class="btn btn-default"><span class="glyphicon glyphicon-pencil">下架</span></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td><img src="http://oeq597wy9.bkt.clouddn.com/duobao1479290707" style="width: 50px;height: 50px;"></td>
                                            <td>Apple iPhone 7 128G 玫瑰金</td>
                                            <td>6088</td>
                                            <td>1.00</td>
                                            <td>
                                            	<button class="btn btn-default"><span class="glyphicon glyphicon-pencil">下架</span></button>
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
				
			}
		}
	}
</script>

<style>
	
	.table-pagination{
		text-align: center;
		position: relative;
	}
	.table-pagination-left{
		position: absolute;
		left: 15px;
		top: 30px;
	}
	
</style>