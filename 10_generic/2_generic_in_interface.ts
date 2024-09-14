/**
 * generic in interface
 */

interface Cache<T> {
    date: T[];
    lastUpdate: Date;
}

const cache: Cache<string> = {
    date: ['김민정', '오경민'],
    lastUpdate: new Date(),
}


//------------------------------------------

interface UserInfo<T> {
    userName: T;
    userAge: T;
    state: T
}


interface UserList<T> {
    userInfo: UserInfo<T>;

}

const userList: UserList<string | number> = {
    userInfo: {
        userName: '김민정',
        userAge: 23,
        state: '대한민국'
    }
}

console.log(userList);


//---------------------------------

interface Aespa<T>{
members: T[]
}

const members:Aespa<string>={
    members : ['김민정','카리나','지젤','닝닝']
}

//여기서 만약 <>제너릭 값을 넣어주지 않으면 에러가 생간다. 프로퍼티로 타입 체크가 안됨

// 그런데 타입 설정 단계에서 T 값을 명시 해주면 아래 객체 생성 단계에서 프로퍼티로 타입 체크가 가능하다.



interface AespaTypeCheck<T = string>{
    members: T[];
}

const members2:AespaTypeCheck ={     // 이렇게 제너릭을 넣지 안아도 에러가 안생기고, 추가로 타입 체크까지 가능
    members:['김민정','카리나','지젤','닝닝']
}