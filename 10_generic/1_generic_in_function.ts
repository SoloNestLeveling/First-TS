/**
 * generic 함수에서 사용하기
 * 
 * 나중에 어떤 타입을 받을지 결정한다.
 */

function genericWithFunction<T>(value: T): T {
    return value;
}

const functionValue = genericWithFunction<string>('김민정');

// <string>을 적지 않아도 타입을 유추 할 수 있다.
const functionValue2 = genericWithFunction('123');
//const로 선언 했기때문에 구체적인 타입인 '123' 타입 이라고 나온다.



//제너릭은 당연히 여러개 사용 할 수 있다.
function multipleGeneric<X, Y, Z>(x: X, y: Y, z: Z) {
    return {
        x, y, z,
    }
}

const multipleGenericResult = multipleGeneric<number, boolean, string>(
    123,
    true,
    '김민정',

)


// 튜플 제너릭 하기

function getTuple<X, Y>(val1: X, val2: Y) {
    return [val1, val2] as const
}

const tuple = getTuple(true, 100);

//------------------------------------------------------------------------------

// class 제너릭


class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Animal {
    bread: string;
    personality: string;

    constructor(bread: string, personality: string) {
        this.bread = bread;
        this.personality = personality;
    }
}

function classGeneric<T extends { new(...args: any[]): {} }>(constructor: T, ...args: any[]) {
    return new constructor(...args);
}

console.log(classGeneric(Animal, '포메리안', '착함',));
console.log(classGeneric(Person, '윈턴', 22));



function ainmalGeneric<T extends { new(bread: string, personality: string): Animal }>(constructor: T, bread: string, personality: string) {
    return new constructor(bread, personality)
}


console.log(ainmalGeneric(Animal, '치와와', '활발함'));




class AespaMembers {
    name: string;
    age: number;
    part: string;

    constructor(name: string,
        age: number,
        part: string) {
        this.name = name;
        this.age = age;
        this.part = part;
    }
}



function memberOfAespa<T extends { new(...args: any[]): InstanceType<T> }>(constructor: T, ...args: any[]): InstanceType<T> {
    return new constructor(...args);
}

const winter = memberOfAespa(AespaMembers, '김민정', 23, 'visual');
console.log(winter);