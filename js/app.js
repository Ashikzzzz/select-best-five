let player=[];

function addtoPlayerName(element){
const getPlayer= element.parentNode.children[0].innerText;
const playerName =document.getElementById('player-name')
const li =document.createElement('li')
li.innerText=getPlayer;
playerName.appendChild(li);
player.push(getPlayer)

return player;
// console.log(player.length)
}
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

function coachAndManagerCost(element){
    const CoachmanagerCost = document.getElementById(element);
const CoachmanagerCostValue = CoachmanagerCost. value ;
const CoachmanagerCostStr = parseInt(CoachmanagerCostValue);
CoachmanagerCost. value='';
return CoachmanagerCostStr;
}

document.getElementById('calculate-total').addEventListener('click',function(){
const coachCost = coachAndManagerCost('coach-cost');

const managerCost =coachAndManagerCost('manager-cost')

const expenseTotal=document.getElementById('expense-total');
const expenseTotalValue= expenseTotal.innerText;
const total =expenseTotalValue-(coachCost+managerCost) 

const totalLast = document.getElementById('total');
totalLast.innerText= total;
})

