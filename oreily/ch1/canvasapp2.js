window.addEventListener("load", eventWindowLoaded, false);
function eventWindowLoaded () {
	canvasApp();
}
function canvasSupport () {
	return Modernizr.canvas;
}
function canvasApp() {
	if(!canvasSupport()) {
		return;
	}
	var guesses = 0,
			message = "Guess The LEtter from a (lower) to z (higher)",
			letters = ["a","b","c","d","e","f","g","h","i","j","k",
									"l","m","n","o","p","q","r","u","s","t","u",
									"v","w","x","y","z"],
			today = new Date(),
			letterToGuess = "", 
			higherOrLower = "", 
			lettersGuessed,
			gameOver = false;
	var theCanvas = document.getElementById("canvasOne");
	var context = theCanvas.getContext("2d");
	
	function initGame() {
		var letterIndex = Math.floor(Math.random() * letters.length);
		letterToGuess = letters[letterIndex];
		window.addEventListener("keydown",eventKeyPressed, true);
		
	}
	
	function keydown(e) {
		if (!gameOver) {
			var letterPressed = String.fromCharCode(e.keyCode);
			letterPressed = letterPressed.toLowerCase();
			guesses++;
			lettersGuessed.push(letterPressed);
			if (letterPressed == letterToGuess) {
				gameOver = true;
			} else {
				//shouldn't these be scoped?
				letterIndex = letters.indexOf(letterToGuess);
				guessIndex = letters.indexOf(letterPressed);
			}
			
			if(guessIndex < 0) {
				higherOrLower = "That is not a letter";
			} else if (guessIndex > letterIndex) {
				higherOrLower = "Lower";			
			} else {
				higherOrLower = "Higher";
			}
			drawScreen();
		}	
	}

	function drawScreen() {
		//background
		context.fillStyle = "#ffffaa";
		context.fillRect(0, 0, 500, 300);
		//text
		context.fillStyle = "#000000";
		context.font = "20px Sans-Serif"
		context.textBaseline = "top";
		context.fillText("Hello World!", 195, 80);
		//image
		var helloWorldImage = new Image();
		helloWorldImage.onload = function () {
			context.drawImage(helloWorldImage, 155, 110);
		}
		helloWorldImage.src = "helloworld.gif";

		//box
		context.strokeStyle = "#000000";
		context.strokeRect(5, 5, 490, 290);



	}

	initGame();
}