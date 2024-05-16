export function isMale(age = 0) {
	let message = "";
	// 20-60years
	if (age >= 20 && age <= 60) {
		message =
			"the lord says your requirements is 50 Shekels of silver as a male";
	}
	// 5-20years
	else if (age >= 5 && age <= 20) {
		message =
			"the lord says your requirements is 20 Shekels of silver as a male";
	}
	// 0-5years
	else if (age < 0 || age < 5) {
		message =
			"the lord says your requirements is 5 Shekels of silver as a male";
	}
	// 60yrs +
	else if (age > 60) {
		message =
			"the lord says your requirements is 15 Shekels of silver as a male";
	}
	return message;
}
