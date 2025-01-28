function removeDuplicates(duplicates) {

    //change set to array:
    //https://www.scaler.com/topics/javascript-set-to-array/

   
    //longer way of doing it:
    /*
    set = new Set();

    duplicates.forEach(element => {
        set.add(element);
    });
    return [...set];
    */

    return Array.from(new Set([...duplicates]));
}

module.exports = removeDuplicates;
