/**
 * spread operator  
 */

// spread할시 타입 추론이 잘 될까?


const onlyString = ['1', '2', '3', '4'];
const onlyNumbers = [1, 2, 3, 4]


const arr1 = [
    ...onlyString  // 정상적으로 string[]로 타입이 유추 되었다.
]

const arr2 = [
    ...onlyString,  // 역시 (string|number)[] 타입으로 제대로 추론한다.
    ...onlyNumbers
]