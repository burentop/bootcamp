function printReverse(arr) {
	for (var i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

function isUniform(arr) {
	var first = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if (first !== arr[i]) {
			return false;
		}
	}
	return true;
}

function sumArray(arr) {
	var result = 0;
	arr.forEach(function(num) {
		result += num;
	});
	return result;
}

function max(arr) {
	var greatest = arr[0];
	arr.forEach(function(num) {
		if (num > greatest) {
			greatest = num;
		}
	});
	return greatest;
}

printReverse([1, 2, 3, 4]);
console.log(isUniform([1, 1, 1, 1]));
console.log(isUniform([2, 1, 1, 1]));
console.log(sumArray([1, 2, 3]));
console.log(max([1, 2, 3]));
console.log(max([10, 3, 10, 4]));