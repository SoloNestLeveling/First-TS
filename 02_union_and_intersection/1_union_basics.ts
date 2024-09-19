/**
 * Union Basics
 * 
 * 우선은 가장 기본적인 방법을 배운다.
 * 
 * 유니언은 TS에서 타입을 병합 할 수 있는 수많은 방법중 하나이다.
 */


type StringOrBooleanType = string | boolean;

let stringOrBooleanType: StringOrBooleanType = '에스파';
stringOrBooleanType = true;  // 당연히 전부 가능하다

//stringOrBooleanType = null; // 당연히 안된다.


type StrBoolNullType = string | boolean | null; // 이런식으로 무한이 넣어줄수있다.

// 그리고 정확한 string 값을 넣어주는 literal string 방식도 가능하다

type LiteralString = 'initial' | 'loading' | 'done';

let literalString: LiteralString = 'done'; // 이렇게 위에서 선언한 스트링만 들어간다.

/**
 * 리스트의 유니언  
 *
 * 조금 복잡하다.
 */


type StringOrBooleanList = string[] | boolean[]; // 이 코드를 해석하면 스트링 리스트 또는 불리언 리스트

let stringOrBooleanlist: StringOrBooleanList = [
    '윈터',
    '카리나'
]

//let stringOrBooleanlist2: StringOrBooleanList = [
//    '윈터',
//   true
//]

// 이런식으로 string과 boolean을 같은 리스트 안에 넣지 못한다!! 그이유는 위에 코드를 해석한걸 보면
// StringOrBooleanList는 string타입 property를 갔는 리스트와 boolean타입 갔는 독립적인 리스트를 받기 때문이다.

// 한 리스트에 여러 타입을 넣고 싶다면

type StringOrNumberList = (string | number)[];  //이런식으로 선언한다.

let stringOrNumber: StringOrNumberList = [
    '윈터',
    2001,
]                // 이렇게 에러가 발생하지 않고 정상적으로 된다.



/**
 * interface로 사용하는 union
 */

interface Animal {
    name: string;
    age: number;
}

interface Human {
    name: string;
    age: number;
    address: string;
}

type AnialOrHuman = Animal | Human;

let animalOrHuman: AnialOrHuman = {
    name: '김민정',
    age: 21,
    address: '대한민국',
}

console.log(animalOrHuman); // 마우스를 올려보면 Human 타입이라고 명시되어있다!!
// 타입스크립트는 address 프로터피는 human에게만 있기때문에 Human 이라고 추론한거다.


animalOrHuman = {
    name: '포메리안',
    age: 2
}

console.log(animalOrHuman); // 마우스를 올려보면 Animal로 명시됨 
console.log(animalOrHuman.name);
console.log(animalOrHuman.age);
//console.log(animalOrHuman.address); // 보면 이미 최근에 animal로 명시되었기 때문에 address를 불러오면 에러가 나온다
console.log((animalOrHuman as Human).address);
// 만약 강제로 타입스크립트에세 casting으로 human 타입이라고 해버리면 역시 코드상 에러는 안나지만 run할떄 에러가 나온다.
// 여기서도 casting을 막 쓰면 안되는 이유가 설명이 된다.




// type으로 유니언 선언시 장점

let animalOrHuman2: {
    name: string;
    age: number;
} | {
    name: string;
    age: number;
    address: string;
} = {
    name: '포메리안',
    age: 2,

}

console.log(animalOrHuman2.name); // 당연히 가능!!
//console.log(animalOrHuman2.address); // 당연히 안된다, 근데 마우스를 올려서 에러 메세지를 보면
// 직관적이지 못하다. 위에서처럼 type으로 유니언 선언시 더 직관적이다.



//완전히 서로 관계가 없는 유니언을 선언하면?

type Person = {
    name: string;
    age: number;
}

type Fruit = {
    color: string;
    taste: string;
}

type PersonOrFruit = Person | Fruit;

const personOrFruit: PersonOrFruit = {
    name: '김민정',            //이렇게 두가지 모드를 사용가능하다 유니언은 집합의 개념!! 유니언으로 선언한 타입 모드를 집합한다.
    age: 21,                // 그리고 만약 여기서  name을 지우면 에러가 발생하지 않는다, 하지만 name과 함꼐 color를 지우면 에러가 발생한다.
    color: 'red',            // 모두 쓸수 있는데시 person 값이든 fruit 값이든 어느 하나의 값을 모두 충족해줘야한다.
    taste: 'good',
}

console.log(personOrFruit); //마우스를 올려보면 PersonOrFruit 타입이라고 나온다. 모든것을 집합하고 있기때문