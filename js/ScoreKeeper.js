var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");

var span1 = document.getElementById("span1");
var span2 = document.getElementById("span2");

var numbInput = document.querySelector("input");

var p = document.querySelector("p span");

var p1Score = 0;
var p2Score = 0;

var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
	if (!gameOver) {
	p1Score++;
	if (p1Score === winningScore) {
		span1.classList.add("winner");
		gameOver = true;
	}
	span1.textContent = p1Score;
	}
});

p2Button.addEventListener("click", function(){
	if (!gameOver) {
	p2Score++;
	if (p2Score === winningScore) {
		span2.classList.add("winner");
		gameOver = true;
	}
	span2.textContent = p2Score;
	}
});

resetButton.addEventListener("click", function(){
	// p1Score = 0;
	// p2Score = 0;

	// span1.textContent = 0;
	// span2.textContent = 0;

	// span1.classList.remove("winner");
	// span2.classList.remove("winner");

	// gameOver = false;
	reset();
});


function reset() {
	p1Score = 0;
	p2Score = 0;

	span1.textContent = 0;
	span2.textContent = 0;

	span1.classList.remove("winner");
	span2.classList.remove("winner");

	gameOver = false;
}

numbInput.addEventListener("change", function(){
	p.textContent = numbInput.value;
	winningScore = Number(numbInput.value);
	reset();
});