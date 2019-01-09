var draggable;
var offset;// = getOffset(document.getElementById('content'));

// Event Listeners tying functionality to user events

//When pressing the mouse button, grabs the shape
function drawmousemove(event) {
	//var draggable = document.getElementById("draggable");
	draggable.style.left = event.pageX - offset.left - 35+ 'px';
	draggable.style.top = event.pageY - offset.top - 35+ 'px';
}

//When pressing the mouse button again, releases the shape
function endmousemove(e) {
	e.preventDefault();
	//var draggable = document.getElementById("draggable");
	draggable.removeEventListener("mousemove", drawmousemove, false);
}

function getOffset(obj) {
	var offsetLeft = 0;
	var offsetTop = 0;
	do {
		if (!isNaN(obj.offsetLeft)) {
			offsetLeft += obj.offsetLeft;
		}
		if (!isNaN(obj.offsetTop)) {
			offsetTop += obj.offsetTop;
		}
	} while(obj = obj.offsetParent);
	return {left: offsetLeft, top:offsetTop};
}

function initDemo1()
{

draggable = document.getElementById("draggable");
offset = getOffset(document.getElementById('content'));
	draggable.addEventListener("touchmove", function(event) {
		var touch = event.targetTouches[0];

		//Place element where the finger is
	draggable.style.left = touch.pageX + 'px';
	draggable.style.top = touch.pageY + 'px';
	event.preventDefault();
	}, false);

	draggable.addEventListener("mousedown", function() {
		draggable.addEventListener("mousemove", drawmousemove, false);
	}, false);

	draggable.addEventListener("mouseup", endmousemove, false);
}

document.addEventListener("DOMContentLoaded", function() {
	initDemo1();
});
