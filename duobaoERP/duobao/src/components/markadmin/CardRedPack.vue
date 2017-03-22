<template>
	
	
	<div class="cardredpack">
	
		<div class="row">
			<div class="col-lg-12">
				
                    <div class="panel panel-default">
                        <div class="panel-heading">
  
                            <button class="btn btn-default"><span class="glyphicon glyphicon-pencil">添加充值红包</span></button>								
								
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>充值</th>
                                            <th>赠送</th>
                                            <th>类型</th>
                                            <th>操作</th>
                                        </tr>
                                    </thead>
                                    <tbody id="cardredpack-table">
                                        <tr>
                                            <td>20</td>
                                            <td>2</td>
                                            <td>红包</td>
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
	
	
	.cardredpack .heading-inline{
		
		position: relative;
		
	}
	.cardredpack .heading-inline .input-group{
		float: left;
		margin: 0 5px;
		width: 200px;
	}
	.cardredpack .heading-inline .dropdown{
		float: left;
		margin:0 10px;
	}
	#cardredpack-table tr td{
		line-height: 50px;
	}
</style>