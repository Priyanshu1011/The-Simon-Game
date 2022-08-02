
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var firstKeypress = true;
var buttonColours = ["red", "blue", "green", "yellow"];

// Detects all button clicks
$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    // console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    // console.log(userClickedPattern.length - 1);
    checkAnswer(userClickedPattern.length - 1);
});

// Detects the 1st keypress to start/restart the game
$(document).keypress(function(){
    if(firstKeypress){
        $("#level-title").text("Level " + level);
        nextSequence();
        firstKeypress = false;
    }
});



// startOver() resets all variables to initial values
function startOver(){
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    firstKeypress = true;
}

// checkAnswer() checks whether the most recent button clicked matches the corresponding button in gamePattern
function checkAnswer(currentLevel){
    // console.log(currentLevel);
    // console.log(userClickedPattern[currentLevel] + ", " + gamePattern[currentLevel]);
    if(userClickedPattern[currentLevel] == gamePattern[currentLevel]){
        console.log("Success!");
        if((currentLevel + 1) == gamePattern.length){
            setTimeout(nextSequence, 1000);
            userClickedPattern = [];
        }
    } else {
        console.log("Wrong");
        var wrongSound = new Audio("sounds/wrong.mp3");
        wrongSound.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

// nextSequence() generates a random colour, adds it to gamePattern and makes the button animation
function nextSequence(){
    level ++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

// playSound plays the sound of the specific button clicked
function playSound(name){
    var sound = new Audio('sounds/' + name + '.mp3');
    sound.play();
}

// animatePress() animates the specific button clicked
function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

