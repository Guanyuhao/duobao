<template>
	
	
	<div class="goodscout">
	
		<div class="row">
			<div class="col-lg-12">
				
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <span>订单统计</span>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>统计</th>
                                            <th>Apple MacBook Air 13.3英寸笔记本电脑</th>
                                            <th>Apple iPad Air 2 平板电脑 9.7英寸64G WLAN版</th>
                                            <th>Apple iPhone 7 Plus 128G 颜色随机</th>

                                        </tr>
                                    </thead>
                                    <tbody id="goodscout-table">
                                        <tr>
                                            <td class=""> 今日卖出的总价 </td>
                                            <td class=""> 853 </td>
                                            <td class=""> 159 </td>
                                            <td class=""> 149 </td>
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
	
	
	.goodscout .heading-inline{
		
		position: relative;
		
	}
	.goodscout .heading-inline .input-group{
		float: left;
		margin: 0 5px;
		width: 200px;
	}
	.goodscout .heading-inline .dropdown{
		float: left;
		margin:0 10px;
	}
	
</style>