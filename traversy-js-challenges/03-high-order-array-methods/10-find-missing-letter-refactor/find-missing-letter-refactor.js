function findMissingLetter(letters) {
  
    const charCodes = letters.sort().map(letter => letter.charCodeAt(0));
    let prevCharCode = (charCodes[0]-1); //init with code before 1st
    let missingLetter = '';
    
    charCodes.forEach((charCode) => {
        if(charCode !== (prevCharCode+1)){
            missingLetter = String.fromCharCode(charCode-1);
        }
        prevCharCode = charCode;
    });

    return missingLetter;
}

module.exports = findMissingLetter;
