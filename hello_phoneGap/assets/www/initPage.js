//var page1= $("#page1");
//$("#page1_content").height(page1.height()-210);
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

var storage = getLocalStorage();

var telephone = storage.getItem("tel");
var userName =storage.getItem("name");
var role = storage.getItem("role");

$("#setUpShop").tap(function(){
	$.mobile.changePage($("#businessRigister"));
});

$("#userLogin").tap(function(){
	var name = $("#costomerName").attr("value");
	var tel = $("#costomerTel").attr("value");
	if(!name){
		alert("��������ϵ��");
		return;
	}
	if(!tel){
		alert("�������ֻ�����");
		return;
	}
	if(!isMobil(tel)){
		alert("��������ȷ���ֻ�����");
		return;
	}
	storage.setItem("tel",tel);
	storage.setItem("name",name);
	$.mobile.changePage($("#pageSelfInfo"));
});


