function arrayIntersection(array1, array2) {
    try{
        const matchedNums = new Set();

        new Set(array1).forEach((num)=>{
            if(isNaN(num) || !num>0){throw 'positive numbers only'}
            else if(array2.includes(num)){
                matchedNums.add(num);
            }
        });

        return [...matchedNums];

    }catch(error){console.log(error);}

}

module.exports = arrayIntersection;
