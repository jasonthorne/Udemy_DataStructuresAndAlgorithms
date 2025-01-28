function countVowels(str) {
    let vowelCount = 0;
    const vowels = ['a','e','i','o','u'];

    str.toLowerCase().split('').forEach(char => { //split string into arrays of individual chars
        if(vowels.includes(char)){vowelCount++;}
    });
    return vowelCount;
}

module.exports = countVowels;
