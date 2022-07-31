
var keyPressedOnce = false;

$(document).keypress(function () {
    if (!keyPressedOnce){
        $("h2").text("Level 1");
        var buttonNo = Math.floor(Math.random() * 4) + 1; // 1/2/3/4
        displayAnimation(buttonNo);
        keyPressedOnce = true;
    }
    
});

function displayAnimation(buttonNo) {
    switch (buttonNo) {
        case 1:
            $("#green-button").fadeOut();
            setTimeout(function(){
                $("#green-button").fadeIn();
            }, 10);
            break;
    
        case 2:
            $("#red-button").fadeOut();
            setTimeout(function(){
                $("#red-button").fadeIn();
            }, 10);
            break;
        
        case 3:
            $("#yellow-button").fadeOut();
            setTimeout(function(){
                $("#yellow-button").fadeIn();
            }, 10);
            break;
        
        case 4:
            $("#blue-button").fadeOut();
            setTimeout(function(){
                $("#blue-button").fadeIn();
            }, 10);
            break;
        
        default:
            break;
    }
}