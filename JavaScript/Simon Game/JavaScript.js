const buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;
var currentLevel = 0;

// Game Code

$(document).keypress(function() {
    if (!started) {
        nextSequence();
        started = true;
        $("h1").text("Level "+level);
    }
})

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    buttonAnimation(userChosenColour);
    playSound(userChosenColour);

    checkSequence();
})

// Functions

function buttonAnimation(name) {
    $("#"+name).addClass("pressed");
    setTimeout(function() {
        $("#"+name).removeClass("pressed");
    }, 100);
}

function nextSequence() {
    level++;
    $("h1").text("Level "+level);

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function playSound(name) {
    var audio = new Audio("./sounds/"+name+".mp3");
    audio.play();
}



function checkSequence() {
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
        if (currentLevel+1 < level)  {
            currentLevel++;
        }
        else {
            userClickedPattern = [];
            setTimeout(nextSequence,1000);
            currentLevel = 0;
        }
    }
    else {
        $("h1").html("Level "+level+"<br>Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        },200);
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        
        startOver();
    }
}

function startOver() {
    started = false;
    userClickedPattern = [];
    gamePattern = [];
    level = 0;
}