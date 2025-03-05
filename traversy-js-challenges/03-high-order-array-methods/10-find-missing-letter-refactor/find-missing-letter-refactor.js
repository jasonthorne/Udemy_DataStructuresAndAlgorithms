function findMissingLetter(letters) {
    //indMissingLetter(['a', 'b', 'c', 'd', 'f']); // => "e"

    /*

    const numbers3 = numbers.filter((x)=>{
    return x%2 === 0;
    });
    */

    const test = letters.sort().forEach((letter, index, array)=>{
        //if(letter === 'c') console.log(letters[index]);
        //return letter === 'c';
        //return letter.ch

        //letters.charCodeAt(0)

        //console.log(letter.charCodeAt(0))

        if(letter.charCodeAt(0));
        
    });

    console.log(test)
    
    //const letterCharCodes = letters.sort().map(letter => letter)
}

module.exports = findMissingLetter;
