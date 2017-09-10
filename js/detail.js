document.getElementsByClassName("headerDetail")[0].style.visibility = "hidden";
document.getElementsByClassName("close")[0].onclick = function() {
	document.getElementsByClassName("headerDetail")[0].style.visibility = "hidden";
	document.getElementsByClassName("inconimg")[0].style.visibility = "visible";
}
document.getElementsByClassName("inconimg")[0].onclick = function() {
	document.getElementsByClassName("headerDetail")[0].style.visibility = "visible";
	document.getElementsByClassName("inconimg")[0].style.visibility = "hidden";
}
//图标
var m = document.getElementById("inconimg");
var str = m.getContext("2d");
str.moveTo(0, 0);
str.lineTo(20, 0);
str.stroke();
str.moveTo(0, 5);
str.lineTo(20, 5);
str.stroke();
str.moveTo(0, 10);
str.lineTo(20, 10);
str.stroke();
str.moveTo(0, 15);
str.lineTo(20, 15);
str.stroke();
str.moveTo(0, 20);
str.lineTo(20, 20);
str.stroke();
//轮播图
document.getElementsByClassName("exfore2")[0].style.display = "none";
	document.getElementsByClassName("exfore1")[0].style.display = "flex";
function first(){
	document.getElementsByClassName("exfore1")[0].style.display = "flex";
	document.getElementsByClassName("exfore2")[0].style.display = "none";
}
function second(){
	document.getElementsByClassName("exfore1")[0].style.display = "none";
	document.getElementsByClassName("exfore2")[0].style.display = "flex";
}
clearInterval(timer);
var timer=setInterval(fn,3000);
var  m=0;
function fn(){
	 m++;
	if(m%2==0){
		first();
	}else{
		second();
	}
	
}

