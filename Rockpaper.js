// creates the score variables in a way where it doesn't refresh everytime the loops reiterate 
let playerScore = 0;
let computerScore = 0; 
const buttons = document.querySelectorAll('button')


// a function to randomly select rock, paper, or scissors from an array
function computerPlay(){
    let options = ["rock", "paper","scissors"];
    let rand = options[(Math.floor(Math.random() * options.length))];
   return rand;
}

/*function getPlayerSelection(){
    document.getElementById('rock').value;
    document.getElementById('paper').value;
    document.getElementById('scissors').value;
    console.log(getPlayerSelection);}
*/


        



//const rockButton = document.querySelector(".rock");
//const paperButton = document.querySelector(".paper");
//const scissorsButton = document.querySelector(".scissors");


// a function to run one round of rock, paper, scissors         
function oneRound(playerSelection){
    computerSelection = computerPlay();
    playerSelection = getPlayerSelection;
    result = '';
  
   

        // sets the rules and points gain for the player
        if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock'))
    {
       playerScore +=1;
       result = document.createElement('h4');
                document.body.appendChild(result);
        result.textContent = "You won this round becase " + playerSelection + " beats " + computerSelection + " your score is " + playerScore;
       
       

           
    }
    // sets rules and points gain for the computer
    else if (
        (computerSelection == 'rock' && playerSelection == 'scissors') ||
        (computerSelection == 'scissors' && playerSelection == 'paper') ||
        (computerSelection == 'paper' && playerSelection == 'rock'))
        {
            computerScore+=1
            result = document.createElement('h4');
            document.body.appendChild(result);

            result.textContent = "You lost this round because " + computerSelection + " beats " + playerSelection + " the computer's score  " + computerScore + 
            " your score " + playerScore;
        
        }
        // in case of tie 
         if(playerSelection === computerSelection){
            result =  document.createElement('h1');
            document.body.appendChild(result);
             result.textContent = "It is a tie because " + playerSelection + " is the same as " + computerSelection + "  your score is " + 
            playerScore;
             }
             // in case user loses
             if(computerScore == 5){
                result = document.createElement('h1');
                document.body.appendChild(result);
                result.textContent = "Computer wins";
            }
        
            // in case user wins 
            if(playerScore == 5){
                result = document.createElement('h1');
                document.body.appendChild(result);
                result.textContent = "Player wins";
             }
               
           
         return result;
            }
        
        
        
        
        
    button.addEventListener('click', function(){
    playRound(button.value)
    })

        
        
        // function to repeat the rounds five times, and to determines who wins at the end of the game
         
 
   /* for(let i = 0; i < 5; i++){
    oneRound();
    
            }

            
    if(playerScore > computerScore){
        alert("You won and your score " + playerScore  + " points" )
    }
    else if (computerScore > playerScore){
        alert("You lost and your score was " + playerScore + " points" )
    }

    else if(computerScore && playerScore ===0){
        alert("It is a tie")
        return game();
    }

    else{
        alert("The game is a tie your score is " + playerScore + " and the computer's is " + computerScore)
}
 
    
    return result;


*/

   

    