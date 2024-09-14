// 고차 함수

import { time } from "console"
import { isNumberObject } from "util/types"

const firstFunction = () => { console.log("winter is beautiful") }

const secondFunction = (arg: Function) => {

    if (typeof arg === "function") {
        arg()
    } else {
        console.log("winter is cute")
    }

}

secondFunction(firstFunction)


// 함수 반환 : 자바스크립트에서 함수는 간단한 데이터이므로, 다른 함수로도 반환이 가능하다.


const crazy = () => { return String }

console.log(crazy())

const winter = crazy()

console.log(winter("she is very very gorgeous"))






//고차 함수로 반복을 추상화 한다.

const numbers: any = { "a": 1, "b": 2, "c": 3 }

Object.keys(numbers).forEach((k: string) => console.log(numbers[k]))







const unless = (P: any, fn: Function) => {
    if (!P) {
        fn()
    }
}

const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numList.forEach((x) => {
    unless((x % 2), () => {
        console.log(x, "is even")
    })
})



// times 고차함수 사용해서 하기, forEach와 매우 유사하고 ,array보다는 number를 통해 연산하게 된다.


const times = (times: number, fn: Function) => {
    for (let i = 0; i <= times; i++) {
        fn(i)
    }
}


times(100, function (n: number) {
    unless(n % 2, function () {
        console.log(n, "is even")
    })
})


//every

const every = (arr: any[], fn: Function) => {

    let result = true;

    for (let i = 0; i < arr.length; i++)
        result = result && fn(arr[i])
    return result

}

const isNumber = (value: number) => {
    return typeof value === "number"
}

console.log(every([1, 2, "3"], isNumber))


console.log("---------------------------filter")



interface List {
    id: number,
    name: string,
    age: number
}



const users: List[] = [
    { id: 1, name: "winter", age: 23 },
    { id: 2, name: "karina", age: 24 },
    { id: 3, name: "wonyoung", age: 31 },
    { id: 4, name: "yuna", age: 21 },
    { id: 5, name: "enchea", age: 33 },
]


function filterList(users: List[], fn: Function) {
    const newList = [];
    for (let i = 0; i < users.length; i++) {
        if (fn(users[i])) newList.push(users[i])
    }
    return newList
}


const userUnder30 = filterList(users, function (user: List) { return user.age < 30 })

console.log(userUnder30)



const under30IdList = []

for (let i = 0; i < userUnder30.length; i++) {
    under30IdList.push(userUnder30[i].id)
}

console.log(under30IdList)

//여기서 id를 가져오는 부분을 함수형으로 리팩토링 해보자

function map(users: List[], fn: Function) {

    const newLsit = [];
    for (let i = 0; i < users.length; i++) {
        newLsit.push(fn(users[i]))
    }
    return newLsit;
}

const idList = map(userUnder30, function (user: List) { return user.id })

console.log(idList)


console.log(map(filterList(users, function (user: List) { return user.age < 30 }), function (user: List) { return user.name }))




// 

function keys(k: any) {
    return function (o: any) {
        return o[k];
    }

}

console.log(keys("a")({ a: "name", b: "age" }))

