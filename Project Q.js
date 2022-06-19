var stringsArr = [];

var stringsArr = new Proxy(stringsArr, {
  set(target, prop, receiver){
    if(typeof receiver === "string"){
      target[target.length] = receiver;
    }
    return true;
  }
});
stringsArr.push("Hello", 5, {}, "world", true, [1, 2, 3]);
stringsArr; 
