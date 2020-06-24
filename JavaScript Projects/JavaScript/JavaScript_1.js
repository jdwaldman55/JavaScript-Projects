function pet() {
    var pet_choice;
    var pets = document.getElementById("pet_input").value;
    var pet_string = " is an awesome pet!";
    switch(pets) {
        case "Dog":
            pet_choice = "Dog" + pet_string;
        break;
        case "Cat":
            pet_choice = "Cat" + pet_string
        break;
        case "Rabbit":
            pet_choice = "Rabbit" + pet_string
        break;
        case "Fish":
            pet_choice = "Fish" + pet_string
        break;
        default:
            pet_choice = "Please enter a pet on the list.";
    }
    document.getElementById("choice").innerHTML = pet_choice;
}

function Hello() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed";
}

var c = document.getElementById("mycanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(500,250);
ctx.stroke();

var A = document.getElementById("canvas1");
var B = A.getContext("2d");

var grd = B.createLinearGradient(0,0,170,0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

B.fillStyle = grd;
B.fillRect(20,20,150,100);