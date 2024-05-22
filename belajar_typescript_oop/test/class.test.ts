describe('class',  () => {
    class Customer {
        constructor(){
            console.info('Create new Customer')
        }
    }

    class Order {

    }

    it('should can create class',  ()=>{
     
        const customer: Customer = new Customer();
        const order: Order = new Order();

    })

    it('should can create constuctor',  ()=>{
        new Customer();
        new Customer();

    })
})