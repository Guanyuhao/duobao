<template>
	
	
	<div class="aciman">
	
		<div class="row">
			<div class="col-lg-12">
				
                    <div class="panel panel-default">
                        <div class="panel-heading">
  
                            <button class="btn btn-default"><span class="glyphicon glyphicon-pencil">添加活动</span></button>								
								
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>标题</th>
                                            <th>URL</th>
                                            <th>操作</th>
                                        </tr>
                                    </thead>
                                    <tbody id="aciman-table">
                                        <tr>
                                            <td>首冲送大礼|2</td>
                                            <td>http://59.110.20.209/erp/pro/getActivy?itemId=10</td>
                                            <td>
                                            	<button class="btn btn-default">删除</button>
                                            	<button class="btn btn-default">查看</button>                                                                                                                    	                                                                      	
                                            </td>
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
	
	
	.aciman .heading-inline{
		
		position: relative;
		
	}
	.aciman .heading-inline .input-group{
		float: left;
		margin: 0 5px;
		width: 200px;
	}
	.aciman .heading-inline .dropdown{
		float: left;
		margin:0 10px;
	}
	#aciman-table tr td{
		line-height: 50px;
	}
</style>