let fitnessProfile ={
    protein:170,
    water:3000,
    steps:12000,
}

function checkProtein(protein){



if(protein>=150)
{
    console.log("Protein goal met");
}
else
{
    console.log("Eat more Protein");
}
}
checkProtein(fitnessProfile.protein);
console.log(fitnessProfile.water);
console.log(fitnessProfile.steps);

