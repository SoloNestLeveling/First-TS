/**
 * generic in methods 
 */

class UserVisit<T>{
    id: T;
    server: T;

    constructor(id: T, server: T) {
        this.id = id;
        this.server = server;
    }

    sayHello<Time>(logTime: Time) {
        return `[${logTime}] 안녕하세요 ${this.id}님 ${this.server} 서버에 오신 것을 환영합니다.`
    }
}

const user1 = new UserVisit<string>('AmyongLover', '유토피아');

console.log(user1.sayHello<string>(`2023/6/23`));




// 클래스와 메서드에 같은 제너릭을 선언하면 뭐가 우선시 될까?

class Amyong<T>{
    sayHello<T>(sayHello: T) {
        return `sayHello: ${typeof sayHello}`;
    }
}

const amyong = new Amyong<number>(); // 우선 여기서는 클래스 제너릭을 number라고 선언

amyong.sayHello<string>('안녕하세요') // 보다시피 메서드에 선언한 제너릭 타입이 우선시 된다.

// 사실 이전에 결과는 미리 알수있는데. 위에 보면 클래스의 제너릭 T타입이 비활성화 되어있는 것을 볼 수 있다.

// 이렇게 쓰지 말라고 배우는 것!!