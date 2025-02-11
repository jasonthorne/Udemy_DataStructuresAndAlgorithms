function validateEmail(email) {

    /*
    validateEmail('john@gmail.com'); // true
    validateEmail('john@gmail'); // false
    */

    const domains = ['.com', '.org', '.ie'];

    //return that index of '@' is greater than 0, i.e. not at the start of string (-1 is returned if not found)
    return email.indexOf('@')>0 && domains.some(
        (domain) => email.endsWith(domain) //and that string ends with a domain from domains
    );
}

module.exports = validateEmail;
