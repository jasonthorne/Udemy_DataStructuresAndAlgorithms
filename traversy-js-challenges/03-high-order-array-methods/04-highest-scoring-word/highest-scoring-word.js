function highestScoringWord(words) {

    //https://stackoverflow.com/questions/60141168/get-index-position-of-an-alphabet

    /*
    You can use the split method to separate the words.
    You can use the map method to calculate the score for each word.
    You can use the reduce method to find the word with the highest score.


    const numbers2 = numbers.map((x, index, array)=>{ //note can pass index of each element too
    console.log(index); //index of ith pos passed in
    //console.log(array); //entire array is passedin
    return x = x+2;

    const number4 = numbers.reduce((total, num) => {
    return total + num; //total is current running total, num is val at current pos
    }, 0); //total starts at passed in 0
    });
});
    */

    /*words.split('')
        .map(letter=>{
            //console.log('letter',letter);
            console.log(letter.toLowerCase().charCodeAt(0) - 96);
            return letter.toLowerCase().charCodeAt(0) - 96
        })
        .reduce((total, current) => {
            console.log('total+current: ', total+current);
            return total+current;
        },0);
        */

        let highestWord = '';

        words.split('')
        .map(letter =>{
            console.log('letter: ',letter);
            return letter.toLowerCase().charCodeAt(0) - 96
        })
        .reduce((total, current) => {
            console.log('total+current: ', total+current);
            return total+current;
        },0);


    //var idx = 'a'.toLowerCase().charCodeAt(0) - 96;
    //console.log(idx);
}

module.exports = highestScoringWord;
