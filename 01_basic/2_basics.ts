/**
 * Types
 */

let helloText: string = 'hello';
// helloText = true; // 당연히 에러발생 이런 식으로 값을 변경 하려고 할때도 위에 타입에 맞게 넣어줘야한다!

/**
 * 자바스크립트에 존재하는 타입
 * 7개의 타입
 */

const stringVar: string = 'string';
const numberVar: number = 1;
const bigIntVar: bigint = BigInt(9999999999);
const booleanVar: boolean = true;
const symbalVar: symbol = Symbol(1);
const nullVar: null = null;
const undefineVar: undefined = undefined; // 당연히 undefine은 이런식으로 명시적으로 쓰지 않는다



/**
 * 타입스크립트에서만 존재하는 타입
 * 
 * 1) any - 아무 타입이나 입력 할 수 있는 치트키같은 타입
 *   적절한 곳에서만 사용한다. 남용X
 */

let anyVar: any;

anyVar = 100;
anyVar = 'string';
anyVar = true;
anyVar = null
anyVar = BigInt(9999999);
anyVar = undefined;
anyVar = Symbol(1);

//any로 할당된 변수는 어느 타입에도 할당 될수 있다.

let testNmber: number = anyVar; //정상적으로 할당된다.

//------------------------------------------------------

// 2) unknown - 알 수 없는 타입
//   any와 비슷하지만 차이점은 unknowm,any 타입으로 선언된 변수 외에 다른 타입에는 할당되지 않는다.

let unknownType: unknown;


let testNumber2: number = anyVar; // 정삭적으로 할당됨
//let testString2: string = unknownType;// 에러가 발생한다.

//------------------------------------------------------

// 3) never -  어떤한 타입도 저장되거나 반환되지 않을떄 사용하는 차입
// 다음 함수강의에서 더 심도잇게 학습

//let testNever: never =null; // 어떤한 값도 할당되지 않는다


//------------------------------------------------------

/**
 * 리스트 타입
 */

const koreanGirlGroup: string[] = ['에스파'];
const booleanList: boolean[] = [true, false];


/**
 * 터미널에서  tsc를 실행하면 똑같은 파일 하나가 자바스크립트로 컴파일 된다.
 * 
 * 타입스크립트는 실행하는 파일이 아니다!!! 타입스크립트로 코드 작성후 자바스크립트로 변환하여 사용한다.!
 * 
 * 그렇듯 any,never 같은 타입들을 남발하면 런 과정에서 오류가 밣생 할 수 있다!
 */
