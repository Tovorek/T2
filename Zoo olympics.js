const calcAverage = (a,b,c) => (a+b+c)/3;
console.log(calcAverage(3,4,5));

//Test 1
let scoreMonkeys = calcAverage(44, 23, 71);
let scoreKangaroos = calcAverage(65, 54, 49);
console.log(scoreMonkeys, scoreKangaroos);

const checkWinner = function (avgMonkeys, avgKangaroos) {
	if(avgMonkeys >= 2 = avgKangaroos){
		console.log("Gold for Monkeys!!! (${avgMonkeys} vs. ${avgKangaroos}) ");
	} else if (avgKangaroos >= 2 * avgMonkeys) {
		console.log("Gold for Kangaroos!! (${avgKangaroos} vs ${avgMonkeys})");

	}else {
		console.log("No team wins!!!");
	}
}

checkWinner(scoreMonkeys,scoreKangaroos); 
checkWinner(576, 111);

//Test data 2
scoreMonkeys = calcAverage(85, 54, 41);
scoreKangaroos = calcAverage(23, 34, 27);
console.log(scoreMonkeys, scoreKangaroos);
checkWinner(scoreMonkeys,scoreKangaroos);