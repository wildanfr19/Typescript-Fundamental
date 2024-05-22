"use strict";
describe('Propertis', () => {
    class Customer {
        constructor(id, name) {
            this.id = id;
            this.name = name;
        }
    }
    it('should can have properties ', () => {
        const customer = new Customer(1, "John");
        customer.age = 26;
        console.info(customer.id);
        console.info(customer.name);
        console.info(customer.age);
        console.info(customer);
    });
});
