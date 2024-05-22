import { sayHello } from "../src/say-hello";
describe("hello", function () {
    it("should say hello world iam now using TypeScript", function () {
        const name = "Hello Wildan";
        expect(sayHello('Wildan')).toBe("Hello Wildan");
    });
});
