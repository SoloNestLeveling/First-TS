/**
 * property initialisation
 * 
 * 클래스에서 사용하는 여러가지 초기화 방밥
 */

class Winter {
    // 1)일반적인 클래스 프로퍼티 초기화

    name: string;
    constructor(name: string) {
        this.name = name;
    }

    // 2) 초기값 제공 초기화

    age: number = 22;

    // 3) optional 초기화
    // 옵셔널이기 때문에 constructor에 선언해도 된고 안해도 된다.
    part?: string;


    //4) type of undefined

    personality: string | undefined;


}




// !

class Winter2 {
    name!: string;

    constructor() {
        this.initialise();
    }

    initialise() {
        this.name = '';
    }
}

const winter = new Winter2();

console.log(winter);