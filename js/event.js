/*binbinzhou
20160929
兼容IE和其他浏览器的方法函数
事件绑定
事件解绑
获取事件对象event
获取事件目标event.target
阻止事件默认行为
阻止事件冒泡
*/
var EventUtil = {
	//绑定事件
	bind:function(element,type,handler){
		if(element.addEventListener){
			element.addEventListener(type,handler,false);
		} else if(element.attachEvent){
			element.attachEvent("on"+type,handler);
		} else{
			element["on"+type] = handler;
		}
	},
	//解绑事件
	unbind:function(element,type,handler){
		if(element.removeEventListener){
			element.removeEventListener(type,handler);
		} else if(element.detachEvent){
			element.detachEvent("on"+type,handler);
		} else{
			element["on"+type] = null;
		}
	},
	//获取事件对象
	getEvent:function(event){
		return event?event:window.event;
	},
	//获取事件目标
	getTarget:function(event){
		return event.target || src.Element;
	},
	//阻止默认行为
	preventDefault:function(event){
		if(event.preventDefault){
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	},
	//阻止冒泡
	stopPropagation:function(event){
		if(event.stopPropagation){
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}
	}
}