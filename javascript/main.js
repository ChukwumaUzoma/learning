//stringg

let fruit = "Apple";

fruit = "Orange";

fruit = "Banana";

console.log(fruit)

//Array

let listOffFruit = ["Apple", "Orange", "Banana", "Watermelon", "Lemon"];

console.log(listOffFruit);

console.log(listOffFruit.length)

//object

let car ={
    "model" : 2018,
    "engine" : "v8",
    "tyre" : "aluminium"
}

console.log(car)

console.log(car.model)

// mathematical operations 

let m = 10

m += 10

console.log(m)

document.write(m)

// increament decreament

let number = 15;

number++

console.log(number)

//string 

let myPet = 'Rocky';

console.log('I own a pet named ' + myPet + "!")

let myName = 'Anthony';
let myCity = 'Athens';

console.log(`My name is ${myName}. My favourite city is ${myCity}.`)

///switchcase

let athleteFinalPosition = "position5";

switch(athleteFinalPosition){
    case "position1":
        console.log("You win Gold!");
        break;
    case "position2":
        console.log("You win Silver!");
        break;
    case "position3":
        console.log("You win Bronze!");
        break;
    default:
        console.log("You didn't win a Medal.");
        break;
}

/// conditional statement

if(athleteFinalPosition === "position1"){
    console.log("You win Gold!");
}else if(athleteFinalPosition ==="position2"){
    console.log("You win Silver!")
}else if(athleteFinalPosition === "position3"){
    console.log("You win Bronze")
}else{
    console.log("You lose.")
}  
