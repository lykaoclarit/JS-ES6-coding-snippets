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

//buy a number of bottle of drinks base on the price
function getDrink(money) {   
var bottleCost = money / 5;
  console.log("buy " + bottleCost);
}

getDrink(15);
