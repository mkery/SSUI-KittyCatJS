"use strict";

var groundY = -80;
var stepX = 5;
var stepY = 10;
var movingForward = false;
var movingBack = false;

document.addEventListener("keydown", function(ev){
	if (ev.keyCode === 32) //space key
	{
      jump();
	}
	if (ev.keyCode === 39) //right arrow key
	{
		movingForward = true;
		holdDownForward();
	}
	if (ev.keyCode === 37) //left arrow key
	{
		movingBack = true;
		holdDownBack();
	}
});

document.addEventListener("keyup", function(ev){
	if (ev.keyCode === 39) //right arrow key
	{
		movingForward = false;
	}
	if (ev.keyCode === 37) //left arrow key
	{
		movingBack = false;
	}
});


function holdDownBack()
{
	goBack();
	if(movingBack){
		setTimeout(holdDownBack, 20);
	}
}

function holdDownForward()
{
	goForward();
	if(movingForward){
		setTimeout(holdDownForward, 20);
	}
}

function jump(up = true, ease = 5)
{
	var kat = document.getElementById('katnis');
	var top = parseInt(kat.style.top) || groundY;

	if(top > -180 && up) {
		goUp();
		if(movingForward){
			goForward();
		}
		else if(movingBack){
			goBack();
		}
		setTimeout(function() {jump(true, ease/0.9);}, ease);
	}
	else if(top <= groundY) {
		goDown();
		if(movingForward){
			goForward();
		}
		else if(movingBack){
			goBack();
		}
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
	if(canGoBack()) {
		var kat = document.getElementById('katnis');
		var left = parseInt(kat.style.left) || 0;
		kat.style.left = left - stepX + "px";
	}
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
	var kat = document.getElementById('katnis');
	var left = parseInt(kat.style.left) || 0;
	return left - stepX > 0;
}
