function validAnagrams(str1, str2) {

    //count frequencies with reduce:
    //https://www.geeksforgeeks.org/count-frequency-of-an-array-item-in-javascript/

    const getFrequencies = (str) => {
        let strArray = str.split('').sort();

        const frequencies = {};
        
        new Set([...strArray]).forEach(char =>{ //dump string's letters into set, to spin through unique values
            //add to 'frequencies' obj, letter's value as key and it's frequency as value
            frequencies[char] = strArray.reduce((count, x) => x === char ? count + 1 : count, 0);
        });
        return frequencies;
    };

    const str1Frequencies = getFrequencies(str1);
    const str2Frequencies = getFrequencies(str2);
    //console.log(str1Frequencies);
    //console.log(str2Frequencies);

    const compareObjects = (obj1, obj2)=>{
        return Object.keys(obj1).every(key =>{
            return obj1[key] === obj2[key]; //keys of obj1 exist with same value as obj2
        }) && Object.keys(obj2).every(key =>{
            return obj2[key] === obj1[key]; //keys of obj2 exist with same value as obj1
        });
    };

    return compareObjects(str1Frequencies, str2Frequencies);
}

module.exports = validAnagrams;
