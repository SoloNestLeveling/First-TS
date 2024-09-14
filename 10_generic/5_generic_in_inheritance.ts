/**
 * generic_in_inheritance
 */

class Person<T, Z>{
    name: T;
    age: Z;

    constructor(name: T, age: Z) {
        this.name = name;
        this.age = age;
    }
}

class Winter extends Person<string, number>{

};

const winter = new Winter('김민정', 22);
console.log(winter);



//상속할때 부모 클래스의 제너릭 타입을 명시 하지 않을 경우 

class KyungMin<T, Z, Part> extends Person<T, Z>{
    part?: Part;

    constructor(name: T, age: Z, part?: Part) {
        super(name, age);
        this.part = part
    }
}

const kyungMin = new KyungMin<string, number, string>('number', 22, 'visual');


//상속 할때 부모 클래스의 제너릭에 타입을 넣을경우

class Winter2 extends Person<string, number>{

}

const winter2 = new Winter2('김민정', 22);
console.log(winter2);














/**
 * 제너릭의 inheritance
 */


interface Person2 {
    name: string
}

class Winter3<T extends Person2>{  // 의미 : T에 name:string 타입은 반드시 넣어주겠다.
    personality?: T

    constructor(personality?: T) {
        this.personality = personality
    }
}

const winter3 = new Winter3({
    name: '김민정',  //T 타입에는 name:string을 반드시 넣어 주겠다고 했으니 필수 적으로 선언해야한다.
    age: 22,
    personality: 22
})

console.log(winter3);




/**
 * keyof 함꼐 사용하기
 * 
 * 특정 키 값을 받겠다고 제한 해준다.
 */

const testObj = {
    a: 1,
    b: 2,
    c: 3,
};

function objectParse<O, K extends keyof O>(obj: O, key: K) {
    return obj[key];
}

const val = objectParse(testObj, 'a');



/**
 * Ternary
 * 
 * 1 === 2 ? true : false
 */

class Idol {
    type?: string;
}

class FemaleIdol extends Idol {
    type: 'Female Idol' = 'Female Idol';
};

class MaleIdol extends Idol {
    type: 'Male Idol' = 'Male Idol';
};

type SpecificIdol<S extends Idol> = S extends FemaleIdol ? FemaleIdol : MaleIdol;


const aespa: SpecificIdol<FemaleIdol> = new FemaleIdol()




//--------------------------------


const myFavouriteCle = {
    name: '김민정',
    age: 23,
    height: 165,
    homeTown: 'busan'
}

function whoAreYou<O, K extends keyof O>(obj: O, key: K) {
    return obj[key];
}

const myFavourite = whoAreYou(myFavouriteCle, 'name');
console.log(myFavourite);