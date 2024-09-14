/**
 * generic in type 
 */


type TypeGeneric<T> = T;


const typeGeneric:TypeGeneric<string> ='string';
//const typeGeneric2:TypeGeneric='string';  //에러 

// 타입도 인터페이스랑 맞찬가지로 디폴트값이 없으면 무조건 제너릭 타입을 넣어줘야한다.



type TypeCheck<T= string> = T; 

const typeCheck:TypeCheck ='sp'  // 역시 타입 설정 단계에서 제너릭 타입을 명시해주면 이렇게 제너릭을 안써도 에러가 없다, 타입체크도 가능





// 제너릭은 통합해서 사용 할 수 있다.

interface UserInfo <T>{
    name:T
    age:T
}

interface LastUpdate{
    date: Date;
}

interface ErrorState{
    error: string;
}

type P2pGame = UserInfo<string | number> |LastUpdate |ErrorState; // 미리 여기서 UserInfor의 타입 지정 한 방법

type P2pGame2<T> = UserInfo<T> |LastUpdate |ErrorState;  // 나중에 타입을 받고 싶을떄



const p2pGame:P2pGame ={
    name:'김민정',
    age:22,
    date: new Date(),
    error: '에러발생',
}

const p2pGame2:P2pGame2<string | number> ={  // 나중에 타입을 받는 방법
    name:'김민정',
    age:22,
    date: new Date(),
    error: '에러발생',
}