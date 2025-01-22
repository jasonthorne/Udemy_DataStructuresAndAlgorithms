function countOccurrences(str, char) {
    let count=0;
    str.split('').forEach((strChar)=>{
        if(strChar===char) count++;
    });
    return count;
}

module.exports = countOccurrences;
