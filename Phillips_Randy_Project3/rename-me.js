// myName =  Randy Phillips
// myClass = SDI 1407
// myProject = Project 3


// Procedure

var startMessage = function start() {
	console.log("It's time for work!");
}


// Array - Store Names

var storeNames = ["Circle K","Walmart", "Sheetz"];

//JSON Data

var myInfo = [
    {"firstName":"Randy", "lastName":"Phillips"},
    {"totalMoney":"Total Cash", "cashValue":20.00},
   
];

// Number Argument + Function

var getCash = function getCash(cash) {
	(myInfo[1].cashValue = cash);
	console.log("I walk out the door, with $" + (myInfo[1].cashValue) + " in my pocket");
		 
};


// Store Variable 

var getStore;

console.log(myInfo[0].firstName + " " + myInfo[0].lastName + " get's ready for work...");
startMessage();
getCash(15.00);






