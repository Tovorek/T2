const calcage = function(birthyear) {
	return 2021 - birthyear;
}
 
const years = [1990,1967,2000,2002,1956];

const age1 = calcage(years[0]);
const age2 = calcage(years[1]);
const age3 = calcage(years[years.length -1]);
console.log(age1,age2,age3);

const ages = [calcage(years[0]),calcage(years[1]),calcage(years(years.length - 1))];
console.log(ages); 