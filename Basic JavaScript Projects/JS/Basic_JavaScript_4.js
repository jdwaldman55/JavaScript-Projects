function animal_function() {
    var animal = {
        type:"Dog",
        color:"Black",
        breed:"Shepard",
        Age:6,
        sound:"Bark"
    };
    delete animal.breed;
    document.getElementById("Dictionary").innerHTML = animal.breed;
}

function cat_function() {
    var cat = {
        color:"Black",
        breed:"siamese",
        breed:"Tabby",
        Age:10,
        sound:"Meow"
    };
    document.getElementById("Cat").innerHTML = cat.breed;
}