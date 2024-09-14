/**
 * inheritance
 */


class Idol {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    dance() {
        console.log(`Idol: ${this.name}이 춤을 춥니다.`);
    }
}

class Winter extends Idol {
    age: number;

    constructor(name: string, age: number) {
        super(name);
        this.age = age;
    }

    sayHello() {
        console.log(`안녕하세요 저는 ${this.name}이고 나이는 ${this.age}입니다.`);
    }
}

const idol = new Idol('에스파');
const winter = new Winter('김민정', 22);

idol.dance()
winter.dance()
winter.sayHello()



let person: Idol;
person = idol; // idol은 Idol 타입이기 때문에 문제 없이 가능하다
person = winter; // Winter는 부모 클래스를 상속 받았기 때문에 이것도 당연히 가능

let person2: Winter;

//person2 = idol; // 당연히 안된다. 부모는 자식 클래스에 접근 할 수 없다.
// 하지만 이것을 가능 하게 하는 것이 있다. 


/**
 * optional property를 유의하자.
 * 타입스트립트는 다른 oop 언어와 다르게 타입이 같은으면 같은거라고 판단한다.
 * 
 */


class Idol2 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Winter2 extends Idol2 {
    age?: number;

    constructor(name: string, age?: number) {
        super(name);
        this.age = age
    }
}


const idol2 = new Idol2('에스파');
const winter2 = new Winter2('김민정', 22);


let person3: Winter2;

person3 = idol2; // 원래는 당연히 안되지만 옵셔널로 하면 age가 undefined일 경우 자식 클래스와 부모클래스가 같아지므로 같은거라고 인식한다.