function findMissingLetter(letters) {

    //make string of lowercase letters from letters array:
    ////letters = letters.map(letter => letter.toLowerCase()).join('');
    letters = letters.join('');
    //grab charcode fo first letter:
    let pointer = letters.charCodeAt(0); 
    for(let i=0;i<letters.length;i++){
        if(letters.charCodeAt(i) === pointer){
            pointer = pointer+1; //increase pointer's char code 
            continue;
        }else{
            return String.fromCharCode(pointer);
        }
    }
}

module.exports = findMissingLetter;
