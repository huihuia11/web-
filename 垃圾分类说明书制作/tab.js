var nav_item1=document.getElementById("nav-item1");
var nav_item2=document.getElementById("nav-item2");
var nav_item3=document.getElementById("nav-item3");
var nav_item4=document.getElementById("nav-item4");

var item1=document.getElementById("item1");
var item2=document.getElementById("item2");
var item3=document.getElementById("item3");
var item4=document.getElementById("item4");

item2.style.display="none";
item3.style.display="none";
item4.style.display="none";
nav_item1.className="active";

function hideA11(){
	item1.style.display="none";
	item2.style.display="none";
	item3.style.display="none";
	item4.style.display="none";
	
	nav_item1.className="";
	nav_item2.className="";
	nav_item3.className="";
	nav_item4.className="";
	}
	
nav_item1.onclick=function(){
	hideA11();
	item1.style.display="block";
	nav_item1.className="active";
}
nav_item2.onclick=function(){
	hideA11();
	item2.style.display="block";
	nav_item2.className="active";
}
nav_item3.onclick=function(){
	hideA11();
	item3.style.display="block";
	nav_item3.className="active";
}
nav_item4.onclick=function(){
	hideA11();
	item4.style.display="block";
	nav_item4.className="active";
}

var title=document.getElementsByTagName("h2");
var article=document.getElementsByTagName("article");

function foldA11(){
	for(var i=0; i< title.length;i++){
		article[i].getElementsByTagName("p")[0].className="hide";
		title[i].className="hide";
		}
}
foldA11();

for(var i=0;i<title.length;i++){
	title[i].onclick=function(){
		refreshCollapse(this);
	}
}
function refreshCollapse(obj){
	var targClass;
	if(obj.className==="hide"){
		targClass="";
	}else{
		targClass="hide";
	}
	foldA11();
	obj.parentNode.getElementsByTagName("p")[0].className=targClass;
	obj.className=targClass;
}