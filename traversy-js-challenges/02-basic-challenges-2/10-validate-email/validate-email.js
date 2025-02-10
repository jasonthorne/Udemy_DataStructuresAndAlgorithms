function validateEmail(email) {

    /*
    validateEmail('john@gmail.com'); // true
    validateEmail('john@gmail'); // false


    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.includes("Mango");

    const ages = [3, 10, 18, 20];
    document.getElementById("demo").innerHTML = ages.some(checkAdult);

    function checkAdult(age) {
    return age > 18;
    }

    */

    const domains = ['.com', '.org'];
    return email.includes('@') && email.endsWith(domains.some((domain)=>email.includes(domain)));


    //return email.includes('@') && email.endsWith('.com');

    //ceck if contains @ and .com



}

module.exports = validateEmail;
