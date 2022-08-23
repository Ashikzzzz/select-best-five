let player=[];

// function 1 
// create element


function addtoPlayerName(element){
const getPlayer= element.parentNode.children[0].innerText;
const playerName =document.getElementById('player-name')
player.push(getPlayer)

if(player.length<6){
    const li =document.createElement('li')
    li.innerText=getPlayer;
    element.disabled=true;
    playerName.appendChild(li);      
}
else{
    
    alert('instructor says, can"t add more then five player')
} 
return player;
}
// player per price part 

document.getElementById('cost-button').addEventListener('click',function(){
    const playerNumber= player.length
   
   const playerPrice= document.getElementById('player-price');
   const playerPriceValue= playerPrice.value;
   const playerPriceStr= parseInt(playerPriceValue);
   const totalCost = playerNumber*playerPriceStr;

   const expenseTotal=document.getElementById('expense-total');
   expenseTotal.innerText=totalCost;   
   playerPrice.value='';
   
})

// left part 
document.getElementById('calculate-total').addEventListener('click',function(){
const coachCost = coachAndManagerCost('coach-cost');

const managerCost =coachAndManagerCost('manager-cost')

const expenseTotal=document.getElementById('expense-total');

const expenseTotalValue= expenseTotal.innerText;
const expenseTotalParse= parseInt(expenseTotalValue)
const total =expenseTotalParse+coachCost+managerCost;
const totalLast = document.getElementById('total');
totalLast.innerText=total
})

