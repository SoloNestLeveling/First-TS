/**
 * narrowing
 * 
 * 타입스크립트가 어떻게 타입을 유추하는지에 대한 논리!
 */

let stringOrNumber: string | number = '김민정'; //여기서 stringOrNumber 타입은 string 또는 number라고 나온다.

console.log(stringOrNumber); //여기서는 이제 타입스크립트가 '김민정'이라는 string값을 보고 string타입이라고 유추하여 string타입으로 나온다.

//이렇게 narrowing된 순간 타입스크립트는 완전히 string이라고 인식한다.


//증명

let number = 12.3453;

console.log(number.toFixed(2)); // toFixed()입력된 자리만큰 반올림해줌 2를 입력햇음으로 소수점 2의 자리부터 반올림한다.
// number 타입에서만 사용가능


//console.log(stringOrNumber.toFixed()) // 위에서 설명한 것처럼 당연히 안 된다는 것을 알 수 있어야 한다.



/**
 * Narrowing 종류
 * 
 * 1) Assignment Narrowing
 * 2) typeof Narrowing
 * 3) Truthiness Narrowing
 * 4) Equality Narrowing
 * 5) in operator narrowing
 * 6) instanceof narrowing
 * 7) discriminated union narrowing
 * 8) exhaustiveness checking
 */



// 1) Assignment Narrowing
// 특정 값을 할당해서 내로잉 (전에 계속 해봄)

let stringOrNumber2: string | number = '김민정';

//-------------------------------------------------------------------------------------

// 2)typeof Narrowing

stringOrNumber2 = Math.random() > 0.5 ? 1 : '김민정'; // Math.random은 0~1사이의 값을 반환한다.
// 그리고 여기서 어떤값이 반환 될지 모르기 때문에  stringOrNumber2는 string or number 타입니다.
// 그러면 이제 typeof를 이용해서 구체적인 타입을 추론 할 수 있게 해보자.

if (typeof stringOrNumber2 === 'string') {
    stringOrNumber2;
} else {
    stringOrNumber2;      // 각각의  stringOrNumber2를 보면 구체적인 타입이 명시되어 있다!!
}


//----------------------------------------------------------------------------------------

// 3) Truthiness Narrowing

let nullOrString: null | string[] = Math.random() > 0.5 ? null : ['김민정', '카리나'];

if (nullOrString) {   // truthly = 조건식이 참인 경우,  if()안에 값만 넣어주면 true를 뜻한다. 
    nullOrString;   // true즉 null 이나 undefined가 아닌 경우
} else {
    nullOrString;   // 참인경우 스트링 리스트 그렇지 않은경우(else) null 을 명시한다. 어떻게 보면 typeof랑 비슷하다.

}



//----------------------------------------------------------------------------------------

// 4) Equality Narrowing

let stringOrNumber3: string | number = Math.random() > 0.5 ? 1 : '김민정';

let stringOrboolean3: string | boolean = Math.random() > 0.5 ? '카리나' : true;


if (stringOrNumber3 === stringOrboolean3) {
    stringOrNumber3  // stringOrNumber3 === stringOrboolean3가 true인 경우는 둘다 string인 경우이다! 그래서 마우스를 올려 보면 string 타입으로 명시된다.
    stringOrboolean3
} else {
    stringOrNumber3 //마우스를 올려보면 스트링 또는 넘버 라고 나오는데 그 이유는 둘이 다른 경우를 보면 이해가 간다. 둘다 스트링이 아닐 수도 있도, 스트링또는 불리언, 또는 넘버일수 있기때문!!
    stringOrboolean3
}


let stringOrNumberOrBoolean: string | number | boolean = Math.random() > 0.5 ?
    '김민정' : Math.random() > 0.5 ? 1 : true;


if (typeof stringOrNumberOrBoolean === 'string') {
    stringOrNumberOrBoolean;
} else {
    stringOrNumberOrBoolean;
}


//---------------------------------------------------------------------------

// 5) in operator narrowing


type Person = {
    name: string;
    age: number;
}

type Dog = {
    name: string;
    bread: string;
}

let person: Person = {
    name: '김민정',
    age: 22,
}

let dog: Dog = {
    name: '물만두',
    bread: '포메리안',
}

let personOrDog: Person | Dog = Math.random() > 0.5 ? person : dog;

// 특정 키값이 들어 있는지 확인하는법
console.log('name' in person); // true가 출력된다.
console.log('bread' in person); // 당연히 false가 출력된다.

// 이제 in operator를 이용해서 네로잉 해보자

if ('bread' in personOrDog) {
    personOrDog;

} else {
    personOrDog;
}

//-------------------------------------------------------------------

// 6) instanceof narrowing

let dateOrString: Date | string = Math.random() > 0.5 ?
    new Date() : '김민정';

if (dateOrString instanceof Date) {
    dateOrString;
} else {
    dateOrString;
}


//-------------------------------------------------------------------

// 7) discriminated union narrowing

interface Human {
    type: 'human';
    height: number;
}

interface Animal {
    type: 'dog';
    bread: string
}

let human: Human = {
    type: 'human',
    height: 180,
}

let animal: Animal = {
    type: 'dog',
    bread: '포메리안'
}

type HumanOrAnimal = Human | Animal;

let humanOrAnimal: HumanOrAnimal = Math.random() > 0.5 ? human : animal;


if (humanOrAnimal.type === 'human') {
    humanOrAnimal;
} else {
    humanOrAnimal;
}
//---------------------------삼항 연사자로 하기 의미는 위랑 당연히 동일하다--------------------------------------

interface Human2 {
    type: 'human';
    height: number;
}

interface Animal2 {
    type: 'dog';
    bread: string
}

type HumanOrAnimal2 = Human2 | Animal2;

let humanOrAnimal2: HumanOrAnimal2 = Math.random() > 0.5 ?
    {
        type: 'human',
        height: 180,
    } : {
        type: 'dog',
        bread: '포메리안'
    }


if (humanOrAnimal2.type === 'human') {
    humanOrAnimal2;
} else {
    humanOrAnimal2;
}



//--------------------------------------------------------------

// 8) exhaustiveness checking


switch (humanOrAnimal2.type) {
    case 'human':
        humanOrAnimal2
        break;
    case 'dog':
        humanOrAnimal2
        break;
    default:
        humanOrAnimal2  // type 이 human, dog 타입이 아닌경우는 존재하지 않음으로 never 타입이된다.


        const _check: never = humanOrAnimal2; // 이렇게 코드 한줄로  만약 type이 추가가되면 당연히 타입이
        // human또는 dog 이외에도 존재 함으로 에러가 발생 할 것이고 그것을 한 눈에 체크할 수 있는 스마트한 방법중 하나이다
        break;
}


