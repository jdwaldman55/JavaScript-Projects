function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function vote() {
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age < 18) ? "You are too young":"You are old enough";
    document.getElementById("vote").innerHTML = can_vote + " to vote.";
}

function vehicle(Make, Model, Year, Color) {
    this.vehicle_make = Make;
    this.vehicle_model = Model;
    this.vehicle_year = Year;
    this.vehicle_color = Color;
}
var Jack = new vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new vehicle("Jeep", "Trail Hawk", 2019, "White and black");
var Erik = new vehicle("Ford", "Pinto", 1971, "Mustard");
function myfunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.vehicle_color + "-colored " + Erik.vehicle_model + 
    " manufactured in " + Erik.vehicle_year;
}

function Iphone(Year, Model, Color) {
    this.iphone_year = Year;
    this.iphone_model = Model;
    this.iphone_color = Color;
}

var Jordan = new Iphone(2019, "11s Pro", "Space Gray");
function Iphone_Function() {
    document.getElementById("New_and_This").innerHTML = 
    "Jordan's Iphone is a " + Jordan.iphone_year + ", " +Jordan.iphone_model + ", in " + Jordan.iphone_color;
}

function Nested_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var starting_point = 10;
        function Add_2() {starting_point += 2;}
        Add_2();
        return starting_point
    }
}