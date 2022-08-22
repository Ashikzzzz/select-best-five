// common function

function coachAndManagerCost(element){
    const CoachmanagerCost = document.getElementById(element);
const CoachmanagerCostValue = CoachmanagerCost. value ;
const CoachmanagerCostStr = parseInt(CoachmanagerCostValue);
CoachmanagerCost. value='';
return CoachmanagerCostStr;
}