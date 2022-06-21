function randomNumberGeneratorInRange(rangeStart, rangeEnd){
    return rangeStart + Math.round(Math.random() * (rangeEnd - rangeStart));
}

randomNumberGeneratorInRange(10, 50);  
