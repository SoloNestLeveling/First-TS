/**
 * enum 열거법
 */

import { futimesSync } from "fs";


enum Weekdays {
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7,
}

const dayOff = Weekdays.Thursday;

console.log(dayOff);


// 열거 타입은 기본적으로 0부터 시작한다. 숫자를 1로 초기화하지 않으면 값은 0이 된다.




// enum 으로 화씨에서 섭씨로 온도 바꾸는 코드

enum Direction {
    FtoC,
    CtoF

}

function convertTemperature(temp: number, fromTo: Direction): number {
    return Direction.FtoC === fromTo ? (temp - 32) * 5.0 / 9.0 : temp * 9.0 / 5.0 + 32;
}

console.log(`${convertTemperature(100, Direction.FtoC).toFixed(1)}C`);
console.log(`${convertTemperature(37.8, Direction.CtoF).toFixed(1)}C`);






// 큰 숫자 찾기

const findMaxNumber = (num: number[]): number => {

    return Math.max(...num);

}

const numberlist = [1, 33, 32, 52, 23, 12, 42];

const maxValue = findMaxNumber(numberlist);

console.log(maxValue);


// 긴 문자열 찾기

const words: string[] = ['fake', 'superficial', 'unprecedented', 'fluctuate', 'manipulation']

function longestWord(words: string[]) {
    return words.reduce((P, C) => P.length > C.length ? P : C, "")
}

console.log(longestWord(words))


// 팩토리 클래스로 가게 오픈, 클로즈 안내하기 (팩토리 클래스 생성자를 객체 안에서 추상화 한다.)

interface CurrentStoreState {
    open(): void
    close(): void
}

class OpenStore implements CurrentStoreState {
    open(): void {
        console.log('현재 가게 운영중');
    }

    close(): void {
        console.log('21시 운영 종료')
    }
}

class CloseStore implements CurrentStoreState {

    open(): void {
        console.log('내일 오전 9시 운영 시작')
    }
    close(): void {
        console.log('현재 가게 운영 끝');
    }
}

class InformationOfStore {
    openAndClose(): CurrentStoreState {
        const currentTime = new Date();
        const currentHour = currentTime.getHours()

        if (currentHour >= 9 && currentHour < 21) {
            return new OpenStore
        } else {
            return new CloseStore
        }
    }
}

const informationOfStore = new InformationOfStore();

const openStore = informationOfStore.openAndClose();

console.log(`현재시간: ${new Date().getHours() + ":" + new Date().getMinutes()}`);
openStore.open();
openStore.close();




// 표현식으로 하면 이런식으로 타입선언 가능

type num = (x: number, y: number) => number

const checkNum: num = (x, y) => x + y




//-----------------------------------------------------


//for문 정삼각형 출력

const equilateralTriangle = (value: number): void => {

    for (let i = 1; i <= value; i++) {
        const space = ' '.repeat(value - i)
        const star = '*'.repeat(2 * i - 1)
        console.log(space + star)
    }

}

equilateralTriangle(6);


const reactangle = (value: number): void => {

    for (let i = 0; i <= value; i++) {

        let startLine = ''
        for (let j = 0; j <= value; j++) {
            startLine += ' * '
        }

        console.log(startLine)
    }

}

reactangle(4)

//-----------------------------------------------------------------------

//중복값 없애기 + 객체 구조를 리스트로 바꾸기

let overLapNumber = [1, 2, 3, 1, 7, 8, 2, 2, 5]

const deleteOverLap = new Set(overLapNumber);

const arrayNumber = Array.from(deleteOverLap); // 객체 형태를 어레이로 변경


console.log(arrayNumber.sort())  // 어레이로 변경후 숫자들을 순서대로 나열하기



//-------------------------------------------------------

//for문 알고리즘 특정 조건에 맞는 숫자 조합 찾기

// 합이 10이 되는 조합 찾기


const targetNumber = 10;
const numbers = [1, 2, 3, 5, 6, 7, 8, 9];

const findUnionNumber = (array: number[], target: number) => {

    const paris = [];
    const hashMap = new Map()

    for (const num of array) {
        const complement = target - num;

        if (hashMap.has(complement)) {
            paris.push([num, complement]);
        }
        hashMap.set(num, true)
    }
    return paris
}




console.log(findUnionNumber(numbers, targetNumber))




// 곱이 12가 되는 쌍 찾기
const targetNum = 12;
const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const findNumberUnion = (array: number[], target: number) => {

    const pairs = [];
    const seen = new Map();

    for (let num of array) {
        const complement = target / num;

        if (seen.has(complement)) {
            pairs.push([num, complement])
        }
        seen.set(num, true)
    }

    return pairs


}

console.log(findNumberUnion(arrayNum, targetNum));



// 특정 조합 인덱스 찾기

const targetNum2 = 20;
const arrayNum2 = [1, 4, 5, 6, 12, 14, 16];

const findeIndex = (array: number[], target: number) => {

    const numMap: { [key: number]: number } = {}
    for (let i = 0; i < array.length; i++) {

        const complement = target - array[i]

        if (complement in numMap) {
            return [numMap[complement], i]
        }

        numMap[array[i]] = i

    }
    return null

}

console.log(findeIndex(arrayNum2, targetNum2))




// 문자열 뒤집기

const hello = "hello"

const reverseString = (str: string) => {
    return str.split('').reverse().join("") // split - 스트링을 하나하나 리스트로 묶는다, join - 리스트를 하나로 묶는다.
}

console.log(reverseString(hello))


//카데인 알고리즘, 부분배열의합 중 가장 큰값 찾기

const numberList = [3, 4, 1, -5, 6, -3, -1, 9];

const maxSubArraySum = (array: number[]) => {

    let currentMaxNum = -2;
    let maxSum = -2;

    for (let i = 0; i < array.length; i++) {

        currentMaxNum = Math.max(array[i], currentMaxNum + array[i]);
        maxSum = Math.max(maxSum, currentMaxNum);

    }
    return maxSum;

}

console.log(maxSubArraySum(numberList));



