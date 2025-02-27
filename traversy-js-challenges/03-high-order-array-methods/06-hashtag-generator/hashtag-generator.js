function generateHashtag(str) {

    if(str.trim().length === 0 || str.trim().length> 140){
        return false;
    }else{
        return '#' + str.split(' ').map(word =>{
            return word.charAt(0).toUpperCase() + word.substr(1);
        }).join(""); //joining with empty string removes ',' added during join
    }
}

module.exports = generateHashtag;
