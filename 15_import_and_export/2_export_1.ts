/**
 * export
 * export default와는 달리 계속해서 사용 할수 있다.
 */

export class IdolModel {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

export const number = '77';

export interface Cat {
    name: string;
    bread: string;
}

export default {
    name: '김민정',
    age: '23'
}