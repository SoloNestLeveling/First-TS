/**
 * type vs interface
 * 
 * 
 */


// 오브젝트 선언시

interface IObject{
    x:number;
    y:number;
}

type TObject={
  x: number;
  y:number;
}


// 함수 선언시

interface IFunction{
    (x:number,y:number):number;
}

type TFunction = (x:number,y:number) => number;


/**
 * tpye에서는 할 수있지만
 * interface에서는 할 수 없는 것들
 */

// 1) primitive 타입 선언하기

type Name = string;

// 2) union 타입 선언하기

type UnionType = string | number;

//3) primitive list 또는 tuple 타입 선언하기

type TupleType =[string,number];



/**
 * interface는 할 수 있고
 * type은 할 수 없는 것
 */


// 1) interface merging

interface Person{
    name: string;
}

interface Person{
    height: number;
}

// 이렇게 중복선언을하면 서로 중첩이된다.

let person:Person ={
    name:'w',
    height:180
}


// 프로퍼티,메서드 오버로딩을 통한 interface merging


//프로퍼티 merging
interface GetXnY{
    getX: (x:number) => number;
    getY: (y: number) => number;
}

interface GetXnY{
    getX: (x:number) => number;
    getY: (y: number) => number; //프로퍼티는 오버로딩이 안되기때문에 완전히 똑같은 시그니처로 선언해야한다.
}



//메서드 merging

interface GetXnY2{
    getX(x:number): number;
    getY(y: number): number;
    
}

interface GetXnY2{
    getX(x:number): number;
    getY(y: string): number;  //메서드는 함수이고 함수는 오버로딩이 되기때문에 시그니처가 달라도 된다.
}


const testMerging:GetXnY2 ={
    getX(x){
      return x     //의심의 여지 없이 number를 받고 number를 반환한다.
    },

    getY(y){
      return y; // 에러가 뜬다 이유는 반환 값은 넘버인데 만약 스트링이 들어오면 반환값이 스트링이 되기 때문에 그렇다
                // 에러를 없애려면 반환 값을 구체적으로 지정해준다. 예를들어 return 5; 이런식으로
    }
}