# jquery-BackgroundAnimate

### What does this plugin do?

The purpose of this plugin is to allow you to immediately animate any background image. It's really simple, all you have to do is give your selected element a background image and then decide which way you would like it to move and at what speed.

### Requires

* jQuery
* HTML web page with CSS

### Installation

1. Download the jQuery plugin file, you can choose the normal version or the .min for faster load times.
2. Ensure you have included jQuery before the plugin file
3. Select which HTML elements background you would like to animate
4. Give that element a background-image, position and set the repeat
5. Create the line of jQuery to initiate the plugin

### Usage

The following is a basic example of how you would use this plugin. There are no limits of how many elements you can animate and you can try it out on all tags. It can work well on the `body` with an image that fades at the edges.

```
	<!doctype html>
	<html>
	<head>
	<title>BackgroundAnimate.js Demo</title>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script src="jquery.BackgroundAnimate.min.js"></script>

	<script type="text/javascript">
	$(function() {
		$("#demo-box-1").backgroundScroll({speed: "20", direction: "e", timeout: "600000"}); //Timesout after 10 minutes
	});
	</script>

	<style type="text/css">
	#demo-box-1{
		background-image:url(http://pixabay.com/static/uploads/photo/2013/06/09/19/22/landscape-123830_640.jpg); /* background-image is required to work */
		background-repeat:repeat;   /* Required */
		background-position:0 top;  /* Required */
		height:400px;
		width:600px; 
	}
	</style>
	
	</head>
	<body>

		<div id="demo-box-1"></div>

	</body>
	</html>
```

