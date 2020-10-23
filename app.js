/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores,activePlayer,score=0,gamePlay = true,finalScore;
player = [0,1];
scores = [0,0];
activePlayer = 0;


document.getElementById('score-0').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.querySelector('.dice-1').style.display = 'none';
document.querySelector('.dice-2').style.display = 'none';



// document.querySelector('player-0-panel').classList.remove('.active');

document.querySelector('.btn-roll').addEventListener('click',function(){

    if(gamePlay)
    {
       finalScore =  document.querySelector('.final-score').value;
       if(!finalScore){
            finalScore = 100;
       }
        var dice1,dice2;
        dice1 = Math.floor(Math.random()*6)+1;
        dice2 = Math.floor(Math.random()*6)+1;
        document.querySelector('.dice-1').style.display = 'block';
        document.querySelector('.dice-1').src = 'dice-'+dice1+'.png'; 

        document.querySelector('.dice-2').style.display = 'block';
        document.querySelector('.dice-2').src = 'dice-'+dice2+'.png'; 
       
        if(activePlayer===0){
            document.querySelector('.player-0-panel').classList.add('active');
            score+=(dice1+dice2);
            if(dice1===1 || dice2===1)
            {
                score = 0;
                activePlayer = 1;
                document.querySelectorAll('.player-current-score').textContent = '0';
                document.querySelector('.player-0-panel').classList.remove('active'); 
                document.querySelector('.player-1-panel').classList.add('active');    
               
            } 
               
            document.getElementById('current-0').textContent = score;      
    
        }
        else
        {
            document.querySelector('.player-1-panel').classList.add('active');
            score+=(dice1+dice2);
            if(dice1===1||dice2===1)
            {
                score = 0;
                activePlayer = 0;
                document.querySelector('.player-1-panel').classList.toggle('active');
                document.querySelectorAll('.player-current-score').textContent = '0';
                document.querySelector('.player-1-panel').classList.remove('active'); 
                document.querySelector('.player-0-panel').classList.add('active'); 
                        
            } 
               
            document.getElementById('current-1').textContent = score;
    
        }
    }
  
  
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlay){

    if(activePlayer===0)
    {
        scores[0]+=score;
        score = 0;
        activePlayer = 1;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.add('active');
        document.getElementById('current-0').textContent = score;
        
    }
    else
    {
        scores[1]+=score;
        score = 0;
        activePlayer = 0;
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.player-0-panel').classList.add('active');
        
        document.getElementById('current-1').textContent = score;
        
    }
    
    document.querySelector('#score-0').textContent = scores[0];
    document.querySelector('#score-1').textContent = scores[1];
    }
    
    if(scores[0]>=finalScore)
    {
        
        document.querySelector('#name-0').textContent = 'winner';
        document.querySelector('.player-0-panel').classList.add('winner');
        document.querySelector('.player-0-panel').classList.remove('active');
        gamePlay = false;
        nextPlayer();
        
    }
    if(scores[1]>=finalScore)
    {
        document.querySelector('#name-1').textContent = 'winner';
        document.querySelector('.player-1-panel').classList.add('winner');
        document.querySelector('.player-1-panel').classList.remove('active');
        gamePlay = false;

    

        nextPlayer();
    }

    
});


document.querySelector('.btn-new').addEventListener('click',function()
{
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('#name-0').textContent = 'player-1';
    document.querySelector('#name-1').textContent = 'player-2';
    
    nextPlayer();
    gamePlay = true;
    
});
function nextPlayer()
{
    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.dice-1').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';
    player = [0,1];
    scores = [0,0];
    activePlayer = 0;
    score = 0;
}


