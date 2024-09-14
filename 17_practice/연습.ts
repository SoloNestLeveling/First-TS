
interface UserInfo {
    id: number
    name: string,
    age: number,
    state: string
}



const userList: UserInfo[] = [
    {
        id: 1,
        name: "winter",
        age: 23,
        state: "Korea"
    },
    {
        id: 2,
        name: "karina",
        age: 24,
        state: "Korea"
    },
    {
        id: 3,
        name: "ge",
        age: 24,
        state: "Japan"

    },
    {
        id: 4,
        name: "nig",
        age: 22,
        state: "China"
    }
]


const foreignerMember = new Map();
const koreanMember = new Map();


for (let i = 0; i < userList.length; i++) {
    userList[i].state === "Korea" ? koreanMember.set(userList[i].id, userList[i]) : foreignerMember.set(userList[i].id, userList[i])
}

console.log(koreanMember)
console.log(foreignerMember)



//-------------------------------------------------------------


/**
 * global execution context
 * global lexical en
 * global en recode >> object en recode(bindingObj >>> x: 1 , foo : Function Obj)
 *                  >>  declaratve en recode >>>>  y: 2
 * 
 * 
 * 전역코드 평가시점에 객체 환경 레코드에 바인딩된 bindingObject를 통해 전역객체에 변수 식별자를키로 등록하고 암묵적으로 undefined를 바인딩한다.  
 */