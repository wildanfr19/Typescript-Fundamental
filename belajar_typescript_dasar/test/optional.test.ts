describe('say hello null dan undefined', function(){
    it('should support in null and undefined typescript', function(){
        function sayHello(name?: string | null){
            if (name) {
                console.info(`Hello ${name}`);
            } else {
                console.info('Hello')
            }
        }
        sayHello("Wildan")
        const name: string | undefined = undefined
        sayHello(name)
        sayHello(null)
    })
})