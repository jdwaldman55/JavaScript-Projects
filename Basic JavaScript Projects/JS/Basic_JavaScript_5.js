document.write(typeof "This is a string");
document.write("<br>");

function myfunction() {
    document.getElementById("nan").innerHTML = 7/"test";

document.getElementById("true").innerHTML = isNaN("test");

document.getElementById("false").innerHTML = isNaN(8);

document.getElementById("positive").innerHTML = 10E333;

document.getElementById("negative").innerHTML = -10E333;
}

document.write(5>4);
document.write("<br>");

document.write(5<4);
document.write("<br>");

console.log(2 + 2);

document.write("20" + 3);
document.write("<br>");

console.log(3>10);

document.write(4 == 4);
document.write("<br>");

document.write(4 == 9);
document.write("<br>");

A = 10;
B = 10;
document.write(A === B);
document.write("<br>");

C = 20;
D = "Dog";
document.write(C === D);
document.write("<br>");

E = 50;
F = "Fifty";
document.write(E === F);
document.write("<br>");

G = 25;
H = 45;
document.write(G === H);
document.write("<br>");

document.write(3>2 && 5>4);
document.write("<br>");

document.write(2>3 && 5>4);
document.write("<br>");

document.write(2>3 || 5>4);
document.write("<br>");

document.write(2>3 || 4>5);
document.write("<br>");

function not() {
    document.getElementById("not_true").innerHTML = !(10>20)
    document.getElementById("not_false").innerHTML = !(20>10)
}