function findMissingLetter(letters) {
    //indMissingLetter(['a', 'b', 'c', 'd', 'f']); // => "e"

    /*

    const numbers3 = numbers.filter((x)=>{
    return x%2 === 0;
    });
    */

    const charCodes = letters.sort().map(letter => letter.charCodeAt(0));
    console.log(charCodes)

    const test = charCodes.filter((charCode, index)=>{
        //if(letter === 'c') console.log(letters[index]);
        //return letter === 'c';
        //return letter.ch

        //letters.charCodeAt(0)

        //let testty = array[index];

       // console.log(testty)

       //console.log(testty.charCodeAt(0))

       if((charCode+1) !== charCodes[(index+1)]){
            //console.log(String.fromCharCode((array[index].charCodeAt(0)+1)));
            console.log(String.fromCharCode([charCode+1]))
            return String.fromCharCode([charCode+1])
        }
        
    });

   console.log(test)

    ///return test;
    
    //const letterCharCodes = letters.sort().map(letter => letter)
}

module.exports = findMissingLetter;
