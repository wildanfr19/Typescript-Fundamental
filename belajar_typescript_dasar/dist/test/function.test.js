"use strict";
describe('function in typescript', function () {
    it('should support function in typescript', function () {
        function sayHello(name) {
            return `Hello ${name}`;
        }
        expect(sayHello("Budi")).toBe("Hello Budi");
        function printHello(name) {
            console.info(`Hello ${name}`);
        }
        printHello("wildan");
    });
    it('should support function default value parameter in typescript', function () {
        function sayHello(name = "Guest") {
            return `Hello ${name}`;
        }
        expect(sayHello()).toBe("Hello Guest");
        expect(sayHello("wildan")).toBe("Hello wildan");
    });
    it('should support function rest parameter', function () {
        function sum(...values) {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }
        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });
    it('should support optional parameter', function () {
        function sayHello(firstName, lastName) {
            if (lastName) {
                return `Hello ${firstName} ${lastName}`;
            }
            else {
                return `Hello ${firstName}`;
            }
        }
        expect(sayHello("Wildan")).toBe("Hello Wildan");
        expect(sayHello("Wildan", "Fathur")).toBe("Hello Wildan Fathur");
    });
    it('should support function overloading', function () {
        function callMe(value) {
            if (typeof value === 'string') {
                return value.toUpperCase();
            }
            else {
                return value * 10;
            }
        }
        expect(callMe(10)).toBe(100);
        expect(callMe("wildan")).toBe("WILDAN");
    });
    it('should support function overloading', function () {
        function callMe(value) {
            if (typeof value === 'string') {
                return value.toUpperCase();
            }
            else {
                return value * 10;
            }
        }
        expect(callMe(10)).toBe(100);
        expect(callMe("wildan")).toBe("WILDAN");
    });
    it('should support function as parameter', function () {
        function sayHello(name, filter) {
            return `Hello ${filter(name)}`;
        }
        function toUpper(name) {
            return name.toUpperCase();
        }
        expect(sayHello("Wildan", toUpper)).toBe("Hello WILDAN");
        expect(sayHello("Wildan", function (name) {
            return name.toUpperCase();
        })).toBe("Hello WILDAN");
        expect(sayHello("Wildan", (name) => name.toUpperCase())).toBe("Hello WILDAN");
    });
});
