function makeIterator(array) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < array.length
        ? {
            value: array[nextIndex++],
            done: false,
          }
        : {
            done: true,
          };
    },
  };
}

// driver code
let it = makeIterator(["yo", "ya"]);
it.next().value; // 'yo'
it.next().value; // 'ya'
it.next().done; // true
