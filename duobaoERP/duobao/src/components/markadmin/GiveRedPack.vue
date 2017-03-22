<template>
	
	
	<div class="giveredpack">
	
		<div class="row">
			<div class="col-lg-12">
				
                    <div class="panel panel-default">
                        <div class="panel-heading">
  
                            <button class="btn btn-default"><span class="glyphicon glyphicon-pencil">赠送红包</span></button>								
								
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>用户ID</th>
                                            <th>红包个数</th>
                                            <th>操作</th>
                                        </tr>
                                    </thead>
                                    <tbody id="giveredpack-table">
                                        <tr>
                                            <td>6541651</td>
                                            <td>2</td>>
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
	
	
	.giveredpack .heading-inline{
		
		position: relative;
		
	}
	.giveredpack .heading-inline .input-group{
		float: left;
		margin: 0 5px;
		width: 200px;
	}
	.giveredpack .heading-inline .dropdown{
		float: left;
		margin:0 10px;
	}
	#giveredpack-table tr td{
		line-height: 50px;
	}
</style>