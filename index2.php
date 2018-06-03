<html>
	<head>
		<script type="text/javascript">
		function startTime()
		{
			let d = new Date();
			let h = d.getHours();
			let m = d.getMinutes();
			let s = d.getSeconds();
			document.getElementById("txt").innerHTML = h+" : "+m+" : "+s;
			setTimeout('startTime()',1000);
		}
		</script>
	</head>
	<body onload = "startTime">
		<h1 align="center">
			<span id = "txt">
		</h1>
	<button onclick="window.location.href='index.html' ">Analoogkellaks</button>
	</body>
</html>