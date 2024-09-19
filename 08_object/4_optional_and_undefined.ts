/**
 * optional and undefined property
 */


// 옵션널로 선언하면 유니언으로 undefined가 타입 선언되고, 당연히 값을 입력하지 않아도 알아서 undefined가 된다.,
//그런데 옵셔널이 아닌 그냥 string|undefined 이런식으로 유니언으로 선언시 값을 반드시 넣어줘야한다.


//optional

interface FavouritPerson {
    name: string;
    age: number;
    height?: number;
}

const winter: FavouritPerson = {
    name: '김민정',
    age: 22
}             // 당연히 이렇게만 입력해줘도 아무런 문제가 없다!


// union
interface Animal {
    name: string;
    age: number;
    bread: string | undefined;
}


const dog: Animal = {
    name: '오리',
    age: 2,
    // 이렇게 bread를 입력하지 않으면 에러가 발생한다. 값을 몰라서 넣지 않겠다면 bread: undefined 이렇게 직접 넣어야 한다.
}

