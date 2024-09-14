/**
 * type predicate
 * 
 * 타입을 구분하는 함수를 모와둔것
 */


interface Dogs {
    name: string;
    age: number;
}

interface Cats {
    name: string;
    bread: string;
}

type DogsOrCats = Dogs | Cats;

const doge = {
    name: '도지',
    age: 2,
}

const pomerian ={
    name: '오리',
    bread: '포메리안'
}


function isDoge(animal: DogsOrCats): animal is Dogs {
    return 'age' in isDoge !== undefined;
}

if (isDoge(doge)) {
    doge
} else {
    doge
}