describe('instance of', ()=> {
   class Employee {}
   class Manager{}

   const budi = new Employee();
   const wildan = new Manager();

   it('should have problem using typeof', ()=> {
        console.info(typeof budi);
        console.info(typeof wildan);
   })
   it('should using instanceof', ()=> {
        expect(budi instanceof Employee).toBe(true)
        expect(budi instanceof Manager).toBe(false)

        expect(wildan instanceof Employee).toBe(false)
        expect(wildan instanceof Manager).toBe(true)
  })


})