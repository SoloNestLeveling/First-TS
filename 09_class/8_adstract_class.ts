/**
 * abstract class
 * 
 * 자바스크립트에서는 제공안함
 * 하지만 대부분 oop에는 있는 개념
 * 
 * 인스턴스화를 하지 못하게하는 법
 * 
 */


abstract class Person {
    name: string

    constructor(name: string) {
        this.name = name;
    }

}

//const person= new person()// 이렇게 abstract로 class를 정의 하면 인스턴스를 셍성 할 수없다.



//그러면 대체 어디서 사용하느냐?? abstract로 선언된 클래스를 상속하면 자식은 일반적으로 상속받는거와
//다르게 아무런 설정없이 부모클래스의 모든것을 사용 할 수있다.

//예시

class Winter extends Person { };

const winter = new Winter('김민정');  // 어메이징 그냥 바로 사용 가능!!!

console.log(winter.name);



// Abstract롤 선언된 메서드 상속 받기

abstract class SayHello {
    abstract sayHello(name: string): string; //바디에 아무런 값도 넣어주지 않는다.파라미터를 넣는건 선택

}

class Winter2 extends SayHello {
    sayHello(name: string): string {
        return `안녕하세요 저는 ${name} 입니다.`
    }
}

const winter2 = new Winter2();

console.log(winter2.sayHello('김민정'));



//-------------------------------------------------------------

abstract class UserInFo {
    name: string;
    age: number;
    state: string;

    constructor(name: string, age: number, state: string) {
        this.name = name;
        this.age = age;
        this.state = state;
    }

    abstract welcomeUser(): string;
}


class User1 extends UserInFo {
    welcomeUser(): string {
        return `${this.name}님 저희 사이트를 방문해 주셔서 감사합니다.`;
    }
}

const user1 = new User1('김민정', 22, '대한민국');

console.log(user1.welcomeUser());