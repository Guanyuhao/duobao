<template>
	
	
	<div class="orederuser">
	
		<div class="row">
			<div class="col-lg-12">
				
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <span>用户下单统计</span>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>购买订单数总用户</th>
                                            <th>今日购买订单数总用户</th>
                                            <th>昨日购买订单数总用户</th>
                                            <th>充值订单数总用户</th>
                                            <th>今日充值订单数总用户</th>
                                            <th>昨日充值订单数总用户</th>                          
                                        </tr>
                                    </thead>
                                    <tbody id="orederuser-table">
                                        <tr>                                           
                                            <td>52985</td>
                                            <td>88782</td>
                                            <td>169</td>
                                            <td>1465</td>
                                            <td>203</td>
                                            <td>1265</td>
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
	
	
	.orederuser .heading-inline{
		
		position: relative;
		
	}
	.orederuser .heading-inline .input-group{
		float: left;
		margin: 0 5px;
		width: 200px;
	}
	.orederuser .heading-inline .dropdown{
		float: left;
		margin:0 10px;
	}
	#orederuser-table td{
		line-height: 16px;
	}
</style>