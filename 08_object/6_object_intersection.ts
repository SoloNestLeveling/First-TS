/**
 * object intersection
 */

interface Dog {
    name: string;
    age: number;
}

interface Cat {
    personality: string;
    bread: string;

}

type DogAndCat = Dog & Cat;

const dogAndCat: DogAndCat = {
    //dog
    name: '오리',
    age: 2,

    //cat
    personality: '지랄맞음',
    bread: '코숏',
}
// 당연히 타입 intersection 때문에 dog,cat타입 전부 넣어야한다


//union 타입과 intersection하기

interface Winter {
    group: string;
    part: string;
}


type UnionAndItersectionType = Winter & (Dog | Cat);
// winter 타입의 프로퍼티는 당연히 인터섹션이기 때문에 전부 입력해야하고 나머지 는 유니언이기 때문에 선택이다.


const catOfWinter: UnionAndItersectionType = {
    //winter
    group: '에스파',
    part: 'visual',

    //cat
    personality: '순함',
    bread: '브숏',
}
 // 이런식으로 dog 타입을 넣지 않아도 아무런 문제가 없다.