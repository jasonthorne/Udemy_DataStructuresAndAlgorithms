function highestScoringWord(words) {

    //https://stackoverflow.com/questions/60141168/get-index-position-of-an-alphabet

    /*
    You can use the split method to separate the words.
    You can use the map method to calculate the score for each word.
    You can use the reduce method to find the word with the highest score.
    */

    words.split('')
        .map(letter=>{
            console.log('letter',letter);
        });


    var idx = 'a'.toLowerCase().charCodeAt(0) - 96;
    console.log(idx);
}

module.exports = highestScoringWord;
