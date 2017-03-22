<template>
	
	
	<div class="profitcount">
	
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
                                            <th>今日净收入</th>
                                            <th>今日净支出</th>
                                            <th>全部净收入</th>
                                            <th>全部净支出</th>                                
                                        </tr>
                                    </thead>
                                    <tbody id="profitcount-table">
                                        <tr>                                           
                                            <td>1536.0</td>
                                            <td>29.0</td>
                                            <td>28905.03</td>
                                            <td>62568.97</td>
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
	
	
	.profitcount .heading-inline{
		
		position: relative;
		
	}
	.profitcount .heading-inline .input-group{
		float: left;
		margin: 0 5px;
		width: 200px;
	}
	.profitcount .heading-inline .dropdown{
		float: left;
		margin:0 10px;
	}
	#profitcount-table td{
		line-height: 50px;
	}
</style>