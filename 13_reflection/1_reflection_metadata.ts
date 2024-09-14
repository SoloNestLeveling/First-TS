/**
 * reflection metadata
 */

import 'reflect-metadata';

const winter = {
    name: '김민정',
    age: 23,
    state: '대한민국'
}

console.log(winter);


/**
 * Reflect 클래스 사용
 * 
 * defineMetadata는 함수고 파라미터를 받는다.
 * 
 * 파라미터 정의
 * 
 * 1) 메타데이터의 키
 * 2) 메타데이터 키에 저장할 값
 * 3) 메타데이터를 저장할 객체
 * 4) 메타데이터를 저장할 객체의 프로퍼티
 * 
 * 4번은 필수가 아니다.
 * 
 */


Reflect.defineMetadata('part', 'vocal', winter);

console.log(winter); // 출력 결과 reflect한 값들은 자바스크립트에서 표시 되지 않는다.


// reflect 값 가져오기

console.log(Reflect.getMetadata('part', winter));


// 키, 값은 언제는 변경 할 수 있다.

Reflect.defineMetadata('part', 'visual', winter);
console.log(Reflect.getMetadata('part', winter));

//이 처럼 완벽하게 map 처럼 사용 할 수 있다. 키,벨류로 저장 변경 가능


// 값으로 primitive 값이 아닌 객체를 넣어줘도 된다.

Reflect.defineMetadata('personality', { personaolity: '착함' }, winter);
console.log(Reflect.getMetadata('personality', winter));


/**
 * 프로퍼티에 저장하기
 */

Reflect.defineMetadata('infor', { group: '에스파' }, winter, 'name');
console.log(Reflect.getMetadata('infor', winter, 'name'));


// 저장한 값 메타데이터 삭제

Reflect.deleteMetadata('infor', winter, 'name');
console.log(Reflect.getMetadata('infor', winter, 'name')); // 삭제가 완료되어 undefined 출력



//키 값으로 메타데이터가 존재하는지 확인하는밥

console.log(Reflect.hasMetadata('infor', winter, 'name')); // false 출력




console.log("-----------------------all key-------------------")

//모든 메타데이터 키값 불러오기

console.log(Reflect.getMetadataKeys(winter));


//own 키워드로 자신이 소유한 값만 가져오기

Reflect.defineMetadata('meta-data', '메타데이터 입니다.', Object.getPrototypeOf(winter));

console.log(Reflect.getMetadata('meta-data', Object.getPrototypeOf(winter)));

console.log(Reflect.getMetadataKeys(winter));
// 출력결과를 보면 프로토타입에 저장한 메타데이터 까지 출력된다.

console.log(Reflect.getOwnMetadataKeys(winter));
// own 키워드를 사용하면 프로토타입에 저장한 메타데이터는 제외하고 winter 객체가 소유한 값만 가져온다.