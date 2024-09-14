/**
 * Override
 */



// 메서드 오버라이드

class IdolGroup {
    say(name: string, members?:string[]) {
        return `안녕하세요 저희는 ${name} 입니다.`
    }
}


class Winter extends IdolGroup {
    // 오버라이드 할 수 있는 3가지 조건
    /**
     *  1) 부모 메서드와 반환 타입이 일치해야한다.
     *  2) 부모 메서드에 필수인 파라미터들이 존재해야한다.
     *  3) 부모 메서드에서 optional인 파라미터들이 자식에서
     *     필수로 지정되면 안된다.
     * 
     * 
     * Child 클래스에서 부모 클래스의 메서드를 오버라이딩하면서 선택적 파라미터를 필수로 지정하는 것은 안티 패턴입니다. 
     * 왜냐하면 이는 Liskov Substitution Principle (리스코프 치환 원칙)를 위반하게 됩니다. 
     * 이 원칙은 자식 클래스는 부모 클래스의 인터페이스(메서드 시그니처)를 따르도록 해야 한다는 것을 의미합니다.
     * 
     */

    say(superName: string, members?:string[],me?: string): string {  // 이렇게 부모 클래스 시그니처에 맞게 memners를 ? 옵셔널로 넣으면 문제 없다.
        if (me) {                                                    // 하지만 선택적이 아니닌 필수 값으로 members:string 이렇게 하면 에러는 없지만 시그니처 원칙을 위반하는거다.
            return `안녕하세요 저는 ${me}이고 ${superName}맴버 입니다.`
        } else {
            return `안녕하세요 저는 ${superName}맴버 입니다.`
        }
    }
};

const idolGroup = new Winter();
console.log(idolGroup.say('에스파'));


const winter = new Winter();
console.log(winter.say('에스파',[], '김민정'));


// 속성 오버라이드

class Winter2 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

//class WinterInfo extends Winter2{
//    name : number;           // 당연히 number를 string에 할당 할 수 없음으로 에러가뜬다.
//
//    constructor(name:number){   
//        this.name =name;
//    }
//    
//}



class Winter3 {
    name: string | number;

    constructor(name: string |number) {
        this.name = name;
    }
}

class WinterInfo extends Winter3{
    name: number;          // 부모 클래스 속성에 타입을 string | number 로 선언하면  이렇게 가능하다.

    constructor(name:number){
        super(name);
        this.name =name;
    }
}


