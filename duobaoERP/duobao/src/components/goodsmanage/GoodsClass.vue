<template>
	
	
	<div class="goodsclass">
	
		<div class="row">
			<div class="col-lg-12">
				
                    <div class="panel panel-default">
                        <!--<div class="panel-heading">
                            	添加商品分类
                        </div>-->
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>图片</th>
                                            <th>名称</th>
                                            <th>操作</th>
                                        </tr>
                                    </thead>
                                    <tbody id="addgoodswrapper">
                                        <tr>
                                            <td><img src="http://oeq597wy9.bkt.clouddn.com/duobao1483691667" style="width:160px;height:80px;"></td>
                                            <td>Apple专区</td>
                                            <td>
                                            	<button class="btn btn-default">添加商品</button>                                        	
                                         
                                            	<button class="btn btn-default">删除商品</button>                                        	
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
				
			}
		}
	}
</script>

<style>
	
	.table-responsive tr td{
		text-align: center;		
	}
	
</style>