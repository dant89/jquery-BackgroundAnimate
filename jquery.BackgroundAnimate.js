/*
* BackgroundAnimate.js v0.1.1
* http://uk.linkedin.com/in/danrthorpe/
*
* Copyright 2014, Dan Thorpe
* This content is released under the MIT license
* http://en.wikipedia.org/wiki/MIT_License
*/

(function($){
	
	$.fn.backgroundScroll = function(options){
		
		var settings = $.extend({
			
			speed:		100,	//Animation speed, lower faster, higher slower
			direction:	"ne",	//Default animation direction (compass face)
			timeout:	300000	//Animation stops after 5 minutes
				
		}, options);	
		
		var backWidth,
			backHeight,
			x = 0,
			y = 0,
			thisImgUrl = this.css('background-image').match(/^url\("?(.+?)"?\)$/),
			thisImg,
			thisContainer = this;
		
		function resetBackground(){
			
			x=0;
			y=0;
			
			return;	
		}
			
		if (thisImgUrl[1]) {
			
			thisImgUrl = thisImgUrl[1];
			thisImg = new Image();
		
			$(thisImg).load(function() {
				backWidth = thisImg.width;
				backHeight = thisImg.height;
			});
		
			thisImg.src = thisImgUrl;
		}

		var refreshIntervalId = setInterval(function() {

			if(settings.timeout)
				setTimeout(function() { clearInterval(refreshIntervalId); }, settings.timeout);

			switch(settings.direction){
				case "n":
					y--;
					break;
				case "ne":
					x++;
					y--;
					break;
				case "e":
					x++;
					break;
				case "se":
					x++;
					y++;
					break;
				case "s":
					y++;
					break;
				case "sw":
					x--;
					y++;
					break;
				case "w":
					x--;
					break;
				case "nw":
					x--;
					y--;
					break;
			}

			$(thisContainer).css("backgroundPosition", x + "px " + y + "px");

			if((y % backHeight === 0) && (x % backWidth === 0))
				resetBackground();

		}, settings.speed);
	};		
}(jQuery));