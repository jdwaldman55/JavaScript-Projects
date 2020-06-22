function my_sentence() {
    var part_1 = "This is now ";
    var part_2 = "a full sentence.";
    var complete = part_1.concat(part_2);
    document.getElementById("Concat").innerHTML = complete;
}

function slice() {
    var sentence = "Steve Jobs is my personal hero!";
    var cut = sentence.slice(6,11);
    document.getElementById("slice").innerHTML = cut;
}

function upper() {
    var string = "Steve Jobs"
    var up = string.toUpperCase();
    document.getElementById("up").innerHTML = up;
}

function search() {
    var Steve = "Steve Jobs is my personal hero!";
    var srch = Steve.search("Jobs");
    document.getElementById("search").innerHTML = srch;
}

function numb() {
    var X = 450;
    document.getElementById("number-string").innerHTML = X.toString();
}

function percision() {
    var Y = 12.3456789;
    document.getElementById("percision").innerHTML = Y.toPrecision(5);
}

function fixed() {
    var A = 5.56789;
    document.getElementById("fixed").innerHTML = A.toFixed(4);
}

function value_of() {
    var B = "Hello";
    document.getElementById("value").innerHTML = B.valueOf();
}