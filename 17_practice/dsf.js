// 즉시 실행함수 - 정의와 호출이 동시에 이루어진다.
// 장점- 즉시함수 내에 코드를 모아두면 혹시 있을 수도 있는 변수나 함수 이름의 충돌을 방지할 수 있다.

const add = (function () {
    const x = 5;
    const y = 4
    return x * y;
}());

console.log(add)



//재귀함수 - 함수가 자기 자신을 호출하는 것을 재귀 호출이라고 한다. 재귀 함수는 자기 자신을 호출하는 행위, 즉 재귀 호출을 수행하는 함수를 말한다.
// 재귀 함수는 반복되는 처리를 위해 사용한다.
// 재귀함수는 반복믄을 사용할때보다 재귀함수를 사용 했을떄 저 직관적인 경우에만 상용한다.

//일반적인 증가 반복문

function increase(n) {
    for (let i = 0; i <= n; i++)
        console.log(i)
}

increase(10)



//재귀함수를 이용한 증가 함수

function increase2(n) {
    if (n === 10) return;
    console.log(n)
    increase2(n + 1)
}

increase2(0)


console.log("-----------------------------------콜백--------------------")

// 콜백

function repeat(n) {
    for (let i = 0; i < n; i++)
        console.log(i)
}

repeat(5)  // 이 함수는 console에 강하게 의존함으로 다른 일을 할 수 없다. 반복문 내에서 다른 일을 하고 싶다면 함수를 하나더 정의해야한다.


function repeat2(n) {
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0)
            console.log(i)
    }
}

repeat2(6)

// 위에 코드를 고차함수로 다시 작성해보자 공통 로직은 미리 정의해두고 경우에 따라 변경되는 로직은 추상화해서 함수 외부에서 내부로 전달한다.

console.log("--------------------")


function repeat3(n, f) {
    for (let i = 0; i < n; i++) {
        f(i)
    }

}

const logAll = function (i) {
    console.log(i)
}

const logEven = function (i) {
    if (i % 2 === 0)
        console.log(i)
}



repeat3(3, function (i) {
    console.log(i)
}) // 이렇게 익명의 함수 리터럴로 매개변수를 전달 하면 함수를 호출할때마다 함수 객체를 새로 생성해서 메모리를 차지한다.
// 하지만 자바스크립트 엔진은 사용하지 않는 메모리를 가비지 컬렉션을 통해 정리한다.

repeat3(3, logEven) //이렇게 함수 외부에 콜백 함수를 정의하고 매개변수를 통해 고차함수로 전달하면 계속해서 함수 객체를 생성하지 않는다.


//이렇게 변경되는 로직은 f로 추상화했다.
// 이 처럼 매개변수를 통해 함수내부로 전달되는 함수를 콜백 함수라고하며(logAll,logEven), 매개변수를 통해 함수의 외부에서 콜백함수를 전달받은 함수를
// 고차함수라고 한다(repeat3), 고차함수는 콜백 함수를 자신의 일부분으로 합성한다.



console.log("-----------------------순수함수---------")


//순수함수 - 외부상태에 의존하지도 변경하지도 않는다, 즉 부수효과가 없는 함수


let number = 103;

function increase0(n) {
    return ++n
}
console.log(increase0(number))

console.log(number)



const numbers = [100, 2, 3, 52, 1352, 236]

const sortNumbers = numbers.sort((a, b) => a - b);
console.log(sortNumbers)



const numbers2 = [1, 2, 3, 4, 5, 6]

const forEach = (array, fn) => {
    for (let value of array)
        fn(value)
}

forEach(numbers2, (value) => value * 2)





const userList = [
    {
        id: 1,
        name: "winter",
        age: 23,
        state: "Korea"
    },
    {
        id: 2,
        name: "karina",
        age: 24,
        state: "Korea"
    },
    {
        id: 3,
        name: "ge",
        age: 24,
        state: "Japan"

    },
    {
        id: 4,
        name: "nig",
        age: 22,
        state: "China"
    }
]







const Map = (array, fn) => {
    const list = [];
    for (const value of array)
        list.push(fn(value))
    return list

}

console.log(Map(userList, (value) => {
    return { name: value.name, age: value.age }
}))





const filter = (array, fn) => {
    const list = []
    for (const value of array) {
        fn(value) ? list.push(value) : undefined
    }
    return list
}

console.log(filter(userList, (value) => value.age > 22))







const userList2 = [

    {
        where: "Korea",
        members: [{
            id: 1,
            name: "winter",
            age: 23,
            state: "Korea"
        },
        {
            id: 2,
            name: "karina",
            age: 24,
            state: "Korea"
        },
        ]
    },
    {
        where: "foreign",
        members: [{
            id: 3,
            name: "ge",
            age: 24,
            state: "Japan"

        },
        {
            id: 4,
            name: "nig",
            age: 22,
            state: "China"
        }]

    },

]


console.log(Map(userList2, (value) => {
    return value.members
}))


const concatAll = (array, fn) => {
    const list = [];
    for (const value of array) {
        list.push.apply(list, fn(value))
    }
    return list
}

console.log(concatAll(userList2, (value) => { return value.members }))