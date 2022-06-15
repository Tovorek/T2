const a = [1, 2, 3, 4, 5];
const b = [4, 0, 0, 0, 8];

const startPositionFor1stArray = a.length / 2 - 1;
const startPositionFor2ndArray = b.length / 2 - 1;
a.splice(startPositionFor1stArray, 3, ...b.slice(startPositionFor2ndArray, startPositionFor2ndArray + 3));
