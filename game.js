var big_numbers = [];
var small_numbers = [];
var final_numbers = [];
var numbersUsed = [];
var randoms = 0;
var randomb = 0;
var goal = getRandomInt(100, 1000);
function start() {
	for (var i=0; i<6; i++){
		var n = getRandomInt(1,4)*25;
		while(big_numbers.amountOf(n) > 1) {
			n = getRandomInt(1,4)*25;
		}
		big_numbers.push(n);
	}
	for (var i = 0; i < 6; i++){
		var n = getRandomInt(1,10);
		while(small_numbers.amountOf(n) > 0) {
			n = getRandomInt(1,10);
		}
		small_numbers.push(n);
	}
	var response = parseInt(prompt("How Many Big Numbers do you want (1-6)?"));
	while (response != 0 && response != 1 && response != 2 && response != 3 && response != 4 && response != 5 && response != 6){
		response = parseInt(prompt("Invalid, How Many Big Numbers do you want (1-6)?"));
	}

	final_numbers = final_numbers.concat(big_numbers.slice(0, response))
	final_numbers = final_numbers.concat(small_numbers.slice(0, 6 - response));

	console.log(big_numbers);
	console.log(small_numbers);
	console.log(final_numbers);
	document.getElementById("displayNumbers").innerHTML = "Numbers: " + final_numbers.join(" ");
	document.getElementById("target").innerHTML = "Goal: " + goal;
}

function check() {
	var input = document.getElementById("answerInput").value.replace(/\[`\=\q\w\e\r\t\y\u\i\o\p\[\]\\\a\s\d\f\g\h\j\k\l\;\'\z\x\c\v\b\n\m\,\.\~\!\@\#\$\%\^\&\(\)\_\Q\W\E\R\T\Y\U\I\O\P\{\}\|\A\S\D\F\G\H\J\K\L\:\"\Z\X\C\V\B\N\M\<\>\?]/g, "");
	var legit = true;
	legit = (eval(input) === goal) && !(input == goal);
    input += "|";
	if (!legit) { return; }
	var lastIndex = 0;
	for (var x = 0; x < input.length; x++) {
		if (input[x]=="|" || input[x]=="*" || input[x]=="/" || input[x]=="+" || input[x]=="-" || input[x]=="(" || input[x]==")") {
			numbersUsed.push(input.slice(lastIndex, x));
			lastIndex = x;
		}
	}
	alert(numbersUsed.join(" "));
    console.log(numbersUsed.join(" "));
	if (legit) { alert("Correct!"); }
}
