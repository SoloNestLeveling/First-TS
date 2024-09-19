/**
 * statement and expression
 * 
 * 둘의 차이는 어디까지나 타입스크립트 관점에서 보는 것이다
 */


// statement (문장식)

function statement(x: number, y: number):number {
    return x + y;
}




//expression (표현식)


const expression = function (x: number, y: number):number {
    return x * y
}


const arrowExpression = (x: number, y: number):number => {
    return x + y;

}


//--------------------------------------------------------

/**
 * 둘의 차이점은 표현식은 함수의 시그니처를 타입화 해서 사용 가능하다
 * 함수를 타입화하는것은 어디까지나 타입스크립트에서만 가능 한거라 
 * 위에서 말했듯이 둘의 차이는 타입스크립트의 관점에서 차이이다.
 */


//증명

// 1) 문장식을 이용할떄


function winter(name: string, age: number): string {
    return `안녕하세요 저는 ${name}이고 나이는 ${age}살 입니다.`
}

function karina(name: string, age: number): string {
    return `안녕하세요 저는 ${name}이고 나이는 ${age}살 입니다.`
}


// 2) 표현식을 이용할떄

type sayHelloType = (name: string, age: number) => string  // 함수 시크니처로 타입화하기

const winter2: sayHelloType = (name, age) => {
    return `안녕하세요 저는 ${name}이고 나이는 ${age}살 입니다.`
}

const karina2: sayHelloType = (name, age) => {
    return `안녕하세요 저는 ${name}이고 나이는 ${age}살 입니다.`
}


//그래서 타입스크립트에서는 표현식을 이용하는게 좋다.