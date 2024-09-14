/**
 * readonly 프로퍼티
 * 
 * class 프로퍼티에 readonly를 사용하면 값을 변경할 수없다
 */

class Winter {
    readonly name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        return `안녕하세요 저는 ${this.name}입니다`
    }
}

const winter = new Winter('김민정', 22);
console.log(winter.name);


//winter.name ='오경민' //당연히 에러 발생




