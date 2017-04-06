//0充值 1 支付宝 银联   2 混合购买
//银联
function paycbBuy(opt){
	
	if(localStorage.user){
		var User = JSON.parse(localStorage.user);
		var UserInfo = User.userInfo;
		var config = {
			userId:UserInfo.userId,
			channel:'payeco',
			amount:'',
			type:1,//是否混合支付
			token:UserInfo.caibaoToken,
			qita:'h5',
			callback:function(res){
				
			}
		}
		for( var i in opt ){
			config[i] = opt[i]
		}
		var Url = '?userId='+config.userId+'&token='+config.token+'&channel='+config.channel+'&amount='+config.amount+'&qita='+config.qita+'&type='+config.type;
		jsajax({
			method:'post',
			url:HostPort+'/pay/cbBuy'+Url,
			success:function(res){
				config.callback(res)
			}
		})
	}else{
		 mui.confirm('您好，请你先登录',' ',['确认','取消'],function(e){
		 	//console.log(e.index)
		 	if(e.index == 0){
					mui.openWindow({
						url: '../login.html'
					})
		 	}
		 },'div');
	}
	
}
//成功回掉java
function javacb(opt){
	
	if(localStorage.user){
		var User = JSON.parse(localStorage.user);
		var UserInfo = User.userInfo;
		
		var config = {
			userId:UserInfo.userId,
			orderId:'',
			token:UserInfo.caibaoToken,
			callback:function(res){
				
			}
		}
		for( var i in opt ){
			config[i] = opt[i]
		}
		var Url = '?userId='+config.userId+'&token='+config.token+'&orderId='+config.orderId;
		jsajax({
			method:'post',
			url:HostPort+'/pay/cbStatus'+Url,
			success:function(res){
				config.callback(res)
			}
		})
	}
	
}

function upuserInfor(opt){		
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
		var Url = '?userId='+config.userId+'&token='+config.token;
	jsajax({
		method:'post',
		url:HostPort+'/user/info'+Url,
			success:function(res){
				config.callback(res)
			}
		})
	}
}
//威福通
	//微信支付
function wtfcbpay(opt){
	if(localStorage.user){
		var User = JSON.parse(localStorage.user);
		var UserInfo = User.userInfo;
		var config = {
			userId:UserInfo.userId,
			channel:'',//weChatH alipayH
			amount:'',
			type:1,//是否混合支付
			token:UserInfo.caibaoToken,
			qita:'h5',
			callback:function(res){
				
			}
		}
		for( var i in opt ){
			config[i] = opt[i]
		}
		var Url = '?userId='+config.userId+'&token='+config.token+'&channel='+config.channel+'&amount='+config.amount+'&qita='+config.qita+'&type='+config.type;
		jsajax({
			method:'post',
			url:HostPort+'/pay/wft/cbBuy'+Url,
			success:function(res){
				config.callback(res)
			}
		})
	}else{
		 mui.confirm('您好，请你先登录',' ',['确认','取消'],function(e){
		 	//console.log(e.index)
		 	if(e.index == 0){
					mui.openWindow({
						url: '../login.html'
					})
		 	}
		 },'div');
	}
}
