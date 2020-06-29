//detect click button
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

//detect keyboard press
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});
var tom1 = new Audio("sounds/vanshika.mpeg");
var tom2 = new Audio("sounds/aarushi.mpeg");
var tom3 = new Audio("sounds/ojasvi.mpeg");
function makeSound(key){
    
    switch(key){
        case 'v':tom2.pause();
                tom3.pause();
                tom1.play();
                break;

        case 'a':tom1.pause();
                tom3.pause();
                tom2.play();
                break;

        case 'o':tom1.pause();
            tom2.pause();
            tom3.play();
            break;
        
    }
}


function buttonAnimation(currentKey){
    var pressedButton = document.querySelector("."+currentKey);
    pressedButton.classList.add("pressed"); 

    setTimeout(function(){
        pressedButton.classList.remove("pressed");
    },100);
}