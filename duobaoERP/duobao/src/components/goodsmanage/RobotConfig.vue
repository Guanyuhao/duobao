<template>
	
	
	<div class="robotconfig">
	
		<div class="row">
			<div class="col-lg-12">
				
                    <div class="panel panel-default">
                        <div class="panel-heading">
  
								<div class="heading-inline clear">								
									<div class="input-group">
									  <span class="input-group-addon" >商品id,多个逗号隔开</span>
									  <input type="text" class="form-control" id="goodsname" style="width: 150px;">									  
									</div>								
									<button class="btn btn-default" >开启</button>
									<button class="btn btn-default" >添加机器人下单配置</button>
								</div>
								
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>时间段如10点-14点</th>
                                            <th>随机几分钟下单范围</th>
                                            <th>随机下单数量范围</th>
                                            <th>商品id</th>
                                            <th>操作</th>
                                        </tr>
                                    </thead>
                                    <tbody id="robot-table">
                                        <tr>
                                            <td>14点-18点</td>
                                            <td>1分钟-3分钟</td>
                                            <td>3人次-50人次</td>
                                            <td>1</td>
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
		mounted:function(){
			
		}
	}
</script>

<style>
	
	
	.robotconfig .heading-inline{
		
		position: relative;
		
	}
	.robotconfig .heading-inline .input-group{
		float: left;
		margin: 0 5px;
		width: 200px;
	}
	.robotconfig .heading-inline .dropdown{
		float: left;
		margin:0 10px;
	}
	#robot-table tr td{
		line-height: 50px;
	}
</style>