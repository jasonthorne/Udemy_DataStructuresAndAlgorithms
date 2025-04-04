function numberRange(startNum, endNum) {

    //base case:
    if(startNum === endNum){
        return [startNum];
    }

   //console.log([startNum+1, endNum].sort());

    //recursive case:

    //.toString().split('')
    //return [].push(startNum +1);
    return [startNum + numberRange(startNum+1, endNum)]//.sort();

}

module.exports = numberRange;
