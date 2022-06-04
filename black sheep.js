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

let it = makeIterator(['yo', 'ya']);
it.next().value;                        
it.next().value;
it.next().done;       
