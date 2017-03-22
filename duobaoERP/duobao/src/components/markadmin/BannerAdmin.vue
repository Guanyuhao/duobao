<template>
	
	
	<div class="banneradmin">
	
		<div class="row">
			<div class="col-lg-12">
				
                    <div class="panel panel-default">
                        <div class="panel-heading">
  
                            <button class="btn btn-default"><span class="glyphicon glyphicon-pencil">添加广告</span></button>								
								
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>图片</th>
                                            <th>名称</th>
                                            <th>链接地址</th>
                                            <th>跳到商品详情</th>
                                            <th>操作</th>
                                        </tr>
                                    </thead>
                                    <tbody id="banneradmin-table">
                                        <tr>
                                            <td><img src="http://oeq597wy9.bkt.clouddn.com/duobao1485148675" style="width:160px;height:80px;" /></td>
                                            <td>夺宝技巧|1</td>
                                            <td>http://59.110.20.209/erp/pro/getActivy?itemId=10</td>
                                            <td>5</td>
                                            <td>
                                            	<button class="btn btn-default">删除</button>                                                                     	                                                                      	
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
	
	
	.banneradmin .heading-inline{
		
		position: relative;
		
	}
	.banneradmin .heading-inline .input-group{
		float: left;
		margin: 0 5px;
		width: 200px;
	}
	.banneradmin .heading-inline .dropdown{
		float: left;
		margin:0 10px;
	}
	#banneradmin-table tr td{
		line-height: 50px;
	}
</style>