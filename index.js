var gamePattern = [];
var userClickedPattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour = buttonColours[nextSequence()]
// console.log(randomChosenColour);
gamePattern.push(randomChosenColour);
console.log(gamePattern);

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}

$("#" + randomChosenColour).fadeOut(100).fadeIn(100);

var sound = new Audio('sounds/' + randomChosenColour + '.mp3');
sound.play();

$(".btn").click(function(event){
    var userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
});



