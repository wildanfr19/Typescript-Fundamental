"use strict";
describe('Object Type', function () {
    it('Should support in typescript', function () {
        const person = {
            id: "1",
            name: "WIldan",
        };
        console.info(person);
        person.id = "2";
        person.name = "Fathur";
        console.info(person);
    });
});
