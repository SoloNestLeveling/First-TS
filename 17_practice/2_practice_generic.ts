import "reflect-metadata";



// 제너릭으로 타입 체크하기

interface Person {
    name: string;
    age: number;
}

const person: Person[] =
    [
        { name: '김민정', age: 23 },
        { name: '오경민', age: 31 }
    ]


function filterBy<T, K extends keyof T>(property: K, value: T[K], array: T[]) {

    return array.filter(x => x[property] === value)

}

console.log(filterBy('name', '김민정', person));
console.log(filterBy('age', 23, person));


//제너릭 중복 피하기

function findValue<T>(array: T[], value: T): string | null {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return `${value}는 ${i}번째 인덱스 입니다.`
        }
    }
    return null
}


const number = [1, 2, 3, 4, 5];
const string = ['name', 'age', 'state'];
const vacant: any[] = [];

console.log(findValue(number, 3));
console.log(findValue(string, 'name'));
console.log(findValue(vacant, []))



//-----------------------------------------------------------------------


class StringAndNumGeneric<T extends string | number>{

    stringAndNumArray(array: T[]): string {

        let returnString = "";

        for (let i = 0; i < array.length; i++) {
            if (i > 0) {
                returnString += ",";
            }
            returnString += array[i].toString();
        }

        return returnString;
    }

}

const stringInstence = new StringAndNumGeneric<string>()

const stringArray: string[] = ["a", "b", "c", "d"];

console.log(stringInstence.stringAndNumArray(stringArray))

const numberInstence = new StringAndNumGeneric<number>()

const numberArray: number[] = [1, 2, 3, 4, 5];

console.log(numberInstence.stringAndNumArray(numberArray))





//-----------------------------------------


// class Asia {
//     constructor(public state: string) { }
// }

// class NorthAmerica {
//     constructor(public state: string) { }
// }

// enum DirectionTemperature {
//     FtoC,
//     CtoF
// }

// function ConvertTemperature(tem: number, fromTo: DirectionTemperature) {
//     return fromTo === DirectionTemperature.FtoC ? (tem - 32) * 5.0 / 9.0 : tem * 9.0 / 5.0 + 32;
// }

// function State<T extends { new(...args: any[]): any }>(constructor: T, ...args: any[]) {
//     return new constructor(...args);
// }

// const korea = State(Asia, '대한민국');
// const japan = State(Asia, '일본');

// console.log(`${korea.state}의 현재 기온: ${ConvertTemperature(94, DirectionTemperature.FtoC).toFixed(1)}C`);
// console.log(`${japan.state}의 현재 기온: ${ConvertTemperature(90, DirectionTemperature.FtoC).toFixed(1)}C`);



//------------------------------------------------------------------------------



class Asia {
    constructor(public name: string) { }
}

class NorthAmerica {
    constructor(public name: string) { }
}


//메타데이터 저장 공간

const mataStateTem = {};
const mataKey = Symbol('mataKey')


const instanceState = <T extends { new(...args: any[]): {} }>(constructor: T, ...args: any) => {

    return new constructor(...args)
}

const korea = instanceState(Asia, "Korea");
const japan = instanceState(Asia, "Japan");
const us = instanceState(NorthAmerica, "The US");



const convertTemperature = (instanceState: any, tem: number) => {

    if (instanceState instanceof Asia) {
        Reflect.defineMetadata(mataKey, `${((tem - 32) * 5 / 9).toFixed(1)}C`, mataStateTem)

    } else {
        Reflect.defineMetadata(mataKey, `${((tem * 9 / 5) + 32).toFixed(1)}F`, mataStateTem)
    }

}





convertTemperature(korea, 90)
convertTemperature(us, 32.2)

console.log(Reflect.getMetadata(mataKey, mataStateTem));




class NonConstructor<Date, Age>{
    date: Date[] = [];
    age?: Age;

}

const winterBirthDay = new NonConstructor<number, number>()

winterBirthDay.age;
winterBirthDay.date;


class NonConstructor2<Date, Age>{
    date: Date[];
    age?: Age;

    constructor(date:Date[], age:Age ){
        this.date = date;
        this.age =age;
    }

}


const winterBirthDay2 = new NonConstructor2([123,132],23);

winterBirthDay2.date
winterBirthDay2.age