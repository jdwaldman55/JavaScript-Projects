function validateform() {
    var x = document.forms["myform"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    var y = document.forms["myform"]["lname"].value;
    if (y == "") {
        alert("Name must be filled out");
        return false;
    }
    var z = document.forms["myform"]["email"].value;
    if (z == "") {
        alert("Email must be filled out");
        return false;
    }
}