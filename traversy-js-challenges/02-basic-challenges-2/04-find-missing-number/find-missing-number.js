function findMissingNumber(numbers) {

    try{

        //if (numbers.length=0){return 1};
        numbers = numbers.sort(function(a, b){return a-b});  //https://www.w3schools.com/jsref/jsref_sort.asp
        let pointer = numbers[0];

        for(let i=0;i<numbers.length;i++){
            if(numbers[i] === pointer){
                pointer = pointer+1;
                continue;
            }else{
               return pointer;
            }
        }

    }catch(error){
        console.log(error);
    }
}

module.exports = findMissingNumber;
