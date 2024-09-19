/**
 * property check
 * 
 * 초과 속성 검사
 */

type TName ={
    name:string;
}

type TAge ={
    age:number;
}

const winter  ={
    name:'김민정',
    age:22,
    boolean:true,
}

// 초과 속성은 객체 literal를 직접 변수에 넣을 때만 작동한다.

// 초과 속성이란 선언된 타입 이외에 타입을 넣으면 에러를 발생시키다 또는 선언된 타입을 넣어주지 않았을때도 셍긴다.

//그런데 이미 초기화된 값은 다른 값에 할당 할때는 초과 속성이 발생하지 않는다



//예시로 밑에 코드를 보면 타입이 TName인데 스트링,넘버 값이 들어가있는  winter가 할당이 된다.
// 어차피 타입스크립트는 타이핑만 하는 언어라 js로 컴파일시 코드를 변경시키지 않기 때문에 에러가 없다.
const testName: TName = winter;
const testAge:TAge =winter;
