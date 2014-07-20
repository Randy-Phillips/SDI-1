//
//
//

// Global Variables

var string1 = "my string 1 does not change";
var string2 = "my string 2 does not change";
var confirmBoolean = true;
var countNumber = 0;

// My Beginning Procedure

var procedure = confirm("Are you ready?"); if (procedure == true) {
	console.log(" you are ready, lets continue.");
	}else {console.log("too bad, we are continuing anyways!");
};

// String Funtion

var theString = function (string1, string2) {
	console.log(string1 + string2) 
};


// Boolean Funtion

var theBoolean = function() {var confirmBoolean = confirm("Do you like to count?"); while (confirmBoolean === false)
	{ var confirmBoolean = confirm("Are you sure...Do you like to count?")
 }
};


// Number Function

var theNumber = function (countNumber) { for (countNumber = 0; countNumber < 10; countNumber++) {
	console.log("We are currently on, " + countNumber + ". lets continue!")
  } console.log("We have counted to 10!")
};


// Function Calling

theBoolean();
console.log("lets count 0 to 10 together!");
theNumber(0);
theString("Thank you for ","counting with us");

// Global Variable Output

console.log(string1);
console.log(string2);
console.log(confirmBoolean);
console.log(countNumber);


