<template>
	
	
	<div class="usercount">
	
		<div class="row">
			<div class="col-lg-12">
				
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <span>用户统计</span>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>总共用户数</th>
                                            <th>今日新增</th>
                                            <th>昨日新增</th>
                                            <th>前日新增</th>
                                            <th>一周新增(不含今天)</th>
                                            <th>一月新增(不含今天)</th>                          
                                        </tr>
                                    </thead>
                                    <tbody id="usercount-table">
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
	
	
	.usercount .heading-inline{
		
		position: relative;
		
	}
	.usercount .heading-inline .input-group{
		float: left;
		margin: 0 5px;
		width: 200px;
	}
	.usercount .heading-inline .dropdown{
		float: left;
		margin:0 10px;
	}
	#usercount-table td{
		line-height: 16px;
	}
</style>