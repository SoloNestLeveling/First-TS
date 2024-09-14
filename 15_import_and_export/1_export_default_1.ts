/**
 * Export
 */


// export default는 파일당 1개만 사용 할 수 있다.
class Idolmodel {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}


const number = '12';

number;


// 타입도 가능하다.

//export default interface Cat {
//    name: string
//    bread: string
//}


// 만약!! 여러개의 값을 export default 하고 싶다면 export default 안에 객체로 넣어준다.
// 단 타입은 객체가 될 수없음으로 타입은 이 방법이 불가능 하다.


export default {
    Idolmodel,
    number,
}


