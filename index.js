var numberOfDrums = document.querySelectorAll(".drum").length;

//create a event listener on all buttons and call the function makesound to play sound.
for(i=0; i< numberOfDrums; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){


    var contentOfInnerHtml = this.innerHTML;
    makeSound(contentOfInnerHtml);
    buttonAnimation(contentOfInnerHtml);
    });


}

//create a event listener on keyboard and call the function makesound to play sound.
document.addEventListener("keydown",function(event){

    var keyPressed = event.key;
    makeSound(keyPressed);
    buttonAnimation(keyPressed);
});

//create a makeSound function to play different sounds.
function makeSound(drumnote) {
    switch (drumnote) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
    
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;    
            
            
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
    
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
    
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
    
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
    
            
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    
    
        default:
            console.log(innerHTML);
            break;
    }
}

function buttonAnimation(drumnote){

    var activeButton = document.querySelector("." + drumnote);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);

}