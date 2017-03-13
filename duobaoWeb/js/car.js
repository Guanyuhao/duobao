//这里我做了必须参数userId 跟 token的处理
function addcar(opt){
		if(localStorage.user){
			//确保有用户 才能对其进行处理
			var User = JSON.parse(localStorage.user);
			var UserInfo = User.userInfo;
			var config = {
				goodsSaleId:'',
				userId:UserInfo.userId,
				token:UserInfo.caibaoToken,
				callback:function(res){
					
				}
			}
			for( var i in opt ){
				config[i] = opt[i]
			}
			var Url ='?goodsSaleId='+config.goodsSaleId+'&userId='+config.userId+'&token='+config.token;
			jsajax({
				method:'post',
				url:HostPort+'/car/save'+Url,
				success:function(res){
					config.callback(res)
				}
			})
			
		}else{
			mui.confirm('您好，请你先登录',' ',['确认','取消'],function(e){
			 	//console.log(e.index)
			 	if(e.index == 0){
					mui.openWindow({
						url: 'login.html',
						id:'login.html'
					})
			 	}
			 },'div');	
		}
	}
//删除
function delcar(opt){
	if(localStorage.user){
		var User = JSON.parse(localStorage.user);
		var UserInfo = User.userInfo;
		var config = {
			carIds:'',
			userId:UserInfo.userId,
			token:UserInfo.caibaoToken,
			callback:function(res){
				
			}
		}
		for( var i in opt ){
			config[i] = opt[i]
		}
		var Url ='?carIds='+config.carIds+'&userId='+config.userId+'&token='+config.token;
		jsajax({
			method:'post',
			url:HostPort+'/car/delBatch'+Url,
			success:function(res){
				
				config.callback(res)
			}
		})
	}
}
function numupdate(opt){
	if(localStorage.user){
		var User = JSON.parse(localStorage.user);
		var UserInfo = User.userInfo;
		var config = {
			num:'',
			itemId:'',
			userId:UserInfo.userId,
			token:UserInfo.caibaoToken,
			callback:function(res){
				
			}
		}
		for( var i in opt ){
			config[i] = opt[i]
		}
		var Url ='?num='+config.num+'&itemId='+config.itemId+'&userId='+config.userId+'&token='+config.token;
		jsajax({
			method:'post',
			url:HostPort+'/car/num'+Url,
			success:function(res){
				config.callback(res)
			}
		})
	}
}
// 结算
function carjiesuan(opt){
	if(localStorage.user){
		var User = JSON.parse(localStorage.user);
		var UserInfo = User.userInfo;
		var config = {
			userId:UserInfo.userId,
			token:UserInfo.caibaoToken,
			callback:function(res){
				
			}
		}
		for( var i in opt ){
			config[i] = opt[i]
		}
		var Url ='?userId='+config.userId+'&token='+config.token;
		jsajax({
			method:'post',
			url:HostPort+'/order/save'+Url,
			success:function(res){
				config.callback(res)
			}
		})
	}
}
