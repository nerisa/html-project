
function Slider(){
	this.goRight=0;
	this.goLeft=0;
	this.nextImgInterval=0;
	this.prevImgInterval=0;
	this.autoInterval=0;
	this.slider;
	this.ul;
	this.noOfImages;
	this.imgMovFlag=0;
	this.left = 0;
	this.animator = new Animator();
	var that=this;
	var goNext=1;
	var finish=1;
	var first = 0;
	var leftButton;
	var rightButton;
	this.init=function(sliderContainer){
			that.slider = sliderContainer;
			that.ul = that.slider.getElementsByTagName("ul")[0];
			that.noOfImages = that.slider.getElementsByTagName("li").length-1;
			that.displayButtons();
			that.autoInterval=setInterval(that.autoAnimation,3000);
	
		}
		
		
	this.displayButtons=function(){
		
		leftButton = document.createElement("button");
		leftButton.className="slider-button-left";
		leftButton.onclick=that.prevImg;
		that.slider.appendChild(leftButton);
	
		rightButton = document.createElement("button");
		rightButton.className="slider-button-right";
		rightButton.onclick=that.rightPressed;
		that.slider.appendChild(rightButton);	
		}	
	this.leftPressed = function(){
			clearInterval(that.autoInterval);
			that.prevImg();
		}
	this.rightPressed = function(){
			clearInterval(that.autoInterval);
			that.nextImg();
		}
		
	 this.nextImg=function(){
		
		 if(that.imgMovFlag<that.noOfImages){
			 
			  if(finish==1){
				finish = 0;
			 	that.imgMovFlag++;
			 	that.animator.animate(that.ul,{left:(-1009*that.imgMovFlag)},200,callBack);
			  }
		
		 }
		   that.sliderNav();
		
	    }
		
	this.prevImg=function(){
		
			 
		if(that.imgMovFlag>0){
			if(finish==1){
			
				 finish=0;
		  	that.imgMovFlag--;
		  	that.animator.animate(that.ul,{left:(-1009*that.imgMovFlag)},200,callBack);
			}
			
		}
		that.sliderNav();
	    }
		
	this.sliderNav = function(){
		if(that.imgMovFlag==that.noOfImages){
			 rightButton.style.background = "url(images/slider-button-right-inactive.png) 0 0 no-repeat";
			 }else{
			 rightButton.style.background = "url(images/slider-button-right-active.png) 0 0 no-repeat";
			 } 
			 
		if(that.imgMovFlag>0){
			leftButton.style.background = "url(images/slider-button-left-active.png) 0 0 no-repeat";
			 }else{
			 leftButton.style.background = "url(images/slider-button-left-inactive.png) 0 0 no-repeat";
			 } 
		}
		
	
		
		this.autoAnimation = function(){
		//console.log("inside auto ");
			
			if(goNext==1){
				if(that.imgMovFlag==that.noOfImages)
					goNext=0;
					that.nextImg();
				//console.log(that.imgMovFlag,that.noOfImages);
				
			}
			if(goNext==0){
				that.prevImg();
				if(that.imgMovFlag==0)
					goNext=1;
					
					//console.log("inside next",that.imgMovFlag,that.noOfImages);
			}
			
			
			}
			
			var callBack = function(isFin){
							finish = isFin;
							
				}

	 
	}



var sliderEl = document.getElementById("slider");
var s = new Slider();
s.init(sliderEl);


		
	