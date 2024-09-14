"use strict";
/**
 * Types
 */
let helloText = 'hello';
// helloText = true; // 당연히 에러발생 이런 식으로 값을 변경 하려고 할때도 위에 타입에 맞게 넣어줘야한다!
/**
 * 자바스크립트에 존재하는 타입
 * 7개의 타입
 */
const stringVar = 'string';
const numberVar = 1;
const bigIntVar = BigInt(9999999999);
const booleanVar = true;
const symbalVar = Symbol(1);
const nullVar = null;
const undefineVar = undefined; // 당연히 undefine은 이런식으로 명시적으로 쓰지 않는다
/**
 * 타입스크립트에서만 존재하는 타입
 *
 * 1) any - 아무 타입이나 입력 할 수 있는 치트키같은 타입
 */
let anyVar;
anyVar = 100;
anyVar = 'string';
anyVar = true;
anyVar = null;
anyVar = BigInt(9999999);
anyVar = undefined;
anyVar = Symbol(1);
