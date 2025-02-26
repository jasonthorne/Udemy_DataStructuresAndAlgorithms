function validAnagrams(str1, str2) {

    //count frequencies with reduce:
    //https://www.geeksforgeeks.org/count-frequency-of-an-array-item-in-javascript/

    const getFrequencyArray = (str) => {
        let strArray = str.split('').sort();

        /*const frequenciesArray = Array.from(new Set([...strArray])).map(char =>{
            return strArray.reduce((count, x) => x === char ? count + 1 : count, 0);
        });
         return frequenciesArray;
        */

        const frequency = {};
        
        new Set([...strArray]).forEach(char =>{
            //return strArray.reduce((count, x) => x === char ? count + 1 : count, 0);
            frequency[char] = strArray.reduce((count, x) => x === char ? count + 1 : count, 0);
        });

        console.log(frequency);
       
    };


    /*
    const a = [1, 2, 3, 2, 1, 2, 3, 1];
    console.log(frequency(a, 2)); 


    new Set([...duplicates]
    */


   

    /*const getFrequency = (array)=>{

        const frequencies = [];
        new Set([...array]).forEach(char => {
            //console.log(char);
            //console.log(array);
            //return array.reduce((count, x) => x === item ? count + 1 : count, 0);
            ////arr.reduce((count, x) => x === item ? count + 1 : count, 0);
            let argh = array.reduce((count, x) => x === 'p' ? count + 1 : count, 0);
            console.log(argh);
            //frequencies.push(array.reduce((count, x) => x === char ? count + 1 : count, 0));
        });
        return frequencies;
    };*/

    //const a = [1, 2, 3, 2, 1, 2, 3, 1];
    //console.log(frequency(a, 2)); 

    /*const str1Freqencies = [];

    const myArraySet = Array.from(new Set([...str1].sort()));



    myArraySet.forEach(char => {
        str1Freqencies.push(getFrequency(str1, char));
    });

   

    console.log(str1Freqencies);*/

    //Array.from(new Set([...duplicates]));

    
    //console.log(getFrequency(str1, 'p')); 

    //console.log(str1.split('').sort())

    const a = ['1', '2', '3', '2', '1', '2', '3', '1']; /*[1, 2, 3, 2, 1, 2, 3, 1];*/
    //console.log(getFrequency(str1.split('').sort(), 'p'))

    /*str1.split('').sort().forEach(char => {
        getFrequency(char);
    });*/

    ///////////////str1 = str1.split('').sort();

    //const testArray = Array.from(new Set([...str1]));
    
    /*const str1Frequencies = [];

    //testArray.forEach(char =>{
    Array.from(new Set([...str1])).forEach(char =>{
        console.log(getFrequency([...str1], char));
        str1Frequencies.push(getFrequency([...str1], char));
    });

    console.log(str1Frequencies);

    //-----------------------

    const str1Frequencies2 = Array.from(new Set([...str1])).map(char =>{
        return getFrequency([...str1], char);
    });

    console.log(str1Frequencies2);*/

    //-------------------
    //console.log(getFrequencyArray(str1));
    //console.log(getFrequencyArray(str2));

    
    //const checkFrequencies = numbers.every((num)=> typeof num === 'number' /*num>0*/);
    const str1Frequencies = getFrequencyArray(str1);
    const str2Frequencies = getFrequencyArray(str2);
    console.log(str1Frequencies);
    console.log(str2Frequencies);

    /*const checkFrequencies = str2Frequencies
        .every((frequency, index) => {
            console.log(str2Frequencies[index]);
            console.log(frequency);
            return (frequency === str2Frequencies[index])
             && (frequency === str1Frequencies[index]);
        });
    
    return checkFrequencies;*/


    /*

    const numbers2 = numbers.map((x, index, array)=>{ //note can pass index of each element too
    console.log(index); //index of ith pos passed in
    //console.log(array); //entire array is passedin
    return x = x+2;
});




    */
}

module.exports = validAnagrams;
