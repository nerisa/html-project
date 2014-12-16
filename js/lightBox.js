// JavaScript Document
/*window.onload = function() {
    var anchorElements = document.getElementsByTagName('a');
    for (var i in anchorElements)
        anchorElements[i].onclick=display.init;
}*/

function Lightbox(){
	this.source;
	this.parent;
	this.lightBox;
	this.anchorTag;
	this.imageBox;
	this.quitBox;
	//this.imageWrapper;
	//this.imageUl;
	//this.images;
	var that=this;
	
	this.init=function(){
		that.parent=document.getElementsByClassName("shopping-guide")[0];
		that.source=that.parent.children[0];
		that.anchorTag=document.getElementById("zoom-button");
		that.lightBox=document.getElementsByClassName("lightbox-wrapper")[0];
		that.imageBox=that.lightBox.children[1];
		//console.log(that.imageBox);
		that.quitBox=document.getElementsByClassName("lightbox-closebutton")[0];
		//console.log(that.quitBox);
		//that.anchorTag.onclick=that.show;
		that.anchorTag.onclick=(function(element){
					return function(){
						that.imageBox.setAttribute("src",element.src);	
						that.lightBox.style.display="block";
						that.quitBox.onclick=function(){
							that.lightBox.style.display="none";
						}
						console.log("disabled");
						return false;	
					}
				})(that.source);
	}
}
	
	


var display=new Lightbox();
display.init();


