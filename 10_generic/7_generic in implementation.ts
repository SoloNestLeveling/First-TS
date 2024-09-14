/**
 * generic in implementation
 */


// implements 단계에서 제너릭 타입을 명시 할 경우

interface FavouritePerson<T, Z, R> {
    name: T;
    sing(year: Z): R
}

class Amyong implements FavouritePerson<string, number, string>{

    name: string;


    constructor(name: string) {
        this.name = name;

    }
    sing(year: number): string {
        return `[${year}] ${this.name}이 노래를 부릅니다.`
    }

}

const amyong = new Amyong('아이묭');
amyong.sing(2023);


// 인스턴스 단계에서 제너릭 타입을 명시 하는 방법


class Amyong2<T, Z, R> implements FavouritePerson<T, Z, R>{

    name: T;
    age: Z;

    constructor(name: T, age: Z) {
        this.name = name;
        this.age = age;
    }
    sing(): R {
        throw new Error("Method not implemented.");
    }


}

const amyong2 = new Amyong2<string, number, void>('아이묭', 27);
console.log(amyong2.sing())




interface Person2<T, Z> {
    name: T;
    sayHello(year: Z): any;
}


class Person<T, Z> implements Person2<T, Z>{
    name: T

    constructor(name: T) {
        this.name = name
    }

    sayHello(year: Z): any {
        return `${year}: ${this.name}이 인사를 합니다.`
    }
}

const winter01 = new Person("김민정");
console.log(winter01.sayHello(2023))
//일반적으로 타입 추론은 변수의 선언부와 초기화를 통해 이루어지기 때문에 T 타입은 클래스 인스턴스를 생성하는 초기화 구문에서 추론되지만,
// Z 타입은 클래스의 메서드의 매개변수로서는 명시적으로 타입을 지정하지 않으면 추론이 어려울 수 있습니다.

