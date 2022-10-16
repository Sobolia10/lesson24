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


//l2

class MyString {
    constructor(string) {
        this._someString = string;
    }

    reverse(param) {
        if (param == '')
            return [...this._someString].reverse().join("");
    }

    ucFirst(param) {
        return this._someString.charAt(0).toUpperCase() + this._someString.slice(1);
    }

    ucWords(param) {
        let result = '';
        let ar = this._someString.split(' ');
        for (let i = 0; i < ar.length; i++) {
            result += ar[i][0].toUpperCase() + ar[i].substring(1) + ' '
        }

        return result;
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


let myString = new MyString('soboleva olga');
console.log(myString.reverse());
console.log('UsFirst:' + myString.ucFirst());
console.log('ucWords:' + myString.ucWords());

