//l1

class Worker {
    static name = 'Olya';
    static surname = 'Soboleva';
    static rate = 99;
    static days = 365;

    static setName(newName) {
        name = newName;
    }

    static getSalary() {
        return this.rate * this.days;
    }
}


console.log(`${Worker.surname} ${Worker.surname}`);
console.log(Worker.getSalary());


//l3

class Validator {
    constructor() {
    }

    isEmail(someString) {

        if (someString?.includes('@'))
            return true;
        return false
    }

    isDomain(someString) {
        if (someString.includes('https://') || someString.includes('http://')) {
            return true;
        }
        return false
    }

    //rewrite
    isDate(someDate) {
        const result = Date.parse(someDate);
        if (result > 0)
            return true;
        else false;
    }

    isPhone(somePhone) {
        const phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        const result = somePhone.match(phoneNumberPattern);
        return result != null;
    }
}


let validator = new Validator();

console.log(validator.isEmail('sobolia@inbox.ru'));

console.log(validator.isDomain('https://gogole.com'));
console.log(validator.isDate('01.13.2022'));
console.log(validator.isPhone('+375(29)322-13-02'));