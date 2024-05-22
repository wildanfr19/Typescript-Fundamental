"use strict";
describe('arrray', function () {
    it('should same with the javascript', function () {
        const names = ['eko', 'wildan', 'rohman'];
        const values = [1, 2, 3];
        console.info(names);
        console.info(values);
    });
    it('should support readonly array', function () {
        const hobbies = ['menulis', 'membaca'];
        console.info(hobbies);
        console.info(hobbies);
    });
    it('should support tuple', function () {
        const person = ['Wildan', 'Fathur', 30];
        console.info(person);
        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);
    });
});
