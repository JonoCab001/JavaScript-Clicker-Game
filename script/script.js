console.log("Script loaded successfully");

let clickerCount = 0;

function clickerButton(){
    //console.log("Button Clicked");
    clickerCount++;
    document.getElementById("clickerScore").innerHTML = 'Click Score: ' +clickerCount;
};