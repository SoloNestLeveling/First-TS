/**
 * Class decorator
 * 
 * 아직 타입스트립트에서는 기본으로 탑제된 기능은 아니지만, nest.js에서는 엄청 많이 쓰는기능이다.
 */





@testDecorator
@frozenDecorator
@SayDate(2023)
@ChangeClass
class Idol {
    name: string;
    age: number;
    state: string

    constructor(name: string, age: number, state: string) {
        this.name = name;
        this.age = age;
        this.state = state;
    }
}

function testDecorator(constructor: Function) {
    console.log(constructor);
}

function frozenDecorator(constructor: Function) {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);

}

const Aimyong = new Idol('아이묭', 27, '일본');



console.log(Object.isFrozen(Object.getPrototypeOf(Aimyong)));
console.log(Object.getPrototypeOf(Aimyong))

console.log(Aimyong);

Aimyong.name = "오경민";
console.log(Aimyong)



/**
 * decorator factor
 * 
 * 파라미터를 넘겨 준다
 */

function SayDate(date: number) {
    return function testDecorator(constructor: Function) {
        console.log(`${date}: 안녕하세요 저는${constructor}입니다.`);
    }
}


function ChangeClass<T extends { new(...argu: any[]): {} }>(constructor: T) {
    return class extends constructor {
        part = 'vocal'

        constructor(...argu: any[]) {
            super(...argu)
        }
    }
}


//-------------------------------------------------------------

@EachMembers
class AespaMembers {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        return `안녕하새요 저는${this.name}입니다`
    }
}


function EachMembers<T extends { new(...args: any[]): {} }>(constructor: T, ...args: any[]) {
    return class extends constructor {
        constructor(...args: any[]) {
            super(...args);
        }
    }

}

const member1 = new AespaMembers('김민정', 22);
console.log(member1);






//---------------------------------------

interface PersonInfo<T> {
    name: T;
    age: T;
    state: T;
}


class Person<T>{
    personInfo: PersonInfo<T>;
    personality: string;

    constructor(personInfo: PersonInfo<T>, personality: string) {
        this.personInfo = personInfo;
        this.personality = personality;
    }
}


const winter = new Person<string | number>({ name: '김민정', age: 23, state: '대한민국' }, '착함')
console.log(winter);






