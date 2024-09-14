/**
 * return type
 */

type ReturnTypeSample = ReturnType<(()=>number)>; // 함수의 반환값이 number 임으로 number타입이 된다.





type FunctionSign =(x:number,y:number) =>number;

type FunctionReturnType = ReturnType<FunctionSign>; // FunctionSign의 리턴 타입이 number 임으로 
//FunctionReturnType의 리턴 타입입은 number다