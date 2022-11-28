//function expression
function saturdayFun(activity="roller-skate") {
    //console.log(activity);
    return `This Saturday, I want to ${activity}!`;
}

//function declarations
//const day = function mondayWork(go to the office. ) {
//   return `This Monday, I will ${mondayWork}!`; 
//}

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`;

}
 function wrapAdjective(string="*") {
    return function wish(adj="special"){
        return `You are ${string}${adj}${string}!`;
    }
 }