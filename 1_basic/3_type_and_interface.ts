/**
 * Type
 * 
 * 타입은 쉼게 말해서 TS의 타입에 이름을 지어주는 역할을 한다.
 * 
 */

type NewStringType = string;
type NewBlooeanType = boolean;
type NewNumberType = number;

//나중에 배울 조금 복잡한 타입

type MaleOrFemale = 'male' | 'female';  // | 은 또는 이라는 뜻이다.

const stringVar: NewStringType = 'test';

// 변수이름에 에러가 뜨는 이유는 자바스크립트는 모든 스코프를 하나의 파일로 인식해서 다른 파일에있는 변수 이름이랑 겹쳐서 에러가뜬다.
// 해결법은 ts.json에서 "moduleDetection"을 force로 변경하면 파일 각각을 다른 스코프로 인식한다.


//-------------------------------------------------

//오브젝트를 타입 선언하는법

type Idol = {
    name: string;
    year: number;
}

const winter: {
    name: string;
    year: number;
} = {
    name: '김민정',
    year: 2001,
}

console.log(winter);


//다른 방법 (위에서 Idol을 타입선언을 미리했음으로 더 간결하게 할 수 있다.)

const winter2: Idol = {
    name: '김민정',
    year: 2001,
}

console.log(winter2);


//-------------------------------------------------


/**
 * Interface
 * 
 * type 하지 못하는 몇가지 문제점들을 해결하기위해 생겨났다
 * 그래서 type 겹치는 기능이 있고 interface만 할 수 있는 기능도 있다.
 */


interface IdolInterface {
    name: string;
    year: number;
}

const winter3: IdolInterface = {
    name: '김민정',
    year: 2001,
}

console.log(winter3);


// 추가로 위에서 타입을 선언한 변수들을 타입으로 넣을 수도 있다.

interface IdolIt {
    name: NewStringType;
    year: NewNumberType;
}

const winter4: IdolIt = {
    name: '윈터',
    year: 2001,
}

console.log(winter4);



//-------------------------------------------------

// optional - 있어도 되고 없어도 되는 값을 선언할떄 ?를 사용한다.

interface IdolOptional {
    name: string;
    year?: number;      // year 앞에 ? 해줌으로써 옵셔널 기능을 부여한다.
}

const winter5: IdolOptional = {
    name: '김민정'         //year를 넣지 않아도 오류가 생기지 않는다!!
}

console.log(winter5);



//   끝으로 interface는 객체 형태로 타입을 선언하고 
// type 처럼 type NewStringType = string; 이런식으로 primitive를 그냥 나열 할 수 없다.