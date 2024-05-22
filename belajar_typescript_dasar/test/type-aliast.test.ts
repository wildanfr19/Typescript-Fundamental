import {Category, Product} from "../src/type-alias";

describe('Type Alias', function(){
    it('Should support in typescript', function(){
        const category: Category = {
            id: "1",
            name: "Wildan"
        }

        const product: Product = {
            id: "1",
            name: "Samsung S20",
            price: 2000000,
            category: category
        }

        console.info(category)
        console.info(product)
    });
});