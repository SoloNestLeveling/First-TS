/**
 * problems with array in js 
 * 
 * 자바스크립트 어레이의 근본적인 문제는 아무거나 넣을 수 있다는 것이다,
 * 
 * 타입스크립트는 튜플이 아닌 이상 어레이의 길이를 신경쓰지 않는다.
 */


//복습 타입스크립트 어레이 타입 선언

// 한 어레이에 스트링,넘버 값 전부 넣기

let stringAndNumberArray: (string | number)[] = [
    1,
    '2',
    3,
    '4'
]


// 타입을 각각 입력하면 개별로 입력해줘야한다.
let stringOrNumberArray: string[] | number[] = [
    1,
    2
]

stringOrNumberArray = [
    '1',
    '2'
]


//어레이 타입 추론

const onlyString = ['1', '2', '3'];
const onlyNumbers = [1, 2,];

for (let i = 0; i < onlyNumbers.length; i++) {
    let item = onlyString[i]         // item은 string 타입으로 잘 추론된다.
    console.log(item);
}

console.log('-----------길이 출력');
console.log(onlyString.length);

for (let item of onlyNumbers) {  // 역시 item은 number로 잘 추론된다.

}

let number1 = onlyNumbers[9992]; // 이것도 잘 추론 한다., 하지만 9992번째 어레는 존재하지 않는다.
// 위에서 말했듯이 타입스크립트는 어레이의 길이는 신경쓰지 않는다.
// 이 코드를 자바스크립트에서 컴파일시 number1 타입은 undefined가 된다..  꼭 주의 할 것!!
