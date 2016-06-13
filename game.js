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
	var insert = "";
	var numbersUsed = [];
	var double = "";
	var correctNumbers = 0;
	legit = (eval(input) === goal) && !(input == goal);
	input += "+1";
	if (!legit) { return; }
	var lastIndex = 0;
	for (var x = 0; x < input.length; x++) {
		if (input[x] !== "1" || input[x] !== "2" || input[x] !== "3" || input[x] !== "4" || input[x] !== "5" || input[x] !== "6" || input[x] !== "7" || input[x] !== "8" || input[x] !== "9" || input[x] !== "0") {
			if (insert != "") { numbersUsed.push(insert); }
			insert="";
		}
		while(input[x] === "1" || input[x] === "2" || input[x] === "3" || input[x] === "4" || input[x] === "5" || input[x] === "6" || input[x] === "7" || input[x] === "8" || input[x] === "9" || input[x] === "0") {
			insert += input[x];
			x++;
		}
	}
    
    for (var x = 0; x < 6; x++){
        if (numbersUsed.amountOf(numbersUsed[x]) > final_numbers.amountOf(numbersUsed[x])) {
            alert("You have used " + final_numbers[x] + " more than once");
            return;
        }
    }
    
    if (numbersUsed.length > 7) {
        alert("Too many numbers used!");
        return;
    }
    for(var x = 0;x < numbersUsed.length; x++){
        correctNumbers=0;
        for(var y = 0;y < 6; y++){
            if(eval(numbersUsed[x]) === final_numbers[y]){correctNumbers+=1}
        }
        if(correctNumbers==0){
            alert("You have used numbers that you cannot use!");
            return;
            
        }
    }
	alert(numbersUsed.join(","));
    console.log(numbersUsed.join(","));
	if (legit) { alert("Correct!"); }
    if (!legit) {alert("Does not equal target!");}
}
