function isEven(x) {
	return (x % 2 === 0);
}

console.log(isEven(2));
console.log(isEven(3));


function factorial(x) {
	var product = 1;
	for (var i = 2; i <= x; i++) {
		product *= i;
	}
	return product;
}

console.log(factorial(5));
console.log(factorial(0));


function kebabToSnake(str) {
	return str.replace(/-/g, "_");
}

console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("blah"));