/***
 * partial type
 * 
 * 실제 많이 사용하고 ,업데이트 할때 많이 사용한다
 * 부분적으로 값을 업데이트 할때!!
 */

interface FalvouritePerson {
    name: string;
    age: string | number;
    state: string;
}

const winter: FalvouritePerson = {
    name: '김민정',
    age: 22,
    state: '대한민국',
}

console.log(winter);

//새로운 값으로 업데이트 하기

function updatePerson(original: FalvouritePerson, updates: Partial<FalvouritePerson>): FalvouritePerson {
    return { ...original, ...updates }

}

console.log(updatePerson(winter, {
    name: '윈터',
    age: '만21',
}))




interface UserAge {
    age: number;
}

const kyungMin: UserAge = {
    age: 30
}

console.log(kyungMin);


function updateAge(original: UserAge, update: Partial<UserAge>): UserAge {
    return { ...original, ...update };
}

console.log(updateAge(kyungMin, {
    age: 31,
}))