function countDown(num) {

    //base case
    if(num <=0){
        console.log("done, baby!");
        return; //++++++++ REMEBER THIS :P
    }

    //recursive case
    if(num >0){
        num--
        console.log("num is now: ", num);
        countDown(num);
    }
}

module.exports = countDown;
