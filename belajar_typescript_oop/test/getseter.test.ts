describe('GET dan Setter', ()=> {
    class Category {
        _name? : string

        get name(): string {
            if (this._name) {
                return this._name;
            } else {
                return "empty";
            }
        } 

        set name(value: string){
            if (value !== "string") {
                this._name = value;
            }
        }

    }
    
    it('Should support in class SETTER dan GETTER', () => {
        const category = new Category();
        console.info(category.name);
        
        category.name = "Food";
        console.info(category.name);

        category.name = "";
        console.info(category.name);
    });
});