/**
 * readonly type
 * 
 * 간혹 쓴다
 */

interface Dog {
    name: string;
    bread: string;
}

const dog: Readonly<Dog> = {
    name: '오리',
    bread: '포메리안',

}

//dog.bread = '요크' // Readonly를 하면 이렇게 변경이 불가능 해진다. 불러오기는 가능

// 하지만 어디까지나 타입스트립트에서 코드상 유효하지 자바스크립트로 컴파일 하면 변경된다.

//자바스크립트에서 사용하는 property attribute나 freeze 같은 것을 사용한다.

Object.freeze(dog);

console.log(Object.isFrozen(dog));
console.log(Object.getOwnPropertyDescriptor(dog, 'name'));