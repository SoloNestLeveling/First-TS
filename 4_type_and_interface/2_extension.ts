/**
 * extension
 * 
 * 클래스에 상속이랑 같은 개념이다.
 */


interface Winter {
    name: string;
}

interface WinterPart extends Winter {
    part: string;
}

const aespa: WinterPart = {
    name: '김민정',
    part: 'visual',
}

console.log(aespa);



// type으로 상속 하는법

type Karina = {
    name: string;
}

type KarinaPart = Karina & {
    part: string;
}

const aespa2: KarinaPart = {
    name: '유지민',
    part: 'visual',
}

console.log(aespa2);


// inerface 와 type간의 상속도 가능하다.


// interface에 type 상속하기

interface Person {
    name: string;
    age: number;
}

type Habit = {
    habit: string
}

interface Idolmember extends Habit {
    name: string;
    age: number;
}



let winter: Idolmember = {
    name: '김민정',
    age: 22,
    habit: '집에서 빈둥거리기'
}


// type에 interface 상속하기


type Idolmember2 = Person & {
    habit: string
}

let karina: Idolmember2 = {
    name: '유지민',
    age: 23,
    habit: '밥 먹기',
}



/**
 * extension multyply
 * 
 * 클래스에서는 한번에 하나의 클래스만 상속 가능하지만 타입 상속은 여러개 가능하다.
 */

// type 여러개 상속하기

type DogName = {
    name: string;
}

type DogAge = {
    age: number;

}

type DogBread = {
    bread: String;
}

type Dog = DogName & DogAge & DogBread;

const dog: Dog = {
    name: '오리',
    age: 2,
    bread: '포메리안',
}




//interface 여러개 상속하기


interface CatName {
    name: string;
}

interface CatAge {
    age: number;

}

interface CatBread {
    bread: String;
}

interface Cat extends CatName, CatAge, CatBread { }



const cat: Cat = {
    name: '냥',
    age: 2,
    bread: '브숏',
}


/**
 * overrding
 */

type THeight = {
    height: number;
}

type TRectangle = THeight & {
    height: string;      // 이렇게 원래랑 다른 타입 입력시 에러는 나지 않지만 값을 입력하면 never 타입으로 에러가 생긴다.
    width: number;       // 전에 배웠듯이 primitive를 intersection 하면 never 타입이 된다.
}

const rectangle: TRectangle = {
    width: 100,  // 의심의 여지 없이 이건 잘된다.
    //height:100, // 마우스를 올려보면 never 타입으로 오류가 발생한다. 
}

//위에 코드가 가능하게 하려면 union을 사용한다.

type THeight2 = {
    height: number | string;
}

type TRectangle2 = THeight2 & {
    height: number;  //넘버 또는 스트링에서 넘버로 네로잉 된다.
    width: number;
}

const rectangle2: TRectangle2 = {
    width: 100,
    height: 100,  // 정상적으로 값을보고 number로 추론한다.

}

// 중요한것은 type extension 에서 중복으로 선언 할때는 항상 시그니처가  일치해야 한다.



// interface 중복 할경우

interface IHeight {
    height: number;
}

interface IRectangle extends IHeight {
    width: number;
    //   height:string;  // type과는 다르게 처음부터 에러를 발생시킨다!!!
}


//타입과 동일하게 union을 사용해서는 가능하다.

//Type Extnsion에서 tpye과 interface 가장큰 차이는 타입 중복선언시 다른 시그니처로 선언했을떄
// type은 never 타입으로 바뀌도 interface는 처음부터 에러를 발생 시킨다.