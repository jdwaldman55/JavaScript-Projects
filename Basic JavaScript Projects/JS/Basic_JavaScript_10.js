function Call_Loop() {
    var numb = "";
    var X = 10;
    while (X > -1) {
        numb += "<br>" + X;
        X--;
    }
    document.getElementById("Loop").innerHTML = numb;
}

function length() {
    var word = "Hello";
    var len = word.length;
    document.getElementById("length").innerHTML = len;
}

var Instruments = ["Piano", "Drums", "Keytar", "Bass"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array() {
    var emotion = [];
    emotion[0] = "happy";
    emotion[1] = "sad";
    emotion[2] = "mad";
    document.getElementById("array").innerHTML = "Today I am feeling " +
        emotion[0] + ".";
}


function constant_1() {
    const phone = {type:"Iphone", model:"11"};
    phone.color = "Space Gray";
    phone.price = "$1100";
    phone.year = "2019";
    document.getElementById("constant").innerHTML = "I bought an " +
        phone.type + " in " + phone.color + " for " + phone.price + " made in " +
        phone.year + ".";
}

let P = 82;
document.write(P + "<br>") ;

function math() {
    return Math.PI;
}

document.getElementById("PI").innerHTML = math();

let phone = {
    type: "Iphone ",
    model: "11 pro ",
    color: "Space Gray ",
    capacity: "64Gb ",
    description : function() {
        return "The phone is a " + this.color + this.type + this.model + this.capacity;
    }

};
document.getElementById("phone_object").innerHTML = phone.description();

var number = "";
var n;
for (n = 0; n < 10; n++) {
    if (n === 5) {break; }
    number += "The number is " + n + "<br>";
}
document.getElementById("number").innerHTML = number;

var new_number = "";
var m;
for (m = 0; m < 11; m++) {
    if (m === 6) {continue; }
    new_number += "The number is" + m + "<br>";
}
document.getElementById("newnumb").innerHTML = new_number;