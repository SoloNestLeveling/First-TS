/**
 * interface
 */

interface Person {
    name: string;
    age: number;
    sayHello(): string;
}

class Winter implements Person {
    name: string;
    age: number;


    constructor(name: string, age: number,) {
        this.name = name;
        this.age = age;

    }

    sayHello(): string {
        return `안녕하세요 저는 ${this.name}입니다.`
    }
}

let winter: any = new Winter('김민정', 22);

function typeCheck(x: Person): x is Person {
    return 'age' in typeCheck
}

if (typeCheck(winter)) {
    winter;
}


// interface로 객체의 구조와 타입,속성을 명시함으로써 개발자가 일정한 규약을 따르도록 하기 위함이다!!


// 여러개를 implement하는 것도 가능하다.
// 하지만 주의 할 것은 절대 같은 속성이 있어어서는 안된다. 예를 들어 서로다른 interface에 name 이라는 속성을 같이 가지고있으면 안된다.




/**
 * class를 타입화 하는법
 */


class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}


//constructor화 하는법

interface PersonConstructor {
    new(name: string, age: number): Person; // constructor를 실행하면 Person이 실행되기 때문에 Person이 반환된다고 한다.
}


//Person의 constructor를 interface로 선언했고 이제 Person의 constructor 구조만을 사용하는 함수를 만들어보자

function winter2(constructor: PersonConstructor, name: string, age: number) {
    return new constructor(name, age); // constructor는 정확히 PersonConstructor의 구조를 따른다.
}

console.log(winter2(Person, '김민정', 22));




class Ainmal {
    name: string;
    bread: string

    constructor(name: string, bread: string) {
        this.name = name;
        this.bread = bread;
    }
}

interface AinmalConstructor {
    new(name: string, bread: string): Ainmal;
}

function cat(constructor: AinmalConstructor, name: string, bread: string) {
    return new constructor(name, bread)

}

console.log(cat(Ainmal, '오리', '포메리안'));