describe(' Polimerphism', () => {
    class Employee {
        constructor(public name: String){

        }
    }
    class Manager extends Employee {

    }

    class VicePresident extends Manager {

    }
    function sayHello(employee: Employee) : void {
        if (employee instanceof VicePresident) {
            const vp = employee as VicePresident;
            console.info(`Hello VP ${vp.name}`);
        } else if(employee instanceof Manager){
            const manager = employee as Manager;
            console.info(`Hello manager ${manager.name}`);
        } else {
            console.info(`Hello employee ${employee.name}`);
        }   
    }
    function sayHelloWrong(employee: Employee) : void {
        if(employee instanceof Manager){
            const manager = employee as Manager;
            console.info(`Hello manager ${manager.name}`);
        } else if (employee instanceof VicePresident) {
            const vp = employee as VicePresident;
            console.info(`Hello VP ${vp.name}`);
        } else {
            console.info(`Hello employee ${employee.name}`);
        }   
    }
    it('should support', () => {
        let employe: Employee = new Employee("Wildan");
        console.info(employe);

        let manager: Manager = new Manager("Fathur");
        console.info(manager)

        let vicePresident: VicePresident = new VicePresident("Rohman");
        console.info(vicePresident);
    })
    it('should support method parameter polymerphism', () => {
        sayHello(new Employee("Wildan"));
        sayHello(new Manager("Fathur"));
        sayHello(new VicePresident("Rohman"));
    })
    it('should support method parameter polymerphism wrong', () => {
        sayHello(new Employee("Wildan"));
        sayHello(new Manager("Fathur"));
        sayHello(new VicePresident("Rohman"));
    })
})