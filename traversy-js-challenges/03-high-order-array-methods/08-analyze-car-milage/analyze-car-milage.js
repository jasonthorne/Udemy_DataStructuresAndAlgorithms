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

    const totalMileage = cars.reduce((currTotal, currCar) => currTotal + currCar.mileage,0);
    const averageMileage = totalMileage/cars.length;
    
    const highestMileageCar = cars.reduce((prevCar, currCar)=>{
        //return the car with the greatest milage:
        if(currCar.mileage > prevCar.mileage){
            return currCar;
        }else{return prevCar}

    },cars[0]); //start prevCar as first cart in list

    const lowestMileageCar = cars.reduce((prevCar, currCar)=>{
        //return the car with the least milage:
        if(currCar.mileage < prevCar.mileage){
            return currCar;
        }else{return prevCar}
    },cars[0]); //start prevCar as first cart in list

    return {
        averageMileage: averageMileage,
        highestMileageCar: highestMileageCar,
        lowestMileageCar: lowestMileageCar,
        totalMileage: totalMileage
    };
}

module.exports = analyzeCarMileage;
