// Simon is big on juices. He appoints his secretary to take care of the job while on a trip to Italy.

function cutFruitPieces(fruit) {
	return fruit * 4;
}

function fruitProcessor(Pomogranate, carrot)  {
	const pomoPieces = cutFruitPieces(Pomogranate);
	const carrPieces = cutFruitPieces(carrot);


const juice = 'Juice with ${pomoPieces} pieces of pomogranate and ${carrPieces} pieces of carrot.';
return juice;
}

console.log(fruitProcessor(2,3));
