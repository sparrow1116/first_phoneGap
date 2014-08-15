//var page1= $("#page1");
//$("#page1_content").height(page1.height()-210);

//document.addEventListener('touchmove', touchHandlerDummy, false);
//function touchHandlerDummy(e)  {
//    e.preventDefault();
//    return false;
//}

var storage = null;
var telephone = null;
var userName = null;
var role = null;


function isMobil(ss){
	var re= /^(13[0-9]{9})|(15[89][0-9]{8})$/;
	if(re.test(ss)){
		return true;
	}
	return false;
	
}

function getLocalStorage(){
	if(typeof window.localStorage == "object"){
		return window.localStorage;
	}else if(typeof window.globalStorage == "object"){
		return window.globalStorage[location.host];
	}else{
		throw new Error("Local storage not available.");
	}
}

function changeUserBar(name,tel){
	$("#userBar").empty();
	var barInfo = "<label class='theUser'>"+name+"</label>";
	$("#userBar").append(barInfo);
	$("#userListview").listview("refresh");
}


$(document).on("pageinit","#moreInfo",function(){
	$("#setUpShop").on('tap',function(){$.mobile.changePage($("#businessRigister"))});
});

$(document).on("pageinit","#login",function(){
	$("#userLogin").tap(function(){
		var name = $("#costomerName").val();
		var tel = $("#costomerTel").val();
		if(!name){
			$("#alertMsg").empty();
			$("#alertMsg").text("请输入联系人");
			$.mobile.changePage($("#alert"));
			return;
		}
		if(!tel){
			$("#alertMsg").empty();
			$("#alertMsg").text("请输入手机号码");
			$.mobile.changePage($("#alert"));
			return;
		}
		if(!isMobil(tel)){
			$("#alertMsg").empty();
			$("#alertMsg").text("请输入正确的手机号码");
			$.mobile.changePage($("#alert"));
			return;
		}
		changeUserBar(name,tel);
		var tt
		for(a in storage){
			tt = storage[a];
		}
		$("#alertMsg").text(storage);
		$.mobile.changePage($("#alert"));
//		storage.setItem("tel",tel);
//		storage.setItem("name",name);
//		$.mobile.changePage($("#pageSelfInfo"));
	});
});

$(document).ready(function(){
	storage = getLocalStorage();
	telephone = storage.getItem("tel");
	userName =storage.getItem("name");
	role = storage.getItem("role");	
//	storage.removeItem(tel);
//	storage.removeItem(name);
	if(telephone && userName){
		changeUserBar(userName,telephone);
	}
});




