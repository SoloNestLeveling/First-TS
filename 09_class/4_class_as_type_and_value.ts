/**
 * class as type and value
 */

class Winter {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHello() {
        return `안녕하세요 저는 ${this.name}입니다.`
    }
}

let winter = new Winter('김민정'); // 변수에 마우스를 올려보면 Winter 타입이라고 나온다. 클래스는 클래스 값이 될 수있고
// 이렇게 타입이 될 수 있다.
console.log(winter);

winter = {
    name: '오경민',
    sayHello() {
        return `안녕하세요 저는 ${this.name}입니다.`
    }
}