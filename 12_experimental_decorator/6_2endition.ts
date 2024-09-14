

//데커레이커는 특정 인자 모음으로 호출하는 함수로, 함수 인자는 자바스크립트 런타임이 데커레이터를 적용한 클래스의 정보를 포함해 자동으로 채워준다.

//클래스를 정의할 때만 데커레이터 함수가 호출된다.


function simpleDecorator(constructor: Function) {
    console.log("simpleDecotator Called")
}

function simpleDecorator2(constructor: Function) {
    console.log("simpleDecorator Called2")
}


@simpleDecorator2   // 이런식의 다중 데코레이터는 평가는 코드 펴가처럼 위에서 아래로 펴가가 되나, 호출은 밑에서 위로 올라간다. 
@simpleDecorator
class SimpleClass { } // 자바스크립트 런타임은 class 정의를 읽고 이후 클래스 구조를 생성, 그라고 정의된 클래스의 데코레이터 함수가 실행된다.

// 데코레이터 함수는 단 한번만 실행되고 인스턴스 생성시 호출되지 않는다.

const simple1 = new SimpleClass();
const simple2 = new SimpleClass();

console.log(simple1)
console.log(simple2)


console.log("----------------------------Factory--------------------------")


//데코레이터 팩토리 - 인자를 받게 하려면 데코레이터를 반환하도록 하는 함수를 만든다.

function decoratorFactory(name: string, age: number) {

    return function (constructor: Function) {
        console.log(`안녕하세요 저는 ${name}이고 나이는 ${age}입니다.`)
    }
}

@decoratorFactory("김민정", 23)
class SimpleClass2 { }


console.log('------------------------Constructor Argument------------------')


//생성자 인자 (constructor:Function) - 자바스크립트 런타임은 생상자 인자를 자동으로 채워준다.

function FactoryClass() {
    return function (constructor: Function) {
        console.log(`${constructor}가 실행 되었습니다.`)
        Object.freeze(constructor)

    }
}

function addProperty<T extends { new(...args: any[]): {} }>(constructor: T) {

    Object.freeze(constructor)
    return class extends constructor {
        age = 23;
        constructor(...args: any[]) {
            super(...args)
        }
    }

}

@addProperty
@FactoryClass()
class ConstructorClass {
    name: string;

    constructor(name: string) {
        this.name = name
    }

    say() {
        return `안녕하세요 ${this.name}입니다.`
    }

}

const kimMinJung = new ConstructorClass("winter")
console.log(kimMinJung)
console.log(Object.isFrozen(ConstructorClass.prototype.constructor))





console.log('------------------------------------------')


@idol
class Idol {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}


const winter = new Idol("winter", 23)
console.log(winter)


function idol<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        part = "visual";

        constructor(...args: any[]) {
            super(...args)
        }

    }
}


console.log(Idol.prototype)