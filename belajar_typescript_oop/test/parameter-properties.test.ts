describe('parameter properties', () => {
    class Person {
        constructor(public name: string){

        }
    }

    it('should support parameter properties in typescript', ()=> {
        const person = new Person("Wildan")
        console.info(person)

        person.name = "Budi";
        console.info(person.name)
    })
})