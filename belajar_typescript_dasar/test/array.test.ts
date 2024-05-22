describe('arrray', function(){
    it('should same with the javascript', function(){
        const names: string[] = ['eko','wildan','rohman']
        const values: number[] = [1,2,3];

        console.info(names);
        console.info(values);
    });

    it('should support readonly array', function(){
        const hobbies: ReadonlyArray<string> = ['menulis','membaca'];
        console.info(hobbies);
        console.info(hobbies);
    });

    it('should support tuple', function(){
        const person: readonly [string, string, number] = ['Wildan','Fathur', 30];
        console.info(person);
        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);
    });
});