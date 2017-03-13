
mui('footer').on('tap','a',function(){
	var _this =  this;
	if(this.getAttribute('off')){
		
		//需要登录权限
		if(localStorage.getItem('user')){
			//还得确认一次是否被顶了
			var userInfo =  JSON.parse(localStorage.getItem('user')).userInfo;
			var Url = '?userId='+userInfo.userId+'&token='+userInfo.caibaoToken;
			jsajax({
				method:'post',
				url:HostPort+'/car/list'+Url,
				success:function(res){
					var User = JSON.parse(res);
					if(User.code == 0){
						mui.openWindow({
							url: _this.href,
							id:_this.href
						})
					}else if(User.code == 777){
						localStorage.user = '';
						mui.confirm('你在其他地方登录了',' ',['确认','取消'],function(e){
						 	if(e.index == 0){
								mui.openWindow({
									url: 'login.html',
									id:'login.html'								
								})
						 	}
						 },'div');
					}
				}
			})
			
			
			
		}else{
			//没有登录
			
		 mui.confirm('您好，请你先登录',' ',['确认','取消'],function(e){
		 	//console.log(e.index)
		 	if(e.index == 0){
					mui.openWindow({
						url: 'login.html',
						id:'login.html'
					})
		 	}
		 },'div');		
//			plus.nativeUI.confirm( "您好,请您先登录", function(e){
//				if(e.index == 0){
//						document.location.href='login.html';	
//				 	}
//			}, "提示", ["确认","取消"]);
		}
	}else{
		
		mui.openWindow({
			url: _this.href,
			id:_this.href
		})			
	}

});