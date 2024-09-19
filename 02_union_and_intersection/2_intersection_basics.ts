/**
 * intersection
 * 
 * and
 */

interface Person{
    name: string;
    age:number;
}

interface Contacts{
    phone:string;
    address:string;
}

type PersonAndAdress = Person & Contacts; //유니언과 마찬가지로 무한이 넣어줄수 있다.

const personAndAddress:PersonAndAdress ={
    name: '김민정',
    age: 21,
    phone:'01011112222',
    address:'대한민국'
}  

// intersection으로 선언된 타입은 모두 넣어줘야 한다. 그래서 and이다.


//추가로 primitive를 intersection하면 never 타입이된다. 예를 들어 string타입이면서 number타입인 값은 존재하지 않기 때문에 

type StringAndNumber = string & number; // 존재하지 않는다!!