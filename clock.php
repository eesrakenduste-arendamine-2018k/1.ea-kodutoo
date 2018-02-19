<!DOCTYPE html>


<html>

<head>

	<!--Bootstrap and  css-->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.2/css/bootstrap-select.min.css">
	<!-- Latest compiled and minified JavaScript -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.2/js/bootstrap-select.min.js"></script>
	<!-- (Optional) Latest compiled and minified JavaScript translation files -->


	<link rel="stylesheet" type="text/css" href="custom.css" />
	<!--end-->
	<title>Kella app</title>

	<!--Color Bar-->
	<nav class="navbar navbar-inverse">
		<div class="container-fluid">
			<div class="navbar-header">
				<a class="navbar-brand">Clock</a>
			</div>
			<ul class="nav navbar-nav">
				<div class="navbar-form form-inline" href="">
					<select id="colorSelect" class="selectpicker" name="Color" title="Change color" ;>
					<option value="Black">Black</option>
					<option value="White">White</option>
					<option value="Blue">Blue</option>
					<option value="Red">Red</option>
					<option value="Green">Green</option>
					<option value="Yellow">Yellow</option>
				</select>
					<select id="backgroundSelect" class="selectpicker" name="Background" title="Change Background" ;>
					<option value="Spaceman">Astronaut</option>
					<option value="Pure_black">Black</option>
					<option value="Pure_white"> White</option>
					<option value="Football">Football</option>
					<option value="Strange">Strange</option>
				</select>
					<select id="fontSelect" class="selectpicker" name="Location" title="Change Font" ;>
					<option value="Bold">Bold</option>
					<option value="Normal">Normal</option>
				</select>
					<button id="modify" class="btn btn-danger">Change</button>
					
				</div>
			</ul>
		</div>
	</nav>
	
	
	<!--end-->

	<!--Javascript for clock and changes-->
	<script type="text/javascript">
		document.getElementById("modify").addEventListener("click", function() {
			var newFont = document.getElementById("fontSelect").value;
			//var newFontSize = document.getELementById("fontSizeSelect");
			var newColor = document.getElementById("colorSelect").value;
			var newBackground = document.getElementById("backgroundSelect").value;
			
			
			

			//Font
			if (newFont === "Bold") {
				console.log("Yes")
				document.getElementById("clock").style.fontWeight = "bold";
				document.getElementById("Name").style.fontWeight = "bold";
			}
			if (newFont === "Normal") {
				console.log("Normal")
				document.getElementById("clock").style.fontWeight = "normal";
				document.getElementById("Name").style.fontWeight = "normal";
			}
			
			
	
			//Color
			if (newColor === "Black") {
				console.log("Black")
				document.getElementById("clock").style.color = "black";
				document.getElementById("Name").style.color = "black";
			}
			if (newColor === "White") {
				console.log("White")
				document.getElementById("clock").style.color = "white";
				document.getElementById("Name").style.color = "white";
			}
			if (newColor === "Blue") {
				console.log("Blue")
				document.getElementById("clock").style.color = "blue";
				document.getElementById("Name").style.color = "blue";
			}
			if (newColor === "Red") {
				console.log("Red")
				document.getElementById("clock").style.color = "red";
				document.getElementById("Name").style.color = "red";
			}
			if (newColor === "Green") {
				console.log("Green")
				document.getElementById("clock").style.color = "green";
				document.getElementById("Name").style.color = "green";
			}
			if (newColor === "Yellow") {
				console.log("Yellow")
				document.getElementById("clock").style.color = "yellow";
				document.getElementById("Name").style.color = "yellow";
			}
			
			

			//Background
			if (newBackground === "Spaceman") {
				console.log("Spaceman")
				document.getElementById("body").style.background = "url(http://more-sky.com/data/out/6/IMG_105581.gif)";
			}
			if (newBackground === "Pure_black") {
				console.log("Pure_black")
				document.getElementById("body").style.background = "black";
			}
			if (newBackground === "Pure_white") {
				console.log("Pure_white")
				document.getElementById("body").style.background = "white";
			}
			if (newBackground === "Football") {
				console.log("Football")
				document.getElementById("body").style.background = "url(http://3.bp.blogspot.com/-HqxHH9ONwVk/Uw3q-hKXGaI/AAAAAAAAF14/arzxMVzlMV4/s1600/real-madrid-logo-sport-hd-wallpaper-1920x1200-4606.jpg)";
			}
			if (newBackground === "Strange") {
				console.log("Strange")
				document.getElementById("body").style.background = "url(https://media1.tenor.com/images/06a51219a313e73ed70785ac4b9d8024/tenor.gif?itemid=6116952)";
			}
			
		});

		
		
		
	
		
		
		//The clock
		function updateClock() {
			days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
			var currentTime = new Date();
			var currentHours = currentTime.getHours();
			var currentMinutes = currentTime.getMinutes();
			var currentSeconds = currentTime.getSeconds();
			var currentDay = currentTime.getDay();
			var today = new Date();
			var dd = currentTime.getDate();
			var mm = currentTime.getMonth() + 1; //January is 0!
			var yyyy = currentTime.getFullYear();

			if (dd < 10) {
				dd = '0' + dd
			}

			if (mm < 10) {
				mm = '0' + mm
			}

			today = dd + '/' + mm + '/' + yyyy;

			currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
			currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
			currentHours = (currentHours < 10 ? "0" : "") + currentHours;
			currentHours = (currentHours == 0) ? 12 : currentHours;

			var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + days[currentDay] + "," + today;
			document.getElementById("clock").firstChild.nodeValue = currentTimeString;
		}
		
		
	</script>
	<!--end of javascript-->
</head>
<!--END OF HEAD-->

<!--BODY-->
<!--Clock Loader and name-->

<body id="body" onload="updateClock(); setInterval('updateClock()', 1000 )">

	<div id="clock" class="Date">
	</div>

	<div id="Name" class="Name">
		<p>Joosep Penjam</p>
	</div>
	<!--end-->
	<!-- body end-->
</body>

</html>