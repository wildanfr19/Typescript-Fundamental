"use strict";
describe('say hello null dan undefined', function () {
    it('should support in null and undefined typescript', function () {
        function sayHello(name) {
            if (name) {
                console.info(`Hello ${name}`);
            }
            else {
                console.info('Hello');
            }
        }
        sayHello("Wildan");
        const name = undefined;
        sayHello(name);
        sayHello(null);
    });
});
