describe('Visibility', ()=> {
    class Counter {
        protected counter: number = 0;

        public implements(): void {
            this.counter++;
        }

        public getCounter(): number {
            return this.counter;
        }
    }
    class DoubleCounter extends Counter {
        public implements(): void {
            this.counter +=2
        }
    }

    it('should support visibility private', ()=>{
        const counter = new Counter();
        counter.implements();
        counter.implements();
        counter.implements();
        console.info(counter.getCounter());
    });
    it('should support visibility protected', ()=>{
        const counter = new DoubleCounter();
        counter.implements();
        counter.implements();
        counter.implements();
        console.info(counter.getCounter());
    });
})