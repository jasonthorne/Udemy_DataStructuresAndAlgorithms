function countDown(num) {

    //base case
    if(num <=0){
        console.log('All done!');
        return; //++++++++ REMEBER THIS :P
    }

    //recursive case
    if(num >0){
        console.log(num);
        num--
        countDown(num);
    }
}

module.exports = countDown;
