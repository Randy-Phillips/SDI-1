//
//
//


var string1 = "my string 1 does not change";
var string2 = "my string 2 does not change";



var procedure = confirm("Are you ready?"); if (procedure == true) {
	console.log(" you are ready, lets continue.");
	}else {console.log("too bad, we are continuing anyways!");
};

var theString = function (string1, string2) {
	console.log(string1 + string2) 
};


var theBoolean = function() {var b = confirm("Do you like to count?"); while (b === false) 
	{ var b = confirm("Are you sure...Do you like to count?")
 }
};



var theNumber = function (numb) { for (num = 0; num < 10; num++) {
	console.log("We are currently on, " + num + ". lets continue!")
  } console.log("We have counted to 10!")
};



theBoolean();
console.log("lets count 0 to 10 together!");
theNumber(0);
theString("Thank you for ","counting with us");


