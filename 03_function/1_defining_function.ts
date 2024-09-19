/**
 * defining function
 * 
 * 기존 자바스크립트 방식은 머리에서 잊어라!
 */


function person(name: string) {
    console.log(name);
}

// 이렇게 타입을 꼭 지정해준다.

function couple(name: string, name2: string) {
    console.log(`${name}와 ${name2}은 사귀고있습니다.`);


}

couple('윈터', '경민');


//optional 

function age(x: number, y?: number) { // y에 마우스를 올려보면 y는 number 또는 undefined라고 명시됨.
    return (`${x},${y}`);
}

console.log(age(4)); //당연히 y는 옵션널 이기때문에 입력하지 않아도 에러가 발생하지 않는다. 출력시 y는 undefined로 출력


//특정값 넣어주기

function year(x: number, y: number = 1992) {
    console.log(`윈터는 ${x}년생 경민은 ${y}년생`);
}

year(2001); // y는 당연히 입력하지 않아는 기본값을 넣어 줬기 때문에 옵셔널과 달리 undefined가 아니다.




/**
 *  나머지 매개변수
 */

function getInfiniteParameters(...args: string[]) { // ...파라미터 = 무한이 받을 수있다.
    return args.map((x) => `너무 좋아${x}`);
}

console.log(getInfiniteParameters('윈터', '카리나'));

/**
 * return type
 * 
 * 반환 타입을 추론한다.
 */

function addNumber(x: number, y: number) {
    return x + y;
}
addNumber(1, 4);//함수에 마우스를 올려보면 함수 괄호하고 :number라고 나온다.
// 이 뜻은 함수 실행시 반환된 타입은 number타입이라는 것이다.


function randomNumber() {
    return Math.random() > 0.5 ?
        10 : '에러';
}
randomNumber(); // 반환 타입을보면 유니언으로 10 또는 '에러'라고 명확히 나온다.





//직접적으로 반환타입을 명시 하는법

function addNumber2(x: number, y: number): number {
    return x + y;
    // return '이게 되나?'  위에서 반환 탑입은 number라고 선언했기 때문에 당연히 에러가 뜬다
}


//에로우 함수로~

const addNumber3 = (x: number, y: number): number => {
    return x * y;
}

//--------------------------------------------------------------------

// void : 아무것도 반환하지 않는다

function doNotReturn(x: number, y: number): void {
    //return x+y // void를 선언했기 때문에 절대 리턴 할 수없다!!
    console.log('리턴 하지않는다');  // 당연히 에러가 발생하지 않는다!
}

// never : 아무것도 받지 않는다

function neverEndingLoop(): never {
    while (true) {

    }
}
// never 타입이 되려면 아무것도 반환 하지 않거나 ,끝나지 않는 함수여야 한다.


function throwError(): never {
    throw Error();
}

console.log(throwError());