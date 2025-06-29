
class MyModule{
    constructor(name){
        this.name = name
    }
    getName(){
        return this.name
    }
    setName(name){
        this.name = name;
    }
}

// module.exports = new MyModule("Wolfii")
module.exports = MyModule