function helloString(message:string):string{

    return message;
}

function helloNumber(message:number):number{
    return message;
}


//더 많은 반복된 함수들 ...
function hello(message:any):any{//모든걸 받아서 모든걸 줌 >>들어오는 인풋에 의해서 달라지는 타이핑이 할수없음
        return message;
}

console.log(hello("pppp").length)
console.log(hello(31).length);//타입이 any라 length가들어감 

function helloGeneric<T>(message:T):T{//T를 이용하면 타입으로 된 로직(연산)이 그 함수 내에서 가능 
 return message;
}
console.log(helloGeneric('oai'))//함수를 호출할때 문자열을 리터럴타입으로 추론으로 되서 나옴 
console.log(helloGeneric(3))
console.log(helloGeneric(true))