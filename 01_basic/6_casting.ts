/**
 * casting
 * 
 * ts에서 casting 하면 js에서는 적용이 안된다.
 * 
 * 
 */

let winter = 'winter';
let one = 1;

console.log(winter.toUpperCase());

//toUpperCase는 string에서만 사용 가능 한 함수이다.

//console.log(one.toUpperCase()) // 당연히 one은 number이기 때문에 에러가 난다.

// any로 타입을 지정 할 경우

let aespa: any = 1;

//console.log(aespa.toUpperCase()); // any타입으로 하면 어떤 타입도 들어갈수 있기때문에 지금 값이 number여도 toUpperCase()해도 에러가 나지 않느다.
// 하지만 실행하면 타입 에러가 생긴다.



// 그러면 casting 한다면

let stringAespa = aespa as string; // 이런식으로 string 값으로 가정이 된다.

console.log(typeof (aespa as string));
// 타입스크립트에서 한 케스팅은 자바스크립트에서 읽히지 않는다!!
//그래서 출력 결과 string 타입이 아닌 number타입으로 나온다.

//절대 casting을 남발하면 안된다@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

let number = 5;

// console.log(number.toUpperCase()) //당연히 에러 발생

// casting으로 any 타입으로 바꾸면
console.log((number as any).toUpperCase()) // 에러가 살아진다.

// 하지만 자바스크립트는 casting을 인식하지 않기 때문에 자바스크립트 상의 number 타입은 number아다.
// 자바스크립트사의 코드 타입과 내가 작성하고 있는 타입스크립트상의 타입이 다르기 때문에 절대 casting을 남발하면 안된다!!

// casting은 상속할때 값을 구체화 할떄 사용한다 !!


