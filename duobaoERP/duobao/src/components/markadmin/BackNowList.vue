<template>
	
	
	<div class="backnowlist">
	
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
                                            <th>商品图片</th>
                                            <th>返现金额</th>
                                            <th>购买人数</th>
                                            <th>中奖用户</th>
                                            <th>操作</th>
                                        </tr>
                                    </thead>
                                    <tbody id="backnowlist-table">
                                        <tr>
                                            <td>151</td>
                                            <td>王老吉凉茶310ml x 24罐</td>
                                            <th><img src="http://oeq597wy9.bkt.clouddn.com/duobao1485166686" style="width: 50px;height: 50px;"/></th>
                                            <td>1</td>
                                            <td>4000</td>
                                            <td></td>
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
	
	
	.backnowlist .heading-inline{
		
		position: relative;
		
	}
	.backnowlist .heading-inline .input-group{
		float: left;
		margin: 0 5px;
		width: 200px;
	}
	.backnowlist .heading-inline .dropdown{
		float: left;
		margin:0 10px;
	}
	#backnowlist-table tr td{
		line-height: 50px;
	}
</style>