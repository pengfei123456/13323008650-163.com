function addEvent(obj,sEv,fn){
	if(obj.addEventListener){
		obj.addEventListener(sEv,fn,false);
	}else{
		obj.attachEvent('on'+sEv,fn);
	}
}
function addWheel(obj,fn){
	//判断滚轮方向
	function fnWheel(ev){
		var bDir = true;//如果是true向下，否则false向上。
		if(ev.wheelDelta){
			if(ev.wheelDelta<0){
				//下
				bDir = true;
			}else{
				//上
				bDir = false;
			}
		}else{
			if(ev.detail>0){
				//下
				bDir = true;
			}else{
				//上
				bDir = false;
			}
		}
		fn&&fn(bDir);
	}
	if(window.navigator.userAgent.indexOf('Firefox')!=-1){
		addEvent(document,'DOMMouseScroll',function(ev){
			var oEvent = ev||event;
			fnWheel(oEvent);
			oEvent.preventDefault&&oEvent.preventDefault();
			return false;
		});
	}else{
		addEvent(document,'mousewheel',function(ev){
			var oEvent = ev||event;
			fnWheel(oEvent);
			oEvent.preventDefault&&oEvent.preventDefault();
			return false;
		});
	}
}