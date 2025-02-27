var button = document.getElementById("button");
var text = document.getElementById("text");

button.ondragstart = () => false;
// var messages = [
//     "DO NOT PRESS THIS BUTTON",
//     "I MEAN IT DO NOT PRESS THIS BUTTON",
//     "SOMETHING TRULY HORRIBLE WILL HAPPEN IF YOU PRESS THIS BUTTON",
//     "STOP PLEASE",
//     "I'M WARNING YOU",
//     "YOU HAVE 3 PRESSES LEFT",
//     "2",
//     "1",
//     "OKAY ACTUALLY STOP PRESSING",
//     "",
//     "",
//     "",
//     "",
//     "Okay just stop.",
//     "Please",
//     "There is nothing here.",
//     "Go Away.",
//     "Go Away.",
//     "Please go away.",
//     "Alright you asked for it.",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
// ];
var index = 1;
var sizemult = 1;
var max = 200;
var lastClicked = Date.now();
var correctionTime = 0;
var bposx = 250;
var bposy = 250;
var bvelx = 100;
var bvely = 100;

function updateText()
{
    
    text.innerText = "Click this button " + (max - index) + " times for a special reward!";
}

//console.log(messages.length);
button.addEventListener("click",function ()
{
    if (Date.now() - correctionTime > 1500)
    {
        if (!(index >= max))
        {
            if (Date.now() - lastClicked > 105)
            {
                lastClicked = Date.now();
                updateText();
                index = index + 1;
            }
            else
            {
                index = 0;
                text.innerText = "AUTOCLICKER DETECTED TRY AGAIN (click)";
                correctionTime = Date.now();
            }
            
        }
        else
        {
            console.log("send");
            window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        }
    }
    
});

var lastFrame = Date.now()
function bounce() {
    let dt = (Date.now() - lastFrame) / 1000;
    bposx += bvelx * dt;
    bposy += bvely * dt;

    

    // Reverse direction when hitting screen edges
    if (bposx >= 500 || bposx <= 0) {
        bvelx *= -1;
        bvelx += (Math.random() - 1/2) * 10;
        bvely += (Math.random() - 1/2) * 10;
    }

    if (bposy >= 500 || bposy <= 0) {
        bvely *= -1;
        bvelx += (Math.random() - 1/2) * 10;
        bvely += (Math.random() - 1/2) * 10;
    }

    button.style.left = bposx + "px";
    button.style.top = bposy + "px";

    lastFrame = Date.now();
    requestAnimationFrame(bounce); // Runs continuously without freezing
}

bounce();