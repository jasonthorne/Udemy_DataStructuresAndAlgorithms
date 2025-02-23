function highestScoringWord(words) {

    //https://stackoverflow.com/questions/60141168/get-index-position-of-an-alphabet

    let highestWord = '';
    let highestScore = 0;

    words.split(' ').forEach(word => {
    
        //console.log('word: ',word);
        let wordScore = 0;

        word.split('').forEach(letter=>{
            //console.log('letter is: ', letter);
            //console.log('letter score is: ', letter.toLowerCase().charCodeAt(0) - 96);
            wordScore += letter.toLowerCase().charCodeAt(0) - 96;
            //console.log('wordscore is: ', wordScore);
            if(wordScore > highestScore){{
                highestScore = wordScore;
                highestWord = word;
            }}
        });
    });

    return highestWord;
}

module.exports = highestScoringWord;
