"use strict";
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
}
new Person("A", 21);
new Person('B', 1); //지정된타입으로 
