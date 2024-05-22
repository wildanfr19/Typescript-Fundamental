"use strict";
describe('Union type', function () {
    it('should support in typescript', function () {
        let sample = "Wildan";
        console.info(sample);
        sample = 100;
        console.info(sample);
        sample = true;
        console.info(sample);
    });
    it('should support typeof operator', function () {
        function process(values) {
            if (typeof values === 'string') {
                return values.toUpperCase();
            }
            else if (typeof values === 'number') {
                return values + 2;
            }
            else {
                return !values;
            }
        }
        expect(process("Wildan")).toBe('WILDAN');
        expect(process(100)).toBe(102);
        expect(process(true)).toBe(false);
    });
});
