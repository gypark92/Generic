class Person<T, K>{//T의 유효범위는 클래스 전체에서 발생함 
    private _name:T;
    private _age: K;
    constructor(name:T,age: K){
        this._name = name;
        this._age= age;
    }
}
new Person("A",21);
new Person<string,number>('B',1)//지정된타입으로 