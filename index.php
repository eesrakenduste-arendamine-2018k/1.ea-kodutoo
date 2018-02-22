<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Clock</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
    </head>
    <body>
        <div class="main" style="width: 100%">
            <div class="name">
                <span id="yourname"></span>
            </div>
            <div class="weekday">
                <span id="day"></span>
            </div>
            <div class="date">
                <span id="date"></span>
            </div>
            <div class="displayclock">
                <span id="hour"></span>
                <span id="minute"></span>
                <span id="second"></span>
            </div>
        </div>
        <div class="buttonColor">
            <div class="color">
                <button onclick="hexColor()">
                Change color to Time/Hex value
                </button>
                <button onclick="blackColor()">
                Change color to Black
                </button>
                <button onclick="randomColor()">
                Change color to random color
                </button>
            </div>
        </div>
        <div class="buttonSize">
            <div class="HalfFullTime">
                <button onclick="halfHours()">
                AM/PM
                </button>
                <button onclick="fullHours()">
                24HRS
                </button>
            </div>
        </div>
        <div class="footer">
        <p>Made by: Kurmo Rootsi</p>
            <p><a href="https://github.com/kurmorootsi/1.ea-kodutoo">Link to github</a></p>
        </div>
        <script src="app.js"></script>
    </body>
</html>