var audioBlue = new Audio("sounds/blue.mp3")

// var gamePattern = [];




// function nextsequence() {
//     var randomNumber = Math.floor(Math.random() * 4);
//     return randomNumber;
//   }

// randNumber = nextsequence()


// gamePattern.push(randomChosenColour);




// function animateBtn(){

//     $('div[type="button"]').addclass("pressed");

// }  



// $(document).on('click', function(event) {
//     if ($(event.target).hasClass('btn')) {
//     $(event.target).addClass('pressed');
//     audioBlue.play();
//     setTimeout(function() {
//         $(event.target).removeClass('pressed');
//         }, 150);
//     }
// });

  
// function animateBg(){

// } 

// function soundCorrect(){

// }

// function soundIncorrect(){

// }





// gameIsOn==true
// while (gameIsOn){
  

// }

// $('#level-title').text('Level');


// var gameIsON = true;



$(document).keypress(function(){
    gameStart();
});



async function gameStart(){
    
    await blinkBtn();
    setTimeout(() => {
        alert('bye')
    }, 2000);
    await userResp();
    
}             

function blinkBtn(){

    return new Promise(resolve =>{ 
        var randomNumber = Math.floor(Math.random() * 4);
        var buttonColours = ["red", "blue", "green", "yellow"];
        var randomChosenColour = buttonColours[randomNumber];
        $('div #'+randomChosenColour).addClass('pressed');
        setTimeout(function(){
            $('div#'+randomChosenColour).removeClass('pressed');
            resolve();
        }, 150);
    });
}

function userResp(){
    return new Promise(resolve =>{
        alert('hello')
        resolve();
    })
    
}



