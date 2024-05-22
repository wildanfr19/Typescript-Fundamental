import { Customer, customerType } from "../src/enum";

describe('enum', function(){
    it('Should support in typescript', function(){
        const customer: Customer = {
            id: 1,
            name: "Wildan",
            type: customerType.GOLD
        }

        console.info(customer);
    });
});