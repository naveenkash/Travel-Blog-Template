function cars(carbrand, carmodel, carprice, companyceo) {
    this.carbrand = carbrand;
    this.carmodel = carmodel;
    this.carprice = carprice;
    this.companyceo = companyceo;
    this.info = function () {
        console.log("this is car info");
    }
}
var c = new cars("tesla", "model 3", 3000, "elon musk");
console.log(c.companyceo)

function buttonclick() {
    var hj = document.getElementById("se");
    if (hj.value.trim() === "") {
        alert("no blank value");
        return false;
    }
    else {
        true;
    }
}
function newimage() {
    document.getElementById("i-m").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN0jp7-nzowr8_BmENysrcttLEYF3xTAwzfsKB3IquZAXJRieO3Q";
}
function oldimg() {
    document.getElementById("i-m").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK-IqJmwQOizIMUnjkAtGYpLhUWMqWmoCU3cUxU8NLCWpf2vyP";
}

function ko() {
    var l = document.getElementById("uname");
    var p = document.getElementById("password")
    var suces = true;
    if (l.value.trim().length === 0) {
        // alert("no blank value");
        l.style.border = "1px solid red";
        document.getElementById("lo").style.visibility = "visible";
        suces = false;
    }
    if (p.value.trim() === "") {
        // alert("no blank password");
        p.style.border = "1px solid red";
        suces = false;
    }
    if (!suces) {
        return false;
    }
    if (p.value.trim().length < 5) {
        alert("short password");
        suces = false;
    }
    return suces;
}
var intervalid = 0;
var opacity = 0;

function fadeout() {
    intervalid = setInterval(hide, 20);
}
function hide() {
    var fade = document.getElementById("po");
    opcaity = Number(window.getComputedStyle(fade).getPropertyValue("opcaity"));

    if (opacity > 0) {
        opacity = opacity - 0.1;
    }
    else {
        clearInterval(intervalid);
    }
}

var width = 100;
var diff = 2;
var intervalID = 0;
function increase() {
    clearInterval(intervalID);
    intervalID = setInterval(expand, 20);
}
function expand() {
    console.log("on expand");
    if (width < 200) {
        width = width + diff;
        console.log("if called width=" + width);
        console.log("if called current width=" + document.getElementById("heart").style.width);
        document.getElementById("heart").style.width = width + 'px';
    }
    else {
        clearInterval(intervalID);
    }
}

var co = "nav";
var age = 19;
var es = "hello my name is " + co + " how are you and my age is ";
console.log(es);

var is = "naveen";
var end = 19;
var info = "hello my name is " + is + " and im " + age + " years old";
console.log(info);

var firstname = "naveen";
var lastname = "kumar";
var firstletteoflastname = "";

firstletteroflastname = lastname[3];
console.log(firstletteroflastname);

function fruit(val) {

    var jojo = "";

    switch (val) {
        case "a":
            jojo = "apple";

            break;
        case "b":
            jojo = "ball";
            break;
        case "c":
            jojo = "cat";
            break;
    }
    return jojo;

}
console.log(fruit("b"));