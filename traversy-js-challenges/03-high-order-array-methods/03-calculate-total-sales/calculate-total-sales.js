function calculateTotalSalesWithTax(products, tax) {

    /*
    const products = [
    { name: 'Apple', price: 0.5, quantity: 10 }, 0.5*10 = 5
    { name: 'Banana', price: 0.3, quantity: 20 }, 0.3*20=6
    { name: 'Orange', price: 0.6, quantity: 15 }, 0.6*15=9
    ];
    */

    let total = 0;

     //https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
    products.forEach(product => {
        //total+= Math.round((product.price*product.quantity) * 100) / 100;
        total+=product.price*product.quantity;
    });

    return total + ((tax*total)/100);
}

module.exports = calculateTotalSalesWithTax;
