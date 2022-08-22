let player=[];

// function 1 
// create element

function addtoPlayerName(element){
const getPlayer= element.parentNode.children[0].innerText;
const playerName =document.getElementById('player-name')
const li =document.createElement('li')
li.innerText=getPlayer;
playerName.appendChild(li);
player.push(getPlayer)

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

