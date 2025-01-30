function areAllCharactersUnique(str) {

    //return true on empty string:
    if (typeof str==="string" && str.length===0){
        return true;
    } 

    str=str.split('').sort();
    const strSet = new Set(str);

    for(let i=0;i<=str.length;i++){
       if(str[i] !== Array.from(strSet)[i]){
           return false;
       }
    }
   return true;
}

module.exports = areAllCharactersUnique;
