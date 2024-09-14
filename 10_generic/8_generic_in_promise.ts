/**
 * generic in promise
 * 
 * 가장 많이 쓰게 될 제너릭
 */


// 일반적인 자바스크립트 비동기


// 1) 표현식으로 작성
const afterTwoSenconds = function () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('done')
        },
            2000)
    })
}

// 문장식으로 작성한 runner

async function runner1() {
    const result1 = await afterTwoSenconds();
    console.log(result1);
}

//---------------------------------------------------------------------------------------------------------

// 2)에로우 함수로 작성 
const afterSeconds = (seconds: number) => new Promise((resolve) => {
    setTimeout(() => {
        resolve('done')
    }
        , 1000 * seconds)
})


// 표현식으로 작성한 runner

const runner2 = async function () {
    const result2 = await afterSeconds(2);
    console.log(result2);
}





//에로우 함수로 작성한 runner
const runner3 = async () => {
    const result3 = await afterSeconds(3);
    console.log('arrow');
}

//----------------------------------------------------------------------------------

//기존 비동기의 문제점

const afterTwoSenconds2 = function () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('done')
        },
            2000)
    })
}


async function runner4() {
    const result1 = await afterTwoSenconds2(); //여기서 result의 타입을 보면 unknown으로 나온다.,,
    console.log(result1);
}


//비동기 타입입 유추 하는법

const afterTwoSenconds3 = (): Promise<string> => {  // Promise 반환하고 awiat하고 반환 받을 타입을 제너릭으로 입력한다.
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('done')
        },
            2000)
    })
}


async function runner5() {
    const result1 = await afterTwoSenconds3(); // 그러면 여기서 result1을 보면 타입이 string으로 잘 유츄된다.
    console.log(result1);
}


//추가로

const functionAsync = function () {
    return 'string return'
}  // 타입을 보면 당연히 정상적으로 string을 반환한다고 나온다



//여기에 async만 붙이면 어떻게 될까?

const functionAsync2 = async function () {
    return 'string return'
}  // 타입 확인 결과 Promise를 반화하고 타입은 string을 반환한다고 나온다.
// 이 처럼 함수 안에서 비동기를 실행하든 안하든 async를 선언하면 자동으로 Promise를 반환단다.



const testPrimse = (seconds: number): Promise<string> => new Promise((resolve) => {
    setTimeout(() => {
        resolve('done')
    }, 1000 * seconds)
})


const userRun = async () => {
    const result9 = await testPrimse(2);
}