function sdistro(){

    var s = document.getElementById("search").value;

    if (s == "ChrunchBang") {
        ChrunchBang();
    } else if (s == "Mint") {
        Mint();
    } else if (s == "Titan") {
        Titan();
    } else if (s == "Ubuntu") {
        Ubuntu();
    } else if (s == "Zorin Lite") {
        ZorinLite();
    } else if (s == "Absolute") {
        abs();
    } else if (s == "Pop OS") {
        Pop();
    } else if (s == "Sparky") {
        Sparky();
    } else if (s == "Linux Lite") {
        LinuxLite();
    } else if (s == "Lubuntu") {
        Lubuntu();
    } else if (s == "Fedora") {
        Fedora();
    } else if (s == "Garuda") {
        Garuda();
    } else if (s == "Zorin") {
        Zorin();
    } else if (s == "Elementary") {
        Elementary();
    } else if (s == "Xero") {
        Zero();
    } else if (s == "Ubuntu DDE") {
        DDE();
    } else if (s == "Cute Fish") {
        CuteFish();
    } else if (s == "Ultramarine") {
        Ultramarine();
    } else if (s == "Feren") {
        Feren();
    } else if (s == "Deepen") {
        Deepen();
    } else {
        Stuff()
    }
}
function smode() {
    let x = document.getElementById("Search-container");
    x.classList.toggle("opens");
}
function Stuff() {
    let List = document.getElementById("Stuff");
    List.classList.toggle("openmode");
}
function ChrunchBang() {
    let ChrunchBang = document.getElementById("ChrunchBang");
    ChrunchBang.classList.toggle("openmode");
}
function Mint() {
    let Mint = document.getElementById("Mint");
    Mint.classList.toggle("openmode");
}
function Titan() {
    let Titan = document.getElementById("Titan");
    Titan.classList.toggle("openmode");
}
function Ubuntu() {
    let Ubuntu = document.getElementById("Ubuntu");
    Ubuntu.classList.toggle("openmode");
}
function ZorinLite() {
    let ZorinLite = document.getElementById("ZorinLite");
    ZorinLite.classList.toggle("openmode");
}
function abs() {
    let abs = document.getElementById("abs");
    abs.classList.toggle("openmode");
}
function Pop() {
    let Pop = document.getElementById("Pop");
    Pop.classList.toggle("openmode");
}
function Sparky() {
    let Sparky = document.getElementById("Sparky");
    Sparky.classList.toggle("openmode");
}
function LinuxLite() {
    let Lite = document.getElementById("LinuxLite");
    Lite.classList.toggle("openmode");
}
function Lubuntu() {
    let Lubuntu = document.getElementById("Lubuntu");
    Lubuntu.classList.toggle("openmode");
}
function Fedora() {
    let Fedora = document.getElementById("Fedora");
    Fedora.classList.toggle("openmode");
}
function Garuda() {
    let Garuda = document.getElementById("Garuda");
    Garuda.classList.toggle("openmode");
}
function Elementary() {
    let Elementary = document.getElementById("Elementary");
    Elementary.classList.toggle("openmode");
}
function Zorin() {
    let Zorin = document.getElementById("Zorin");
    Zorin.classList.toggle("openmode");
}
function Zero() {
    let Zero = document.getElementById("Zero");
    Zero.classList.toggle("openmode");
}
function DDE() {
    let DDE = document.getElementById("DDE");
    DDE.classList.toggle("openmode");
}
function CuteFish() {
    let CF = document.getElementById("CuteFish");
    CF.classList.toggle("openmode");
}
function Ultramarine() {
    let Ultramarine = document.getElementById("Ultramarine");
    Ultramarine.classList.toggle("openmode");
}
function Feren() {
    let Feren = document.getElementById("Feren");
    Feren.classList.toggle("openmode");
}
function Deepen() {
    let Deepen = document.getElementById("Deepen");
    Deepen.classList.toggle("openmode");
}