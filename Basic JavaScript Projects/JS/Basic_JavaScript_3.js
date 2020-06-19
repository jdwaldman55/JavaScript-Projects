function addition_function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 =" + addition;
}

function subtract() {
    var subtract = 7 - 5;
    document.getElementById("subtract").innerHTML = "7 - 5 =" + subtract;
}

function multiply() {
    var multiply = 10 * 6;
    document.getElementById("multiply").innerHTML = "10 * 6 =" + multiply;
}

function divide() {
    var divide = 300 / 60;
    document.getElementById("divide").innerHTML = "300 / 60 =" + divide
}

function more_math() {
    var complex = (2 + 3) * 10 / 2 - 3;
    document.getElementById("more_math").innerHTML = "2 plus 3, multiplied by 10, divided by 2, and then subtracting 3 equals:  " + complex
}

function remainder() {
    var remainder = 50 % 7;
    document.getElementById("remainder").innerHTML = "When you divide 50 by 7 you have a remainder of: " + remainder
}

function negation() {
    var x = 80;
    document.getElementById("negation").innerHTML = -x;
}

var y = 8;
y++;
document.write(y);

var z = 9
z--;
document.write(z)

window.alert(Math.random());

function absolute() {
    document.getElementById("absolute").innerHTML = Math.abs(-9.8);
}
