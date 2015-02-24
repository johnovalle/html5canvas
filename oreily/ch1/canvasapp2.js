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
	var letterToGuess = ""; 
	var higherOrLower = "";
	var lettersGuessed = [];
	var guesses = 0,
			message = "Guess The LEtter from a (lower) to z (higher)",
			letters = ["a","b","c","d","e","f","g","h","i","j","k",
									"l","m","n","o","p","q","r","u","s","t","u",
									"v","w","x","y","z"],
			today = new Date(),
			
			gameOver = false;
	var theCanvas = document.getElementById("canvasOne");
	var context = theCanvas.getContext("2d");
	
	function initGame() {
		
		var letterIndex = Math.floor(Math.random() * letters.length);
		letterToGuess = letters[letterIndex];
		window.addEventListener("keydown",eventKeyPressed, true);
		
		var formElement = document.getElementById('createImageData');
		formElement.addEventListener('click', createImageDataPressed, false);
		
	}
	
	function createImageDataPressed(e) {
		window.open(theCanvas.toDataURL(), "canvasImage", "left=0,top=0,width=" +
			theCanvas.width + ",height=" + theCanvas.height +",toolbar=0, resizable=0");
	}
	
	function eventKeyPressed(e) {
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
		// Background
		context.fillStyle = "#ffffaa";
		context.fillRect(0, 0, 500, 300);
		//Box
		context.strokeStyle = "#000000";
		context.strokeRect(5, 5, 490, 490);
		
		context.textBaseline = "top";
		//Date
		context.fillStyle = "#000000";
		context.font = "10px Sans-Serif";
		context.fillText (today, 150, 10);
		//message
		context.fillStyle = "#ff0000";
		context.font = "14px Sans-Serif";
		context.fillText (message, 125, 30); //Guesses
		context.fillStyle = "#109910";
		context.font = "16px Sans-Serif";
		context.fillText ('Guesses: ' + guesses, 215, 50);
		//high or low
		context.fillStyle = "#000000";
		context.font = "16px Sans-Serif";
		context.fillText ('Higher or Lower:' + lettersGuessed.toString(), 10, 260);
		
		if (gameOver) {
			context.fillStyle = "#ff0000";
			context.font = "40px Sans-Serif";
			context.fillText ('You Got It!', 150, 180);
		}


	}

	initGame();
}