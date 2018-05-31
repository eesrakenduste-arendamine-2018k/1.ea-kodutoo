<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>Kodutöö 1</title>
		<script src="jquery.js"></script>
		<script>
			$(document).ready(function(){
				setInterval(function(){
					$('#time').load('kt1.php')
				}, 1000);
			});
			// Code taken from https://www.youtube.com/watch?v=fxlRsyo-PZQ
			</script>
			<style>
				@font-face
				{
					font-family: clock;
					src : url(digital-7.ttf);
				}
				#time
				{
				width: 100%;
				margin: 0 auto;
				font-family: clock;
				font-size: 200px;
				}
			</style>
	</head>
</html>