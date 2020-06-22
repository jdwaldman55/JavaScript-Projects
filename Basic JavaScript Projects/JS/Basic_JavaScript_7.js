var X = 50

function Add_1() {
    document.write(30 + X + "<br>")
}

function Add_2() {
    var Y = 35
    document.write(20 + Y + "<br>")
}

function Add_3() {
    console.log(40 + Y)
}

Add_1();
Add_2();
Add_3();

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function get_Seconds() {
    if (new Date().getSeconds() > 30) {
        document.getElementById("Seconds").innerHTML = "You are closer to a new minute"
    }
}

function Tall() {
    height = document.getElementById("height").value;
    if (height >= 69) {
        height = "You are above average height";
    }
    else {
        height = "You are below average height";
    }
    document.getElementById("average").innerHTML = height;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }

    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon";
    }

    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}