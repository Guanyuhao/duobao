<template>
	
	
	<div class="pushman">
	
		<div class="row">
			<div class="col-lg-12">
				
                    <div class="panel panel-default">
                        <div class="panel-heading">
  
                            <button class="btn btn-default"><span class="glyphicon glyphicon-pencil">添加推送内容</span></button>								
								
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>标题</th>
                                            <th>内容</th>
                                            <th>期号</th>
                                            <th>URL</th>
                                            <th>类型</th>
                                            <th>操作</th>
                                        </tr>
                                    </thead>
                                    <tbody id="pushman-table">
                                        <tr>
                                            <td>首冲送大礼|2</td>
                                            <td>亲爱的旺彩用户，感谢您一直陪伴在身边！平安夜，大乐透夺宝真情回馈，全场无限制充值送现金！快去充值夺好礼！</td>
                                            <td>0</td>
                                            <td>http://59.110.20.209/erp/pro/getActivy?itemId=6</td>
                                            <td>网页</td>
                                            <td>
                                            	<button class="btn btn-default">查看</button>                                                                                                                     
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
	
	
	.pushman .heading-inline{
		
		position: relative;
		
	}
	.pushman .heading-inline .input-group{
		float: left;
		margin: 0 5px;
		width: 200px;
	}
	.pushman .heading-inline .dropdown{
		float: left;
		margin:0 10px;
	}
	#pushman-table tr td{
		line-height: 50px;
	}
</style>