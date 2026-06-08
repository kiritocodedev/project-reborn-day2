let goals=["Protein","Water","Steps"];
let fitnessProfile={
    protein:160,
    water:3500,
    steps:11000,
}
function checkProtein(protein){
    if(protein>=150){
        console.log("Protein goal met");
    }
else{
    console.log("eat more protein");

}
}
function checkSteps(steps){
    if(steps>=10000){
        console.log("steps goal complete");
    }
    else{
        console.log("walk more");
    }
}
for(let i=0;i<goals.length;i++){
    console.log(goals[i]);
}
console.log(fitnessProfile.protein)
console.log(fitnessProfile.water)
console.log(fitnessProfile.steps)
checkProtein(fitnessProfile.protein);
checkSteps(fitnessProfile.steps);