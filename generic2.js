"use strict";
function helloBasic(message, comment) {
    return message;
}
helloBasic('string', 32); //사용할때 타입을 지정 /지정된타입으로 체킹
helloBasic(32, 11); //들어가는 값에 의해서 T가 추론이 되어 타입지정
