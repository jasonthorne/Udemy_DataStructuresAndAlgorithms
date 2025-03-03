function analyzeCarMileage(cars) {

/* Output:
{  
    averageMileage: 23333.33,
    highestMileageCar: { make: "Honda", model: "Civic", year: 2019, mileage: 30000 },
    lowestMileageCar: { make: "Ford", model: "Mustang", year: 2021, mileage: 15000 },
    totalMileage: 70000
 }
    Calculate the average mileage of all cars.
    Find the car with the highest mileage.
    Find the car with the lowest mileage.
    Calculate the total mileage of all cars combined.
*/

/*
const number4 = numbers.reduce((total, num) => {
   return total + num; //total is current running total, num is val at current pos
}, 0); //total starts at passed in 0


*/

const totalMileage = cars.reduce((currTotal, currCar) => currTotal + currCar.mileage,0);
const averageMileage = totalMileage/cars.length;
//const highestMileageCar = cars.mileage.max();

/*//add to 'frequencies' obj, letter's value as key and it's frequency as value
frequencies[char] = strArray.reduce((count, x) => x === char ? count + 1 : count, 0);
});

let numbers = [3, 7, 2, 8, 5];
let max = numbers.reduce((accumulator, currentValue) => {
    return Math.max(accumulator, currentValue);
}, numbers[0]);

*/

const highestMileageCar = cars.reduce((prevCar, currCar)=>{
    //return Math.max(currMileage, currCar.mileage); 

    console.log(currCar.mileage)
    console.log(prevCar.mileage)

    /*if(currCar.mileage > prevCar.mileage){
        return currCar;
    }*/
},cars[0].mileage);

console.log(highestMileageCar)
//const lowestMileageCar =


}

module.exports = analyzeCarMileage;
