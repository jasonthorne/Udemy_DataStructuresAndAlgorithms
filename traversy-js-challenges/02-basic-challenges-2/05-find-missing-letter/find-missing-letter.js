function findMissingLetter(letters) {

    //make string of lowercase letters from letters array:
    ////letters = letters.map(letter => letter.toLowerCase()).join('');

    //https://stackoverflow.com/questions/17572873/how-can-i-check-if-a-string-is-all-uppercase-in-javascript
    /*
    try{

        let isUpperCase = letters[0] === letters[0].toUpperCase();
        console.log(isUpperCase);
 
        letters.forEach((letter)=>{
            console.log(letter);
            //if((letter === letter.toUpperCase()) && (isUpperCase)){
            if(letter === letter.toUpperCase() && isUpperCase ){
                console.log('UH OH');
            }
        });

    }catch(error){
        console.log(error);
    }*/

   

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
