let fitnessParameters ={
protein:160,
water:3500,
steps:11000,
}

function checkProtein(protein){
    if(protein>=150){
        console.log("Protein Goal met");
    }
    else{
        console.log("Eat more Protein");
    }
}
function checkSteps(steps){
    if(steps>=10000){
        console.log("Steps goal complete");
    }
    else{
        console.log("Walk more");
    }
}
console.log(fitnessParameters.protein);
console.log(fitnessParameters.water);
console.log(fitnessParameters.steps);

checkProtein(fitnessParameters.protein);
checkSteps(fitnessParameters.steps);