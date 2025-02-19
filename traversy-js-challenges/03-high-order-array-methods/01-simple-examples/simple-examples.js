const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */

const numbers2 = numbers.map((x, index, array)=>{ //note can pass index of each element too
    console.log(index); //index of ith pos passed in
    //console.log(array); //entire array is passedin
    return x = x+2;
});

console.log(numbers2);


/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */

const numbers3 = numbers.filter((x)=>{
    return x%2 === 0;
});

console.log(numbers3);

/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */

const number4 = numbers.reduce((total, num) => {
   return total + num; //total is current running total, num is val at current pos
}, 0); //total starts at passed in 0


console.log(number4);


/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */

numbers.forEach(num => console.log('num is:', num));

 /**
 * find: Returns the first array element that satisfies a specified condition.
 */

const found = numbers.find((x) => x%2===0);
console.log('found: ',found);

/**
 * some: Checks if at least one array element satisfies a condition.
 */

 console.log(numbers.some(x=>x===2));

/**
 * every: Checks if all array elements satisfy a condition.
 */

const checkType = numbers.every((num)=> typeof num === 'number' /*num>0*/);

//explanation on typeOf:
//https://stackoverflow.com/questions/17440517/what-is-the-best-way-to-check-variable-type-in-javascript

 console.log(checkType);
