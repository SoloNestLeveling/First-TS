/**
 * nested odject
 */


//일반적인 객체 안에 객체 선언
type NestedPerson = {
    identity: {
        name: string,
        age: number
    };
    nationality: string;

};


const winter: NestedPerson = {
    identity: {
        name: '김민정',
        age: 22,
    },
    nationality: '대한민국'
}



// nesting으로 하는 방식


type TpersonIdentity = {

    name: string;
    age: number;

}

type Tperson = {
    identity: TpersonIdentity,
    nationality: string;
}

const winter2: Tperson = {
    identity: {
        name: '김민정',
        age: 22
    },
    nationality: '대한민국'
}


// 이렇게 nesting 하면 오류 발생시 오류 메세지가 더 직관적이고 유지관리 하기 더 좋다,


//interface로 타입 선언시에도 동일하다.

interface IPersonIdentity {
    name: string;
    age: number;
}

interface IPerson {
    identity: IPersonIdentity;
    nationality: string;
}

const winter3: IPerson = {
    identity: {
        name: '김민정',
        age: 22
    },
    nationality: '한국인'
}