
function showPic(whichpic){

	var source = whichpic.getAttribute("href");
	if (!source) return false;
	var placeholder = document.getElementById("placeholder");
	if (!placeholder) return false;
	placeholder.setAttribute("src", source)

	var description = document.getElementById("description");
	if (description){
		var text = whichpic.getAttribute("title");
		if (!text)  text="";
		description.firstChild.nodeValue=text;
	}

	return true;
}


function prepareLinks(){
	if (!document.getElementById) return false;
	var gallery = document.getElementById("image-gallery");
	if (!gallery) return false;

	var links = gallery.getElementsByTagName("a");
	for (var i = 0; i<links.length; i++){
		links[i].onclick=function(){
			if(showPic(this)){
				// 如果图片切换成功，拦截链接跳转的默认行为
				return false;
			}else{return true;}
		}
	}
}

window.onload=prepareLinks;