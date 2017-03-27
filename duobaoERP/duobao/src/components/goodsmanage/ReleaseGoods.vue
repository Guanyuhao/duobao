<template>
	
	<div class="releasegoods">
		<form action="" method="post">
	        商品名称: <input type="text" value="" name="title" style="width:500px">
	        <br /><br />
	   	商品人数: <input type="text" value="" name="" style="width:500px">
	        <br /><br />
	        商品价格: <input type="text" value="" name="title" style="width:500px">
	        <br /><br />
	        商品成本: <input type="text" value="" name="title" style="width:500px">
	        <br /><br />
	        实体商品:<input type="text" value="" name="title" style="width:500px">
	        <br /><br />
			详细说明: <div style="width:100%;">
				<VueUEditor style="width: 100%;"></VueUEditor>
			</div>
	        <input type="submit" name="submit" value="提交">
	    </form>
	</div>
	
</template>

<script>

	
  
	
	export default {
		data(){
			return{
				a:'1111'
			}
		},
		mounted () {
			
		},
		method: {
			
		}
	}
</script>

<style>
	.releasegoods{
		padding: 10px 10px;
	}
</style>