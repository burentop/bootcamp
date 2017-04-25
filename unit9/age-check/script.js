var age = prompt("Please enter your age: ");
if (age < 0) {
	console.log("That age isn't possible!!");
} else if (age > 21) {
	console.log("You can enter and drink.");
	if (Math.sqrt(age) == 1 || Math.sqrt(age) % 2 == 0) {
		console.log("perfect square!");
	}
	if (age % 2 == 1) {
		console.log("Your age is odd!");
	}
} else if (age == 21) {
	console.log("Happy 21st birthday!! You can enter and drink.");
	if (Math.sqrt(age) == 1 || Math.sqrt(age) % 2 == 0) {
		console.log("perfect square!");
	}
	if (age % 2 == 1) {
		console.log("Your age is odd!");
	}
} else if (age >= 18) {
	console.log("You can enter, but you can't drink.");
	if (Math.sqrt(age) == 1 || Math.sqrt(age) % 2 == 0) {
		console.log("perfect square!");
	}
	if (age % 2 == 1) {
		console.log("Your age is odd!");
	}
} else {
	console.log("You are too young for this venue.");
	if (Math.sqrt(age) == 1 || Math.sqrt(age) % 2 == 0) {
		console.log("perfect square!");
	}
	if (age % 2 == 1) {
		console.log("Your age is odd!");
	}
}
