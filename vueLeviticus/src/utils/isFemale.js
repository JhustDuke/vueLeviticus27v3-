export function isFemale(age = 0) {
	let message = "";
	// 20-60years
	if (age >= 20 && age <= 60) {
		message =
			"the lord says your requirements is 30 Shekels of silver as a female";
	}
	// 5-20years
	else if (age >= 5 && age <= 20) {
		message =
			"the lord says your requirements is 10 Shekels of silver as a female";
	}
	// 0-5years
	else if (age <= 0 && age <= 5) {
		message =
			"the lord says your requirements is 3 Shekels of silver as a female";
	}
	// 60yrs +
	else if (age > 60) {
		message =
			"the lord says your requirements is 10 Shekels of silver as a female";
	}
	return message;
}
