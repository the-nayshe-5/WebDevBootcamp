function clicked(event) {
    // var x = this.textContent; //this = button that triggered the event
    var x = event.key;

    switch (x) {
        case "w":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        default:
            break;
    }
}

var i=0;
for (i=0;i<document.querySelectorAll(".drum").length;i++) {
    // document.querySelectorAll(".drum")[i].addEventListener("click",clicked); // ->for when the button on screen is pressed
    document.addEventListener("keydown",clicked); // ->for when the key on the keyboard is pressed
}
    