// Retirement age calculation for employees--trial with arrow function------

const calcage = yob => 2021 - yob;
const age21 = calcage(1971);
console.log(age21);

const yearsUntilRetirement = (yob, firstName)
=> {
	const age21 = 2021 - yob;
	const retirement = 60 - age21; // Indian gov retirement age
	return "${firstName} retires in ${retirement} years";

}

console.log(yearsUntilRetirement(1971,'Mishra'));
console.log(yearsUntilRetirement(1988,'deol'));
