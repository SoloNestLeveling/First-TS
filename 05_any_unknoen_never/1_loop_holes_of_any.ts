/**
 * looopholes of any
 */

const callbackRunner = (x: number, y: number, callback: any) => {
    return callback(x, y);
}

const callback = (x: number, y: number) => {
    return x;
}

console.log(callbackRunner(1,4, callback));


// x 값과 y값을 지워 보면서 any의 문제점을 파악한다 ..  핵심은 아무런 에러도 보여주지 않는다는 것



const multyply = (x: number, y: number): number => {
    return x + y
}

const a1: any = '김민정';
const a2: any = true;

console.log(multyply(1, 2));  // 당연히 전혀 문제가  없다.
console.log(multyply(a1, a2));  // 에러가 나지 않는다... 분명 파라미터는 넘버 타입을 넣었는데 any타입으로 선언한 변수가 입력되고
                               //아무런 에러를 던지지 않는다.... 하지만 런시 에러가 발생... 그전에는 전혀 알 수없다.

// any타입을 남발해서 사용하면.... 지옥을 맛 볼 것이다@@