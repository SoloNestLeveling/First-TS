/**
 * required type
 * 
 * 모든 속성들을 필수로 만드는 유틸리티
 */

interface Person{
    name:string;
    age?:number;
    gender?:string;
}

const requiredPerson: Required <Person> ={
name:'Aimyong',
age:27,
gender:'Female',  // age,gender는 옵셔널이지만 required를 사용해서 필수로 입력하게 했다.
}

