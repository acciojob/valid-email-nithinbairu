function validEmail(str) {
  //your JS code here.
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailPattern.test(str)
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
