function helloArray<T>(message:T[]):T{
    return message[0];
}
helloArray(['g','a']);
helloArray(['a',5]);//유니온타입 문자열이거나 숫자 

function helloTuple<T,U>(message:[T,U]): T{
 return message[0];
}

helloTuple(['a','b']);
helloTuple(['a',5]);