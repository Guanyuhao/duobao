<template>
	
	
	<div class="backnowaci">
	
		<div class="row">
			<div class="col-lg-12">
				
                    <div class="panel panel-default">
                        <div class="panel-heading">
  
                            <button class="btn btn-default"><span class="glyphicon glyphicon-pencil">添加</span></button>								
								
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>商品ID</th>
                                            <th>商品名称</th>
                                            <th>最高返现</th>
                                            <th>购买上限</th>
                                            <th>操作</th>
                                        </tr>
                                    </thead>
                                    <tbody id="backnowaci-table">
                                        <tr>
                                            <td>149</td>
                                            <td>Apple iPhone 7 32G 颜色随机</td>
                                            <td>1100</td>
                                            <td>4000</td>
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
	
	
	.backnowaci .heading-inline{
		
		position: relative;
		
	}
	.backnowaci .heading-inline .input-group{
		float: left;
		margin: 0 5px;
		width: 200px;
	}
	.backnowaci .heading-inline .dropdown{
		float: left;
		margin:0 10px;
	}
	#backnowaci-table tr td{
		line-height: 50px;
	}
</style>