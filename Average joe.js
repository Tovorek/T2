Array.prototype.average = function (){
    let total = 0;

    for(let index in this) {
      total += this[index];
    }
    return total / this.length;
}
