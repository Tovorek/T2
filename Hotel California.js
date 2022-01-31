/* Hotel California was in the verge of bankruptcy .
- Revenue system a complete disaster--
--New guy Brian comes along and decides to change things
His tech-savy solution will help with the billing and tips.
Which is expected to fix things in Hotel California  */


Const calctip =  function (bill) {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}
  

const bills = [134, 444,93];

const tips = [calctip(bills[0]), calctip(bills[1]),calctip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1],bills[2] + tips[2]];

console.log(bills, tips, totals);  