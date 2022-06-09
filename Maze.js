function keyValuePrinter(obj) {
  for (let key in obj) {
    if (typeof obj[key] !== "object") {
      console.log("[" + key + " : " + obj[key] + "]");
    } else {
      keyValuePrinter(obj[key]);
    }
  }
}
