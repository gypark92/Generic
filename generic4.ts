//타입알리아스 

type HelloFunctionGeneric1 = <T>(message:T) => T;// (매개변수 )=>리턴

const helloFunction1: HelloFunctionGeneric1 =  <T>(message: T ):T =>{
return message
}

//인터페이스

interface HelloFunctionGeneric2{
    <T>(message:T):T;
}

const helloFunction2 : HelloFunctionGeneric2 =<T>(message :T) :T =>{
    return message
}


