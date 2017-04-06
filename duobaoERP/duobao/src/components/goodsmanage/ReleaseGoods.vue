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
				<!--<VueUEditor style="width: 100%;" @ready = 'editorReady' ></VueUEditor>-->
				<editor id="editor_id" height="500px" width="700px" :content="editorText"
					:afterChange="afterChange()"
					pluginsPath="/static/kindeditor/plugins/"
					:loadStyleMode="false"
					@on-content-change="onContentChange"></editor>
			</div>
	        
	    </form>
	</div>
	
</template>

<script>

	
  
	
	export default {
		data(){
			return{
				editorText: '请使用多图模式上传图片'
			}
		},
		mounted () {
			
		},
		methods: {
			// editorReady (editorInstance) {
            //     editorInstance.setContent('Hello world!<br>你可以在这里初始化编辑器的初始内容。');
            //     editorInstance.addListener('contentChange', () => {
            //         console.log('编辑器内容发生了变化：', editorInstance.getContent());
            //     });
            // }
			onContentChange (val) {
				this.editorText = val
			},
			afterChange () {
			}
		}
	}
</script>

<style>
	.releasegoods{
		padding: 10px 10px;
	}
</style>