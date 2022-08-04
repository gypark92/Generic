//extends 

class PersonExtends<T extends string|number>{//string과 number만 유효함 >>제네릭을 제한해주는게 좋음 
    private _name: T;
    constructor(name: T){
        this._name=name;
    }
}
new PersonExtends("A")
new PersonExtends(1)
//new PersonExtends(true)