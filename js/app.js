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
   console.log(playerNumber);

   const playerPrice= document.getElementById('player-price');
   const playerPriceValue= playerPrice.value;
   const playerPriceStr= parseInt(playerPriceValue);
   const totalCost = playerNumber*playerPriceStr;

   const expenseTotal=document.getElementById('expense-total');
   expenseTotal.innerText=totalCost;   
})

function coachAndManagerCost()

document.getElementById('calculate-total').addEventListener('click',function(){

})

