describe('Super constructor OOP typescript', ()=> {
    class Person {
        name: string;

        constructor(name: string){
            this.name = name;
        }
    }
    class Employee extends Person {
        department: string;

        constructor(name: string, department: string){
            super(name)
            this.department = department;
        }
    }

    it('should support super-constructor in typescript OOP', () => {
        const employee = new Employee("Wildan","Tech");
        console.info(employee.name)
        console.info(employee.department);
    })
})