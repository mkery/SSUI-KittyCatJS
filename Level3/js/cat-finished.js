
class Cat {

	constructor(){
		this.groundY = -80;
		this.stepX = 5;
		this.stepY = 10;
		this.movingForward = false;
		this.movingBack = false;
	}


	addListeners()
	{
		document.addEventListener("keydown", (ev) =>{
			if (ev.keyCode === 32) //space key
			{
		      this.jump();
			}
			if (ev.keyCode === 39) //right arrow key
			{
				this.movingForward = true;
				this.holdDownForward();
			}
			if (ev.keyCode === 37) //left arrow key
			{
				this.movingBack = true;
				this.holdDownBack();
			}
		});

		document.addEventListener("keyup", (ev) => {
			if (ev.keyCode === 39) //right arrow key
			{
				this.movingForward = false;
			}
			if (ev.keyCode === 37) //left arrow key
			{
				this.movingBack = false;
			}
		});
	}


	holdDownBack()
	{
		this.goBack();
		var self = this;
		if(this.movingBack){
			setTimeout(self.holdDownBack.bind(self), 20);
		}
	}


	holdDownForward()
	{
		this.goForward();
		var self = this;
		if(this.movingForward){
			setTimeout(() => { self.holdDownForward(); }, 20);
		}
	}


	jump(up = true, ease = 5)
	{
		var kat = document.getElementById('katnis');
		var top = parseInt(kat.style.top) || this.groundY;
		var self = this;

		if(top > -180 && up) {
			this.goUp();
			if(this.movingForward){
				this.goForward();
			}
			else if(this.movingBack){
				this.goBack();
			}
			setTimeout(() => {self.jump(true, ease/0.9);}, ease);
		}
		else if(top <= this.groundY) {
			this.goDown();
			if(this.movingForward){
				this.goForward();
			}
			else if(this.movingBack){
				this.goBack();
			}
			setTimeout(() => {self.jump(false, ease/1.5);}, ease);
		}

	}


	goForward()
	{
		if(this.canGoForward()) {
			var kat = document.getElementById('katnis');
			var left = parseInt(kat.style.left) || 0;
			kat.style.left = left + this.stepX + "px";
		}
	}


	goBack()
	{
		if(this.canGoBack()) {
			var kat = document.getElementById('katnis');
			var left = parseInt(kat.style.left) || 0;
			kat.style.left = left - this.stepX + "px";
		}
	}


	goUp()
	{
		var kat = document.getElementById('katnis');
		var top = parseInt(kat.style.top) || this.groundY;
		kat.style.top = top - this.stepY + "px";
	}


	goDown()
	{
		var kat = document.getElementById('katnis');
		var top = parseInt(kat.style.top) || this.groundY;
		kat.style.top = top + this.stepY + "px";
	}


	canGoForward()
	{
		var kat = document.getElementById('katnis');
		var right = (parseInt(kat.style.left) || 0) + parseInt(kat.width);
		return right + this.stepX < window.innerWidth;
	}


	canGoBack()
	{
		var kat = document.getElementById('katnis');
		var left = parseInt(kat.style.left) || 0;
		return left - this.stepX > 0;
	}

}
