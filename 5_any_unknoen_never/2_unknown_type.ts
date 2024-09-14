/**
 * unknown
 */

const isString = (target: unknown): target is string => {
    return typeof target === 'string';
}

let targetValue: unknown;

if (isString(targetValue)) {
    targetValue;
}





// any와 unknown의 차이점은 any는 any로 선언된 어떤 타입이든 다른 변수에 할당이 가능하다.
// 하지만 unknown 타입으로 선언된 변수는 any타입이나 unknown 타입에만 할당 가능하다.

let anyValue: any;
const anySting: string = anyValue;  //정상적으로 가능!!


let unknownValue: unknown;
const unknownString: string = unknownValue; // 에러 발생!!
const unknownAny: any = unknownValue;    // 정상적으로 가능!!


//--------------------------------------------------------------

/**
 * union으로 타입 선언시 any제외한 모든 값은 unknown에 흡수된다.
 */


type unknownOrNumber = unknown | number;  // 결과는 unknown 타입이다.
type unknownOrBoolean = unknown | boolean; //역시 결과는 boolean 타입이다.
type unknownOrAny = unknown | any;  // 하지만 any 타입과 유니언 할때는 any롤 흡수되어 any타입이된다.


/**
 * intersection 으로 타입 선언시 any를 제외한 모든 값으로 unknown이 흡수된다.
 * 
 */

type unknownAndNumber = unknown & number; // 타입 확인결과 unknown이 흡수되어 number 타입이 되었다.
type unknownAndAny = unknown & any;  // 하지만 any타입은 union과 동일하게 계속 unknown을 흡수한다.




/**
 * operator 사용
 */

let number: unknown = 10;
let number2: unknown = 20;

number + number2;
number - number2;
number * number2;
number / number2; // 어떤 타입인지 모르기 때문에 사칙연산을 사용 할 수 없다.



number === number2  // 이런 식으로 비교연산은 가능하다@@
number == number2
number !== number2
number != number2