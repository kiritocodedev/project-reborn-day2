let skills = [
    "JavaScript",
    "HTML",
    "React",
    "CSS",
    "Node.js"
];
let importantSkills= skills.filter(function(needskill){
    return needskill!=="HTML" && needskill!=="CSS";
});
let learningMessages=importantSkills.map(function(needskill){
    return ("Learning "+ needskill);
});
learningMessages.map(function(message){
    console.log(message);
});