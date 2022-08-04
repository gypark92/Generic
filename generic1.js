"use strict";
function helloString(message) {
    return message;
}
function helloNumber(message) {
    return message;
}
//더 많은 반복된 함수들 ...
function hello(message) {
    return message;
}
console.log(hello("pppp").length);
console.log(hello(31).length); //타입이 any라 length가들어감 
function helloGeneric(message) {
    return message;
}
console.log(helloGeneric('oai')); //함수를 호출할때 문자열을 리터럴타입으로 추론으로 되서 나옴 
console.log(helloGeneric(3));
console.log(helloGeneric(true));
