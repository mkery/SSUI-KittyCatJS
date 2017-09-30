"use strict";

var groundY = -80;
var stepX = 5;
var stepY = 10;

document.addEventListener("keyup", function(ev){
	if (ev.keyCode === 32) //space key
	{
      jump();
    }
});

function jump(up = true, ease = 5)
{
	var kat = document.getElementById('katnis');
	var top = parseInt(kat.style.top) || groundY;
	
	if(top > -180 && up) {
		goUp();
		goForward();
		setTimeout(function() {jump(true, ease/0.9);}, ease);
	}
	else if(top <= groundY) {
		goDown();
		goForward();
		setTimeout(function() {jump(false, ease/1.5);}, ease);
	}
	
}

function goForward()
{
	if(canGoForward()) {
		var kat = document.getElementById('katnis');
		var left = parseInt(kat.style.left) || 0;
		kat.style.left = left + stepX + "px";	
	}
}

function goBack()
{
	//TODO
}

function goUp()
{
	var kat = document.getElementById('katnis');
	var top = parseInt(kat.style.top) || groundY;
	kat.style.top = top - stepY + "px";
}

function goDown()
{
	var kat = document.getElementById('katnis');
	var top = parseInt(kat.style.top) || groundY;
	kat.style.top = top + stepY + "px";
}

function canGoForward()
{
	var kat = document.getElementById('katnis');
	var right = (parseInt(kat.style.left) || 0) + parseInt(kat.width);
	return right + stepX < window.innerWidth;
}

function canGoBack()
{
	//TODO
}