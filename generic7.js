"use strict";
//type Keys= keyof IPerson;//특정한 타입이 만들어짐 
//const keys :Keys ="age"//객체에 keyof 붙이면 결과물의 타입은 key의 이름으로 문자열의 유니온타입으로 나온다 
const person = {
    name: "A",
    age: 1
};
//IPerson[keyof IPerson]
//=> IPerson['name'|'age']
//=> IPerson['name']|['age']
//=> string |number 의 유니온타입이 된다 
function getProp(obj, key) {
    //제네릭으로 특정한 타입을 지정 >>IPerson을 T로/ K는 keyof T의 의해서 제한된 형태(name or age
    return obj[key];
}
getProp(person, 'age'); //지정된 타입으로 나옴 
function setProp(obj, key, val) {
    obj[key] = val;
}
setProp(person, 'name', 'A');
