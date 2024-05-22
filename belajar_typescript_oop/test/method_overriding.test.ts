describe('Method Overriding', () => {
    class Employee {
        name: string;

        constructor(name: string){
            this.name = name
        }

        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}`)
        }
    }

    class Manager extends Employee {
        sayHello(name: string): void {
            super.sayHello(name)
            console.info(` I am your manager`)
        }


    }

    it('should support typescript in method overriding', ()=> {
        const employee = new Employee("Wildan");
        employee.sayHello("Budi")

        const manager = new Manager("Wildan");
        manager.sayHello("Budi")
    })
})