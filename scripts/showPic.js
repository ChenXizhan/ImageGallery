function showPic(whichpic){
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	var text = whichpic.getAttribute("title");
	var description = document.getElementById("description");
	placeholder.setAttribute("src", source)
	description.firstChild.nodeValue=text;

}


function prepareLinks(){
	var links = document.getElementsByTagName("a");
	for (var i=0;i<links.length;i++){
		if(links[i].getAttribute("class") == "popup"){
			links[i].onclick=function(){
				showPic(this);
				return false;
			}
		}

	}
}

window.onload=prepareLinks;