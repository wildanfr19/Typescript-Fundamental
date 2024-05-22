describe('Error handling', ()=> {
    class validationError extends Error {
        constructor(public message: string){
            super(message);
        }
    }

    function doubleIt(value: number): number {
        if (value < 0) {
            throw new validationError("Value cannot be less than 0");
            
        }
        return value*2;
    }
    it('should support', () => {
        try {
            const result = doubleIt(-1);
            console.info(result);
        } catch (e) {
            if (e instanceof validationError) {
                console.info(e.message);
            }
        }
    })
})