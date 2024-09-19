/**
 * tuple
 */

let numberAndStringTuple: [string, number] = [
    '김민정',
    22,
    

] // 순서대로 넣어야하하고 선언한거 이상의 값은 넣을 수없다.

//근데 분명 string 하나와 number 하나 이외의 값은 넣을 수없는데 추가를 하게 되면 어떻게 될까?

numberAndStringTuple.push('유지민'); // 이상하게 에러가 뜨지 않는다.

console.log(numberAndStringTuple); //런시 자바스크립트에는 튜플이라는 개념이 없기때문에 그대로 출력된다.

// 이런 현상을 방지할 수 있는 키워드가 readonly 이다.

let unmodifiableTuple: readonly [string,number] = [
    '김민정',
    22
]


//이제 추가를 하려고 하면

//unmodifiableTuple.push(); // 이렇게 에러가 발생한다.




/**
 * tuple 유추하기
 */

let aespaMembers = ['김민정', '유지민', '닝닝', '애리'];
// 타입은 당연히 정상적으로 유추된다. 그럼 string[]를 좀더 구체적인 타입으로 만들려며?

let aespaMembersTuple = ['김민정', '유지민', '닝닝', '애리'] as const;

// 마우를 올려 보면 구체적인 타입이 들어감으로 readonly 키워드가 생성된다.
//왜냐 as const 함으로써 값에는 김민정','유지민','닝닝','애리' 이 값들만 넣을수 있기때문에


//spread

const aespaSpread: string[] = [
    ...aespaMembersTuple,  // 이것도 string[]이기 때문에 정상적으로 된다.
]

console.log('0---------------------------0')

/**
 * named tuple
 * 
 * 코드를 조듬더 직관적으로 작성하는 쉬운 방법
 */

const namedTuple: [name: string, age: number] = [
    '김민정',
    22
]



/**
 *  assigning tuple to tuple 
 * 
 *   튜플에 할당하기
 * 
 * 튜플은 같은 타입끼리 할당이 가능하다.
 */

const tuple1: [string, string] = ['김민정', '오경민'];
const tuple2: [number, number] = [1, 2];

//let tuple3:[number,number,number] = tuple2; // 같은 타입이 아님으로 당연히 에러

const tuple4: [number, number] = tuple2 // 같은  타입임으로 가능



/**
 *  tuple과 array의 관계
 */

let aespa: [string, string] = [
    '김민정',
    '유지민'
]

let stringArray: string[] = aespa; // 이 할당은 가능하다. 덜 구체적인 타입에 구체적인 타입을 할당 할 수 있다.


//let aespa2: [string, string] = stringArray; // 이건 안된다. 구체적인 타입에는 덜 구체적인 타입을 할당 할 수없다.


/**
 * multi dimensional tuple
 */

const tuple2D: [string, number][] = [
    ['오경민', 30],
    ['김민정', 22],
    ['유지민', 23],

]
