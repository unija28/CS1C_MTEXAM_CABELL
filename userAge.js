let age = prompt("Please enter your age:");

if(age < 5){
    console.log("You are a toddler.");
}
else if(age <= 12){
    console.log("You are a child.");
}
else if(age <= 19){
    console.log("You are a teenager.");
}
else if(age <= 35){
    console.log("You are an adult.");
}
else if(age <= 60){
    console.log("You are a middle-aged.");
} else{
    console.log("You are a senior citizen.");
}
