/**
 * 순수함수 : 주어진 입력에대해 동일한 출력을 반환하는 함수
 *        외부 환경 변수에 의존하지도 않고, 외부 환경 변수를 바꾸면 안된다.
 *        순수 함수 기반 코드는 읽고, 이해하고 테스트하기 쉽다.
 */



var globalValue = "globalValue"


const badFunction = (value: number) => {
    globalValue = "Change..";

    return value * 2
}
//globalValue에 의존하는 다른 함수가 있다고 가정하고, badFunction을 실행하면 그 함수에 영향을 줄수가 있다.




//병렬코드 : 순수함수는 병렬코드를 실행할 수 있게 한다. 순수함수는 해당 환경을 전혀 변동시키지 않으므로 동기화를 걱정할 필요 없다.





let global: string = "something";

const function1 = (x: any) => {

    global = "global"

    return x;
}


const function2 = () => {
    if (global !== "something") {
        console.log("global 값이 변경 되었습니다.")
    } else {
        console.log("변경되지 않음.")
    }
}

function1(1);
function2()  // 순수함수가 아닌경우 이렇개 다른 함수에도 예상치 못한 결과를 가져온다.



//순수함수로 병렬 코드를 다시 실행해보자

let array: number[] = [1, 2, 3];

const function3 = (x: any, array: any) => {

    array = ["1", "2", "3"];

    return console.log(typeof array)
}

const function4 = () => {

    const typeArray = array.every(x => typeof x === "number")
    if (typeArray) {
        console.log("순수함수에 의해 전역 array값이 변경되지 않있습니다.")
    } else {
        console.log("undefined")
    }
}

function3("ArrayValue", array)

function4()


let value = "some"

const function5 = (x: string, value: any) => {
    value = 23

    return console.log(`${typeof value}`)
}

const function6 = (value: string) => {
    if (value === "some") {
        console.log("그대로")
    }
}

function5("x", value);

function6(value)




console.log('------------------------cache-------------------')




// 캐시


const cache: any = {};

const add = (a: number, b: number) => {

    const key = `${a}+${b}`;

    if (cache[key] !== undefined) {
        return cache[key]
    }


    const result: number = a + b;
    cache[key] = result
    return result
}
console.log(cache)
console.log(add(2, 3))
console.log(add(4, 2))
console.log(cache)



