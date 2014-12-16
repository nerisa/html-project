// JavaScript Document
function getEventTarget(e) {
        e = e || window.event;
        return e.target || e.srcElement; 
}

var ul = document.getElementById('tabContainer');
 ul.onclick = function(event) {
        var target = getEventTarget(event);
        var parent = target.parentNode;
        var child = parent.getElementsByTagName("li");
		console.log(child);
        for(var i = 0; i< child.length ; ++i){
            child[i].className = "tabs-inactive";
            }
        target.className = "tabs-active";    
    };


