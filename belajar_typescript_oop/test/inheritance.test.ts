describe('Inheritance', ()=> {
    class Employee {
        name: string

        constructor(name: string){
            this.name =  name;
        }
    }

    class Manager extends Employee {

    }

    class Directur extends Manager {

    }

    it('should support inheritance in typescript', ()=> {
        const employee = new Employee("Wildan");
        console.info(employee);

        const manager = new Manager("Fathur");
        console.info(manager)

        const directur = new Directur("Rohman");
        console.info(directur);
    })
})