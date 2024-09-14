/**
 * type inference
 * 
 * 타입 추론 (타입스크립트의 똑똑함을 볼 수있다)
 */

// 초기화 값을 보고 타입을 유추 할 수 있다.

let stringType = 'string'; //변수에 마우스를 가져다 대보면 정확하게 스트링 타입이라고 명시한다.
let numberType = 1;

// 이렇게 한번 타입이 추론되면 다른타입으로 변경을 하려고하면 에러가뜬다.

//stringType = 1;  //스트링 타입이기 때문에 숫자로 변경 불가



// const

const constStringType = '김민정';
// 마우스를 올려보면 타입이아닌 '김민정'으로 명시되어있는데 이는 당연하게도 const 값을 변경할 수 없기 때문에
// '김민정'만 입력이 가능하다는 것을 명시하는 것이다. 타입이아닌 값으로 구체적으로 명시 할 수있다.




// object

let winter = {        // 마우스를 올려보면 역시 name과 year의 타입이 추론되어있다.
    name: '김민정',
    year: 2001,
}

// 그러면 const로 오브젝트를 만들면 타입이아닌 구체적인 값으로 명시 될까?

const winter2 = {  // 당연히 안된다 왜?? 오브젝트는 propety를 바꿀수 있기때문에 const 처럼 구체적인 값으로는 안된다.
    name: '김민정',
    year: 2001,
}



// 하지만 케스팅을 통해 오브젝트 propety를 const화 할 수 있다..

const winter3 = {
    name: '김민정' as const,
    year: 2001 as const,
}

// 이제 마우스를 올려보면 const로 변수를 만든것처럼 타입스크립트가 name과 year를 const로 보고 값을 구체적으로 추론했다.

// winter3.name ='경민'; // 당연히 안된다. 프로퍼티를 const로 선언 했기 때문에 변경이 안된다!!




//array

let numbers = [1, 2, 3, 4, 5]

//numbers.push('6');  // numbers는 number array로 명시되어있기 때문에 당연히 string을 넣으면 에러가 뜬다


// string number 두개가 같인 있는 array의 경우

let numbers2 = [1, 2, 3, '3', '4', '5'];  //numbers는 string 또는 number라고 명시해준다!!


numbers2.push(6)
numbers2.push('6')
// 당연히 둘다 가능 하다.



const one = numbers2[0];  // 마우스를 올려보면 0번 인덱스인 1이 명시될 것 같지만 아니다!! 0번 인덱스 값을 알려주진 않고 타입만 나온다.

// 추가로 현재 array에 존재하지 않는 값을 가져오려고 하면 에러가 나지 않는다.
//타입스크립트는 array의 길이를 알지 못 한다.

const vacontNumber = numbers2[6];











//  tuple

let numbers3 = [1, 2, 3, '4', '5', '6'] as const;

const first = numbers3[2];  // const화 해서 구체적인 값을 명시해준다.






