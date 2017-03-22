<template>
	
	
	<div class="buycount">
	
		<div class="row">
			<div class="col-lg-12">
				
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <span>购买的订单统计(16-10-27前余额购买的没有统计)</span>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>已支付订单数</th>
                                            <th>已支付订单总金额</th>
                                            <th>今日已支付订单数</th>
                                            <th>今日已支付订单总金额</th>
                                            <th>昨日已支付订单数</th>
                                            <th>昨日已支付订单总金额</th>
                                            <th>前日已支付订单数</th>
                                            <th>前日已支付订单总金额</th>
                                            <th>一周已支付订单数(不含今天)</th>
                                            <th>一周已支付订单总金额(不含今天)</th>
                                            <th>一个月已支付订单数(不含今天)</th>
                                            <th>一个月已支付订单总金额(不含今天)</th>                              
                                        </tr>
                                    </thead>
                                    <tbody id="buycount-table">
                                        <tr>                                           
                                            <td>22077 (非余额:9286)</td>
                                            <td>88782 (非余额:40114)</td>
                                            <td>169 (非余额:64)</td>
                                            <td>1465 (非余额:1105)</td>
                                            <td>203</td>
                                            <td>1265</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                        </tr>
                                    </tbody>
                                </table>
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
	
	
	.buycount .heading-inline{
		
		position: relative;
		
	}
	.buycount .heading-inline .input-group{
		float: left;
		margin: 0 5px;
		width: 200px;
	}
	.buycount .heading-inline .dropdown{
		float: left;
		margin:0 10px;
	}
	#buycount-table td{
		line-height: 16px;
	}
</style>