"use strict";
describe('type data any', function () {
    it('should support in typescript', function () {
        const person = {
            id: 1,
            name: "Wildan Fathur Rohman",
            age: 27
        };
        person.age = 28;
        person.address = 'Indonesia';
        console.info(person);
    });
});
