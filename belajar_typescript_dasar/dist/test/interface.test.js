describe('interface typescript', function () {
    it('Should support interface in typescript', function () {
        const seller = {
            id: 1,
            name: "Wildan",
            nib: '2232332',
            npwp: "434344",
        };
        console.info(seller);
    });
    it('Should support add function interface in typescript', function () {
        const Add = (value1, value2) => {
            return value1 + value2;
        };
        expect(Add(2, 2)).toBe(4);
    });
    it('Should support indexable interface in typescript', function () {
        const names = ['Wildan', 'Fathur', 'Rohman'];
        console.info(names);
    });
    it('Should support indexable for non  number index', function () {
        const dictionary = {
            "name": "Wildan",
            "address": "Karawang"
        };
        expect(dictionary['name']).toBe("Wildan");
        expect(dictionary['address']).toBe("Karawang");
    });
    it('Should support indexable for extends interface', function () {
        const employee = {
            id: "1",
            name: "wildan",
            division: "IT"
        };
        console.info(employee);
        const manager = {
            id: "2",
            name: "fathur",
            division: "IT",
            numberOfEmployee: 10
        };
        console.info(manager);
    });
    it('Should support function interface', function () {
        const person = {
            name: "Wildan fathur",
            sayHello: function (name) {
                return `Hello ${name}, my name is ${this.name}`;
            }
        };
        console.info(person.sayHello("Budi"));
    });
    it('Should support intersection types', function () {
        const domain = {
            id: "1",
            name: "Wildan"
        };
        console.info(domain);
    });
    it('Should support types assertions', function () {
        const person = {
            name: "Wildan",
            age: 27
        };
        const person2 = person;
        console.info(person2);
    });
});
export {};
