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

