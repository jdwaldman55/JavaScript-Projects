var x = myfunction(4, 3);
document.getElementById("Add").innerHTML = x;

function myfunction(a, b) {
    return a * b;
}

function myfunction2() {
    document.getElementById("Hello").innerHTML = "Hello";
}

function myfunction3() {
    var sentence = "Great job, ";
    sentence += " You clicked me!";
    document.getElementById("Concatenate").innerHTML = sentence;
}