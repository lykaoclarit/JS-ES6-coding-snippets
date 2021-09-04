//swapping variables
function test() {
    var a = "3";
    var b = "8";
  
//sol1 - make a third var
    var c =a;
  a = b;
  b = c;

//sol2  
b=[a, a=b][0];
  
    console.log("a is " + a);
    console.log("b is " + b);
}

//char length
var tweet=prompt("What's on your mind?");
alert("The length of your tweet is " + tweet.length + ".");

//char limit 
var post=prompt("What's on your mind?");
alert(post.slice(0,10));


//upper & lower case & slicing
var name=prompt("What's on your name?");
var firstChar  = name.toUpperCase();
firstChar = firstChar.slice(0,1);
var allChar = name.toLowerCase();
allChar = allChar.slice(1,name.length);
allName = firstChar + allChar;
alert("Hello there, " + allName + "!");

//buy a number of bottle of drinks base on the price per bottke
function getDrink(money) {   
var bottleCost = money / 5;
  console.log("buy " + bottleCost);
}

getDrink(15);


//life in weeks - where user can input there actual age
// and age is defined as the year person gets to live  
function lifeInWeeks(age){
    var ageToday = prompt("How old are you?");
    var remainingTime = age - ageToday;

    var x = 365;
    var y = 52;
    var z = 12;

console.log("You have " + x*remainingTime +" days, " + y*remainingTime + " weeks," + " and " + z*remainingTime + " months left." );
}

lifeInWeeks(90);

//other solution with pre-defined current age

function lifeInWeeks(age){
    var remainingTime = 90 - age;

    var x = 365;
    var y = 52;
    var z = 12;

console.log("You have " + x*remainingTime +" days, " + y*remainingTime + " weeks," + " and " + z*remainingTime + " months left." );

}

lifeInWeeks(22);

//function - outputs and return values
function getDrink(money,costPerBottle) {   
  console.log("Buy " + calcBottles(money,costPerBottle) + " bottles of milk.");
return calcChange(money, 1.5);
}

function calcBottles(startingMoney, costPerBottle){
    var numberOfBottles = Math.floor(startingMoney/costPerBottle);
    return numberOfBottles;
}
function calcChange(startingMoney, costPerBottle){
   var change = startingMoney % costPerBottle;
   return change;  
}

console.log("Here is your " + getDrink(5, 1.5) + " change.");

//BMI calculator 

function bmiCalculator(weight,height){
    var bmi = weight / (height*height);
return calcRoundUp(bmi);
}

function calcRoundUp(bmi){
    var rounded = Math.round(bmi);
    return rounded;
}
