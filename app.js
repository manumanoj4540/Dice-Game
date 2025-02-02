//Initial phase upon startup

init()
var dice, scores, roundScore, activePlayer, flag;


//Added Function to Roll Dice Button

document.querySelector('.btn-roll').addEventListener('click', function ()
{
    if(flag)
        {
         dice= Math.floor(Math.random()*6)+1;
         console.log(dice);
         var diceDOM= document.querySelector('.dice');
    
         diceDOM.style.display='block';
    
         diceDOM.src='dice-'+dice+'.png';
    
         if(dice!==1)
            {
              roundScore+=dice;
              document.querySelector('#current-'+ activePlayer).textContent= roundScore;
              //console.log(roundScore);
            }
          else{
        
               nextPlayer();
              }
        }
   
}   )


//Holding the score

document.querySelector('.btn-hold').addEventListener('click', function ()
{    
    if(flag)
        {
          scores[activePlayer]+=roundScore;
    
          document.querySelector('#score-' + activePlayer).textContent= scores[activePlayer];
    
         if(scores[activePlayer]>=100)
           {
             flag=false;
             document.querySelector('#name-' + activePlayer).textContent='Winner'; 
             document.querySelector('.dice').style.display= 'none';
             document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');    
             document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');    
           }
        else 
           {
            nextPlayer();
           }
        }
    
    
    }  )


     //Next Player                                                
 function nextPlayer()
{
    document.querySelector('#current-'+activePlayer).textContent='0';
    roundScore=0;
        
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
        
    activePlayer===0 ? activePlayer=1 : activePlayer=0;
    document.querySelector('.dice').style.display= 'none';
        
         
}
      
// New Game
document.querySelector('.btn-new').addEventListener('click', function ()
{
    init();
})
                                                     
                                                     
function init()
{
    flag=true;
    scores= [0,0];
    activePlayer=0;
    roundScore=0;
    document.querySelector('.dice').style.display= 'none';
    
    document.getElementById('score-0').textContent= '0';
    document.getElementById('score-1').textContent= '0';
    
    document.getElementById('current-0').textContent= '0';
    document.getElementById('current-1').textContent= '0';
    
    document.querySelector('.dice').style.display= 'none';
    
    document.querySelector('#name-0').textContent='Player 1';     
    document.querySelector('#name-1').textContent='Player 2'; 

    document.querySelector('.player-0-panel').classList.remove('winner');          
    document.querySelector('.player-0-panel').classList.remove('active');          
    document.querySelector('.player-0-panel').classList.add('active');   

    document.querySelector('.player-1-panel').classList.remove('winner');     
    document.querySelector('.player-1-panel').classList.remove('active');     
}