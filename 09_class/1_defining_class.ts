/**
 *  타입스크립트 class 선언하기
*/

class Winter{
    name:string;
    age:number;
    part:string;

    constructor(name:string, age:number, part:string){
        this.name =name;
        this.age= age;
        this.part =part;
    }

    sayHello(){
        return `안녕하세요 저는 ${this.name}이고 나이는 ${this.age} 파트는 ${this.part}입니다.`
    }
}

const winter = new Winter(
    '김민정',
    22,
    'visual'
)

