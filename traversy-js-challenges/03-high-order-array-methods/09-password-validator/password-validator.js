function validatePassword(password) {

    /*
    The password must be at least 8 characters long.
    The password must contain at least one uppercase letter.
    The password must contain at least one lowercase letter.
    The password must contain at least one digit.
    The function should return true if the password is valid according to the criteria, and false otherwise.
    
    https://stackoverflow.com/questions/8935632/check-if-character-is-number
    */

    password = password.split('');

    return password.length >=8
        && password.some(char => char === char.toUpperCase())
        && password.some(char => char === char.toLowerCase())
        && password.some(char => {
            /*return (char.charCodeAt(0) >= "0".charCodeAt(0)) 
                && (char.charCodeAt(0) <= "9".charCodeAt(0))*/
            return !isNaN(char);
        });

}

module.exports = validatePassword;
