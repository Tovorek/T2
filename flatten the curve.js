function flat(arr){
    const flatArr = [];
    arr.forEach((value) => {
        if(Array.isArray(value)){
            flatArr.push(...flat(value));
        }
        else{
            flatArr.push(value);
        }
    });
    return flatArr;
}
