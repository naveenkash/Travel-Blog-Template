
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