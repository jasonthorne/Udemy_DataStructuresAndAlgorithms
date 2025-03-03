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

const highestMileageCar = cars.filter((car)=>{
    return car.mileage;
});
console.log(highestMileageCar)
//const lowestMileageCar =


}

module.exports = analyzeCarMileage;
