<template>
	
	
	<div class="orderpay">
	
		<div class="row">
			<div class="col-lg-12">
				
                    <div class="panel panel-default">
                        <div class="panel-heading">
  							未支付
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
                                            <th>订单ID</th>
                                            <th>用户ID</th>
                                            <th>商品期号</th>
                                            <td>商品名称</td>
                                            <th>商品价格</th>
                                            <th>图片</th>
                                            <th>用户</th>
                                            <th>总需人次</th>
                                            <th>购买人次</th>
                                            <th>剩余人次</th>
                                            <th>购买地址</th>
                                            <th>购买时间</th>
                                            <th>是否中奖</th>
                                            <th>操作</th>
                                        </tr>
                                    </thead>
                                    <tbody id="orderpay-table">
                                        <tr>
                                            <td>cbBuy14875660844606bfc27q</td>
                                            <td>12646</td>
                                            <td>87557</td>
                                            <td>Apple MacBook Air 13.3英寸笔记本电脑</td>
                                            <td>1.00</td>                                 
                                            <td><img src="http://nos.netease.com/mail-userthumb/23d53138500a1e23e26c70b82ec7f579_90.jpeg" style="width:50px;height:50px;" /></td>
                                            <td>jinliu</td>
                                            <td>7388</td>
                                            <td>1</td>
                                            <td>5553</td>
                                            <td>                                       	
                                         		浙江省杭州市                                        	
                                            </td>
                                            <td>2017-02-20 12:48:29</td>
                                            <td>无</td>
                                            <td><button class="btn btn-default">指定中奖</button></td>
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
	
	
	.orderpay .heading-inline{
		
		position: relative;
		
	}
	.orderpay .heading-inline .input-group{
		float: left;
		margin: 0 5px;
		width: 200px;
	}
	.orderpay .heading-inline .dropdown{
		float: left;
		margin:0 10px;
	}
	#orderpay-table td{
		line-height: 50px;
	}
</style>