"use strict";
describe('if statement', function () {
    it('should support if in typescript ', function () {
        const examValue = 90;
        if (examValue > 80) {
            console.info('Good');
        }
        else if (examValue > 60) {
            console.info("Not bad");
        }
        else {
            console.info('Try Again');
        }
    });
    it('should support ternary operator in typescript ', function () {
        const value = 80;
        const say = value >= 75 ? "congratulation" : "Try Again";
        console.info(say);
    });
    it('should support switch statement', function () {
        function sayHello(name) {
            switch (name) {
                case "Wildan":
                    return " Hai Wildan";
                    break;
                case "Fathur":
                    return " Hai Fathur";
                    break;
                default:
                    return "Hello";
            }
        }
        console.info(sayHello("Wildan"));
        console.info(sayHello("Fathur"));
    });
});
