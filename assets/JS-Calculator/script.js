// Dark Mode Script
var modeBtn = document.querySelector("#btn");
var calcu = document.querySelector(".calculator");
var bg = document.querySelector(".body");
var screen = document.querySelector("#screen");
var btn = document.querySelectorAll(".btn-container");

modeBtn.addEventListener("click", function () {
	calcu.classList.toggle("dark-mode");
	bg.classList.toggle("dark-mode");
	screen.classList.toggle("dark-mode");
	btn.classList.toggle("dark-mode");
});

// Calculator Function Script
var screen = document.querySelector("#screen");
var btn = document.querySelector(".btn-container");
var resetScreen = false;
var count = false;
var tempVal = "";
var operator = "";

btn.addEventListener("click", function (e) {
	var btnClicked = e.target;
	var btnValue = btnClicked.innerText;

	if (btnValue === "C") {
		screen.value = "";
	} else if (btnValue === "<") {
		screen.value = screen.value.slice(0, -1);
	} else if(btnValue === ".") {
    screen.value = screen.value + ".";
  } else if (btnValue === "=") {
		if (count) {
			screen.value = eval(tempVal + operator + screen.value);
			count = false;
		}
	} else if (btnClicked.classList.contains("operator")) {
		if (count) {
			screen.value = eval(tempVal + operator + screen.value);
			count = false;
		}
		tempVal = screen.value;
		operator = btnValue;
		resetScreen = true;
	} else {
		if (resetScreen) {
			screen.value = btnValue;
			resetScreen = false;
			count = true;
		} else {
			screen.value = screen.value + btnValue;
		}
	}
});
