import { Seller } from "../src/seller";
import { Employee, Manager } from "../src/employee";
import { Person } from "../src/person";

describe('interface typescript', function(){
    it('Should support interface in typescript', function(){
        const seller: Seller ={
            id: 1,
            name: "Wildan",
            nib: '2232332',
            npwp: "434344",
        }

        console.info(seller)
    });

    it('Should support add function interface in typescript', function(){
      interface AddFunction {
        (value1: number, value2: number): number;
      }

      const Add: AddFunction = (value1: number, value2:number): number => {
        return value1+value2;
      }
      expect(Add(2,2)).toBe(4)
    });

    it('Should support indexable interface in typescript', function(){
        interface StringArray {
            [index: number]: string
        }

        const names: StringArray = ['Wildan', 'Fathur','Rohman'];
        console.info(names)
    });

    it('Should support indexable for non  number index', function(){
      interface StringDictionary {
          [key: string]: string
      }

      const dictionary: StringDictionary = {
        "name" : "Wildan",
        "address" : "Karawang"
      }
      expect(dictionary['name']).toBe("Wildan")
      expect(dictionary['address']).toBe("Karawang")
  });

  it('Should support indexable for extends interface', function(){
      const employee: Employee = {
        id: "1",
        name: "wildan",
        division: "IT"
      } 

      console.info(employee)

      const manager: Manager = {
        id: "2",
        name: "fathur",
        division: "IT",
        numberOfEmployee: 10
      }
      console.info(manager)

      
  });

  it('Should support function interface', function(){
      const person: Person = {
        name: "Wildan fathur",
        sayHello: function(name: string): string {
          return `Hello ${name}, my name is ${this.name}`
        }
      }

      console.info(person.sayHello("Budi"));
    
  });


    it('Should support intersection types', function(){
      interface HasName {
        name: string
      }
      interface HasId {
        id: string
      }

      type Domain = HasId & HasName

      const domain : Domain = {
        id: "1",
        name: "Wildan"
      }
      console.info(domain)
    
  });

  it('Should support types assertions', function(){
      const person: any = {
        name: "Wildan",
        age : 27
      }

      const person2: Person = person as Person;
      console.info(person2)
    
  });
})