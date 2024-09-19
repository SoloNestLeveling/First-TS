/**
 * never type
 * 
 * never 타입의 뉘앙스는  " 어떠한 것도 일어날 수 없다 "  이다.
 */

// 1) 함수에서 에러를 던질떄

const throwError =() =>{
    throw Error();
}

// 2) 무한 loop

const infiniteLoop =() =>{
    while(true){

    }
}

// 3) 존재 할 수 없는 intersection

type neverType = string & number;